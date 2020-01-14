import React, { Component } from 'react';
import Axios from 'axios';
import withData from './hoc';
import Comments from './comments';

// const Test = props => props.children;
// const Wrapper = props => props.children;

// const Another = props => props.children;

//ekhane withAName is a HOC
// const withName = Component => {
//     const name = 'A.H. Jewell';
//     return class MyComponent extends Component {
//         render() {
//             return(
//                 <Component name={name}/>
//             );
//         }
//     }
// }

// class HigherOrderComponent extends Component {
//     render() {
//         return (
//             <>
//                 <h1>My Name is {this.props.name}</h1>
//                 <h1>I am HOC !</h1>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates modi maxime fuga, repellat impedit ad?</p>
//                 {/* <Another>
//                 <h3>I am Another Test componenet</h3>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, laboriosam?</p>
//                 </Another> */}
//             </>
//         )
//     }
// }

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class HigherOrderComponent extends Component {

    /*state = {
        posts: [],
        loading: false,
        error: ''
    }

    componentDidMount() {
        this.setState({loading: true});

        Axios.get(`${BASE_URL}/posts`)
            .then(({data}) => {
                console.log(data);
                this.setState({
                    posts: data.slice(0, 10),
                    loading: false,
                    error: ''
                })
            })
            .catch(error => {
                // console.log(error.response.data);
                this.setState({
                    loading: false,
                    error: 'Server Error Ocurred'
                })
            })
    }*/

    render() {
        // console.log(this.props);
        const {data=[], loading=false, error=''} = this.props;

        return (
            <div>
                {loading && <h1>Loading...</h1>}
                {error && <p>{error}</p>}
                {data.length > 0 && (
                    <>
                        <h3>All Posts:</h3>
                        <hr/>
                        <ul className='list-group'>
                            {data.map(post => (
                                <li className='list-group-item' key={post.id}>
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <hr/>
                <Comments />
            </div>
        );
    }
}

export default withData(`${BASE_URL}/posts`, HigherOrderComponent);
// export default withName(HigherOrderComponent);