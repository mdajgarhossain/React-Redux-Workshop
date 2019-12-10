import React, { Component } from 'react'

//making a form to create task
class CreateTask extends Component {
    state = {
        task: ''
    }

    changeHandler = (event) => {
        this.setState({
            task: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault();

        if(this.state.task) {
            this.props.getTask(this.state.task); //ekhane getTask() diye state lifting hocche
            this.setState({task: ''});
            event.target.reset();
        } else {
            alert('Please enter task!');
        }
    }


    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <input 
                        type='text'
                        value={this.state.task}
                        onChange={this.changeHandler}
                    />
                    <button type='submit'>Add Task</button>
                </form>
            </>
        )
    }
}

export default CreateTask