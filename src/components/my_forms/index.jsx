import React, { Component } from 'react';
import Form from './form';

class MyForm extends Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    state = {
        values: {
            name: '',
            email: '',
            password: ''
        },
        errors: {
            name: '',
            email: '',
            password: ''
        }
    };

    validationHandler = () => {
        const errors = {};
        const {values: {name, email, password}} = this.state;

        if(!name) {
            errors.name = 'You must provide your name';
        }
        if(!email) {
            errors.email = 'You must provide your email';
        }
        if(!password) {
            errors.password = 'You must provide your password';
        }
        
        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }
    }

    changeHandler = (event) => {
        this.setState({
            values: {
                ...this.state.values, 
                [event.target.name]: event.target.value
            }
        });
    }

    submitHandler = (event) => {
        event.preventDefault();

        console.log('All data from isolated index:');
        console.log(this.state.values);

        const {errors, isValid} = this.validationHandler();

        if(!isValid) {
            this.setState({errors: {...this.state.errors, ...errors}},
                () => {
                    alert(JSON.stringify(this.state.errors));
                }
            );
        } else {
            this.props.handleForm(this.state.values);
            this.formRef.current.reset();
            // this.setState({errors: {}});
        }  
    }

    blurHandler = () => {
        const {errors, isValid} = this.validationHandler();

        if(!isValid) {
            this.setState({errors: {...this.state.errors, ...errors}});
        }
    }

    focusHandler = (event) => {
        this.setState({
            errors: {
                ...this.state.errors,
                [event.target.name]: ''
            }
        });
    }

    resetHandler = () => {
        console.log('Resetting...');
        this.setState({
            values: {
                name: '',
                email: '',
                password: ''
            }
        });
    }

    render() {
        return (
            <div>
                <Form 
                    values={this.state.values} 
                    changeHandler={this.changeHandler}
                    submitHandler={this.submitHandler}
                    formRef={this.formRef} 
                    resetHandler={this.resetHandler}
                    errors={this.state.errors}
                    blurHandler={this.blurHandler}
                    focusHandler={this.focusHandler}
                />
            </div>
        )
    }
}

export default MyForm;

/*
create a form step by step
1.find out my fields
2.
*/