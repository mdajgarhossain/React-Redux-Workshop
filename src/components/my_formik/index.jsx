import React, { Component } from 'react'
import {Formik, Form, Field} from 'formik';
import MyForm from './form';

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
                >

                    {(props) => {
                        // console.log(props);
                        
                        return (
                            <div> {/*ekhane ei div er proyojon nai, karon upore div ache */}
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