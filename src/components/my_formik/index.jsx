import React, { Component } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import MyForm from './form';
import * as Yup from 'yup';

const CustomField = ({name, type, placeholder}) => (
    <div>
        <Field
            name={name}
            type={type}
            placeholder={placeholder}
        />
        <ErrorMessage name={name} component='div'/>
    </div>
);

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
                        password: '',
                        links: {
                            facebook: '',
                            twitter: ''
                        },
                        phone: 'Nokia',
                        fastCharging: false
                    }}
                    onSubmit={(values, formikBag) => {
                        console.log(values);
                        console.log(formikBag);
                        formikBag.resetForm();
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
                                    <CustomField 
                                        name='name' 
                                        placeholder='Enter your name'
                                    />
                                    <br/>
                                    <CustomField 
                                        name='email' 
                                        type='email' 
                                        placeholder='Enter your email'
                                    />
                                    <br/>
                                    <CustomField 
                                        name='password'
                                        type='password'
                                        placeholder='Enter your password'
                                    />
                                    <br/>
                                    <CustomField 
                                        name='links.facebook'
                                        placeholder='Enter facebook URL'
                                    />
                                    <br/>
                                    <CustomField
                                        name='links.twitter' 
                                        placeholder='Enter twitter URL'
                                    />
                                    <br/>
                                    <div>
                                        <Field name='phone' as='select'>
                                            <option value='Nokia'>Nokia</option>
                                            <option value='Samsung'>Samsung</option>
                                            <option value='iPhone'>iPhone</option>
                                        </Field>
                                    </div>
                                    <br/>
                                    <div>
                                        <Field
                                            type='checkbox'
                                            name='fastCharging'
                                            checked={props.values.fastCharging} 
                                        />
                                        Fast Charging?
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