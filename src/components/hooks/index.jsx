import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const ITEM_PER_PAGE = 5;

const MyHook = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);

    //Another way to define state
    // const [state, setState] = useState({
    //     data: [],
    //     loading: false,
    //     error: ''
    // });

    useEffect(() => {
        setLoading(true)
        Axios.get(`${BASE_URL}/posts`)
            .then(({data}) => {
                setPosts(data.slice(
                    count * ITEM_PER_PAGE, 
                    count * ITEM_PER_PAGE + ITEM_PER_PAGE
                    )
                );
                setError('');
                setLoading(false);
            })
            .catch(e => {
                setError('Server Error Ocurred');
                setLoading(false);
            })
    }, [count]);

    useEffect(() => {
        console.log('New Count Value', count);
    }, [count]);

    return(
        <div>
            <h1>I am Hook</h1>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
            {loading && <h1>Loading...</h1>}
                {error && <p>{error}</p>}
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
        </div>
    );
}

export default MyHook;