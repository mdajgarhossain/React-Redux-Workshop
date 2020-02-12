import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';

import {
    reducer, 
    startLoading, 
    fetchPosts, 
    catchErrors, 
    toggleFavorite
} from './post_reducer';

const initState = {
    isLoading: false,
    error: '',
    posts:[]
};

const MyReducer = props => {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        dispatch(startLoading());
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(({data}) => {
                data = data.slice(0, 5)
                dispatch(fetchPosts(data))
            })
            .catch(e => {
                console.log(e);
                dispatch(catchErrors())
            })
    }, []);
    // console.log(state);

    const {isLoading, error, posts} = state; //For all posts

    const favoritePosts = posts.filter(post => post.isFavorite); //For all favorite posts

    return(
        <div>
            <h2>All Posts</h2>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {posts.length > 0 && (
                <ul className='list-group'>
                    {posts.map(post => (
                        <li key={post.id} className='list-group-item d-flex'>
                            {post.title}
                            <button 
                                onClick={() => dispatch(toggleFavorite(post.id))} 
                                className='btn btn-secondary btn-sm ml-auto'
                            >
                                {post.isFavorite ? 
                                    'Added to Favorite' : 
                                    'Add to Favorite'
                                }
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <hr />

            <div>
                <h2>Favorite Posts</h2>
                <ul className='list-group'>
                    {favoritePosts.map(post => (
                        <li key={post.id} className='list-group-item'>{post.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MyReducer;