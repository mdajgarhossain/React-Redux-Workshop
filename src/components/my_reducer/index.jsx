import React, { useState, useReducer } from 'react';

const initData = 0;
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment': {
            return state + 1;
        }
        case 'decrement': {
            return state - 1;
        }
        case 'reset': {
            return initData;
        }
        default: return state;
    }
}

const MyReducer = props => {
    /*const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }*/

    const [count, dispatch] = useReducer(reducer, initData);

    return(
        <div>
            <h2>I am using Reducer! Ha ha</h2>
            <h3>Count: {count}</h3>
            {/* <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button> */}
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        </div>
    );
}

export default MyReducer;