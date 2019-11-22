import React, {Component} from 'react';

class Links extends Component {

    render() {
        return(
            <div>
                <strong>Social Links:</strong>
                <ul>
                    {this.props.links.map(link => (
                    <li>
                        <a href={link.link}>{link.name}</a>
                    </li>))}
                </ul>
            </div>
        );
    }
}

export default Links;