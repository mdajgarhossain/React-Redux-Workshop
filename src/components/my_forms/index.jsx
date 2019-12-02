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
        }
    };

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
        this.props.handleForm(this.state.values);
    }

    render() {
        return (
            <div>
                <Form 
                values={this.state.values} 
                changeHandler={this.changeHandler}
                submitHandler={this.submitHandler}
                formRef={this.formRef} 
                />
            </div>
        )
    }
}

export default MyForm;