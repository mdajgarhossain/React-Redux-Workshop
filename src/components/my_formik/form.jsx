import  React from 'react';
import {Form, Field} from 'formik';

function MyForm() {
    return(
        <Form>
            <Field
                name='name'
                placeholder='Enter your name'
            />
            <br/>
            <Field
                type='email'
                name='email'
                placeholder='Enter your email'
            />
            <br/>
            <Field
                type='password'
                name='password'
                placeholder='Enter your password'
            />
            <br/>
            <button type='submit'>Submit</button>
        </Form>
    );
}

export default MyForm;