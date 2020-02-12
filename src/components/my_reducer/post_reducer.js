
//Actions
const START_LOADING = 'START_LOADING';
const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_ERROR = 'FETCH_ERROR';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

//Action creators
export const fetchPosts = posts => ({
    type: FETCH_POSTS,
    payload: posts
});

export const catchErrors = (msg='') => ({
    type: FETCH_ERROR,
    payload: msg
});

export const startLoading = () => ({type: START_LOADING});

export const toggleFavorite = postId => ({
    type: TOGGLE_FAVORITE, 
    payload: postId
});

//Post Reducer
export const reducer = (state, action) => {
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