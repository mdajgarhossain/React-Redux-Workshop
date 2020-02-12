import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';

const START_LOADING = 'START_LOADING';
const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_ERROR = 'FETCH_ERROR';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

const initState = {
    isLoading: false,
    error: '',
    posts:[]
};

const fetchPosts = posts => ({
    type: FETCH_POSTS,
    payload: posts
});

const catchErrors = (msg='') => ({
    type: FETCH_ERROR,
    payload: msg
});

const startLoading = () => ({type: START_LOADING});

const toggleFavorite = postId => ({
    type: TOGGLE_FAVORITE, 
    payload: postId
});

const reducer = (state, action) => {
    switch(action.type) {
        case START_LOADING: {
            return {
                ...state,
                isLoading: true
            };
        }
        case FETCH_POSTS: {
            const posts = action.payload.map(post => ({
                ...post,
                isFavorite: false
            }));
            return {
                isLoading: false,
                error: '',
                posts: posts
            };
        }
        case FETCH_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.payload || 'Server Error Ocurred'
            };
        }
        case TOGGLE_FAVORITE: {
            // console.log('Post ID', action.payload);
            const posts = [...state.posts];
            const index = posts.findIndex(post => post.id === action.payload);
            posts[index].isFavorite = !posts[index].isFavorite;

            return {
                ...state,
                posts
            };
        }
        default: 
            return state
    }
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
                <h2>Favorite Items</h2>
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