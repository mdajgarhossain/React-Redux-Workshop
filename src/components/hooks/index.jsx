import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const ITEM_PER_PAGE = 5;

//My custom Hook
function useData(url) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        Axios.get(url)
            .then(({data}) => {
                setData(data.slice(0, 5));
                setError('');
                setLoading(false);
            })
            .catch(e => {
                setError('Server Error Ocurred');
                setLoading(false);
            })
    }, []);

    return {
        loading,
        error,
        data
    }
}

const MyHook = props => {
    const [count, setCount] = useState(0);
    const {loading, error, data: users} = useData(`${BASE_URL}/users`);
    const {loading: loading2, error: error2, data: posts} = useData(`${BASE_URL}/posts`);

    useEffect(() => {
        console.log('New Count Value', count);
    }, [count]);

    return(
        <div>
            <h1>I am Hook</h1>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            <div>
                {loading && <h1>Loading...</h1>}
                {error && <p>{error}</p>}
                {users.length > 0 && (
                    <>
                        <h3>All Users:</h3>
                        <hr/>
                        <ul className='list-group'>
                            {users.map(user => (
                                <li className='list-group-item' key={user.id}>
                                    {user.name} -> {user.email}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <hr />
            </div>
            <div>
                {loading2 && <h1>Loading...</h1>}
                {error2 && <p>{error2}</p>}
                {posts.length > 0 && (
                    <>
                        <h3>All Posts:</h3>
                        <hr/>
                        <ul className='list-group'>
                            {posts.map(post => (
                                <li className='list-group-item' key={post.id}>
                                    {post.title}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
                <hr />
            </div>
        </div>
    );
}

export default MyHook;