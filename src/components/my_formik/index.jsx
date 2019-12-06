import React, { Component } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import MyForm from './form';
import * as Yup from 'yup';


const myValidationSchema = Yup.object().shape({
    name: Yup.string('Must Be String')
        .required('Name is Required')
        .min(3, 'Min 3 Chars')
        .max(10, 'Max 10 Chars'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
    password: Yup.string()
        .min(4,'Min 4 Chars')
        .required('Password is Required')
});

//1st way to handle Form in Formik
class MyFormik extends Component {
    render() {
        return (
            <div>
                <h1>Formik Demo</h1>
                <Formik
                    initialValues={{
                        name: '', 
                        email: '', 
                        password: ''
                    }}
                    onSubmit={(values, formikBag) => {
                        console.log(values);
                        console.log(formikBag);
                    }}
                    validationSchema={myValidationSchema}
                    // validateOnBlur={true}
                    // validateOnChange={false}
                >

                    {(props) => {
                        console.log('Errors: ', props.errors);
                        
                        return (
                            <div> {/*ekhane ei div er proyojon nai, karon upore div ache */}
                                <Form>
                                    <div>
                                        <Field
                                            name='name'
                                            placeholder='Enter your name'
                                        />
                                        <ErrorMessage name='name' component='div'/>
                                    </div>
                                    <br/>
                                    <div>
                                        <Field
                                            type='email'
                                            name='email'
                                            placeholder='Enter your email'
                                        />
                                        <ErrorMessage name='email' component='div'/>
                                    </div>
                                    <br/>
                                    <div>
                                        <Field
                                            type='password'
                                            name='password'
                                            placeholder='Enter your password'
                                        />
                                        <ErrorMessage name='password' component='div'/>
                                    </div>
                                    <br/>
                                    <button type='submit'>Submit</button>
                                </Form>
                            </div>
                        )
                    }}

                </Formik>
            </div>
        )
    }
}


//2nd way to handle Form in Formik
// class MyFormik extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Formik Demo</h1>
//                 <Formik
//                     component={MyForm}
//                     initialValues={{
//                         name: '', 
//                         email: '', 
//                         password: ''
//                     }}
//                     onSubmit={(values, formikBag) => {
//                         console.log(values);
//                         console.log(formikBag);
//                     }}
//                 />
//             </div>
//         )
//     }
// }

export default MyFormik;