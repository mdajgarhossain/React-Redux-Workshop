import React from 'react';
import withData from './hoc';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const Comments = props => {
    let {data=[], loading=false, error=''} = props;

    return (
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <p>{error}</p>}
            {data.length > 0 && (
                <>
                    <h3>All Comments:</h3>
                    <hr/>
                    <ul className='list-group'>
                        {data.map(comment => (
                            <li className='list-group-item' key={comment.id}>
                                {comment.body}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default withData(`${BASE_URL}/comments`, Comments);