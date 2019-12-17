import React, { Component } from 'react';

import ChildComponent from './child_components';


const URL = 'https://jsonplaceholder.typicode.com/posts';

class LifeCycleDemo extends Component {
    state = {
        posts: [],
        error: ''
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({posts: data})
            })
            .catch(error => {
                console.log(error);
                this.setState({error: 'Server not found!'});
            })
    }
    

    render() {
        const {posts, error} = this.state;

        if(error) {
            return(
                <h1>{error}</h1>
            );
        }

        if(posts.length === 0) {
            return(
                <h1>Loading...</h1>
            );
        }

        return (
            <div>
                <h1>All posts from fake REST API</h1>
                {/* <h1>{posts.length === 0 && 'Loading...'}</h1> */}
                <ul className='list-group'>
                    {posts.map(post => (
                        <li key={post.id} className='list-group-item'>{post.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default LifeCycleDemo;