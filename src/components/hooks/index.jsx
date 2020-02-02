import React, {useState, useEffect} from 'react';

const MyHook = () => {
    // const state = useState(0);
    // console.log(state);

    // const [state, setState] = useState(0);
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(25);

    useEffect(() => {
        console.log('Count Updated!!!');
    }, [count]);

    useEffect(() => {
        console.log('Age Updated!!!');
    }, [age]);

    useEffect(() => {
        // console.log('I am calling when state changes.');
        console.log('I will call only once.');
    }, []);

    return(
        <div>
            <h1>I am Hook</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>            <button onClick={() => setCount(prev => {return prev - 1})}>Decrement</button> {/*setCount eivabeo kaj kore */}
            <div>
                <h2>Age: {age}</h2>
                <button onClick={() => setAge(age + 1)}>Get Older</button>
            </div>
        </div>
    );
}

export default MyHook;