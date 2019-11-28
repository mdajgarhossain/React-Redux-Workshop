import React, { Component } from 'react'

class ChangeName extends Component {

    state = {
        name: 'Jewell',
        isEditable: false
    };

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleEdit = () => {
        this.setState({
            isEditable: true
        });
    }

    handleEnter = (event) => {
        if(event.key === 'Enter') {
            if(event.target.value) {
                this.setState({
                    isEditable: false
                });
            }
        }
    }

    //A little different from workshop coding. For details to see the video day-5 1h:48m
    handleBlur = (event) => {
        if(event.target.value) {
            this.setState({
                isEditable: false
            });
        }
    }

    
    render() {
        return (
            <div>
                <p>Change Name>>><button onClick={this.handleEdit}>Edit</button></p>
                {
                    this.state.isEditable ? (
                    <input 
                    className='form-control'
                    placeholder='Change your name' 
                    value={this.state.name}
                    onChange={this.handleChange}
                    onKeyPress={this.handleEnter}
                    onBlur={this.handleBlur}
                    /> ) : (
                    <p onDoubleClick={this.handleEdit} onClick={() => console.log('Single Click!')}>
                        <strong>{this.state.name}</strong>
                    </p> )
                }
                
            </div>
        )
    }
}

export default ChangeName;