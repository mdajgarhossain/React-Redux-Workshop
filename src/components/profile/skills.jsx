import React, {Component} from 'react';

class Skills extends Component {

    render() {
        return(
            <div>
                <strong>Skills:</strong>
                <ul>
                    {this.props.skills.map(skill => (<li>{skill}</li>))}
                </ul>
            </div>
        );
    }
}

export default Skills