import React from 'react';
import withName from './hoc';

const Another = props => (
    <h1>My name is {props.name}</h1>
);

export default withName(Another);