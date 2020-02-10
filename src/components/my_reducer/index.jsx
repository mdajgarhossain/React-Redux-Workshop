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
    const [count, dispatch] = useReducer(reducer, initData);
    const [count2, dispatch2] = useReducer(reducer, 100);

    return(
        <div>
            <h2>I am using Reducer! Ha ha</h2>
            <div>
                <h3>Count: {count}</h3>
                <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
                <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
            <hr/>
            <div>
                <h3>Count: {count2}</h3>
                <button onClick={() => dispatch2({type: 'increment'})}>Increment</button>
                <button onClick={() => dispatch2({type: 'decrement'})}>Decrement</button>
                <button onClick={() => dispatch2({type: 'reset'})}>Reset</button>
            </div>
        </div>
    );
}

export default MyReducer;