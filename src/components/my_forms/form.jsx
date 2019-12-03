import React from 'react';

//for ref:::
/*const Form = React.forwardRef(
    ({values={}, formRef, changeHandler, submitHandler}) => (
        <form ref={formRef} onSubmit={submitHandler}>

                <h3>Please fill up the form below</h3>

                <div className='form-group'>
                    <label htmlFor='name'>What is your name?</label>
                    <input 
                        type='text' 
                        placeholder='Ex. A.H. Jewell' 
                        id='name' 
                        className='form-control'
                        name='name'
                        value={values.name}
                        onChange={changeHandler}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>What is your email?</label>
                    <input 
                        type='email' 
                        placeholder='Ex. jewell@gmail.com' 
                        id='email'
                        className='form-control'
                        name='email'
                        value={values.email}
                        onChange={changeHandler}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>What is your password?</label>
                    <input 
                        type='password' 
                        placeholder='Ex. 123abc' 
                        id='password'
                        className='form-control'
                        name='password'
                        value={values.password}
                        onChange={changeHandler}
                    />
                </div>
                <button className='btn btn-primary'>Submit</button>
            </form>
    )
);*/

const Form = ({
    values, 
    errors={},
    changeHandler, 
    submitHandler, 
    formRef, 
    resetHandler,
    blurHandler,
    focusHandler
}) => (
    <form ref={formRef} onSubmit={submitHandler} onReset={resetHandler}>

        <h3>Please fill up the form below</h3>

        <div className='form-group'>
            <label htmlFor='name'>What is your name?</label>
            <input 
                type='text' 
                placeholder='Ex. A.H. Jewell' 
                id='name' 
                className={errors.name ? 'form-control is-invalid' : 'form-control'}
                name='name'
                value={values.name}
                onChange={changeHandler}
                onBlur={blurHandler}
                onFocus={focusHandler}
            />
            {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
        </div>
        <div className='form-group'>
            <label htmlFor='email'>What is your email?</label>
            <input 
                type='email' 
                placeholder='Ex. jewell@gmail.com' 
                id='email'
                className={errors.email ? 'form-control is-invalid' : 'form-control'}
                name='email'
                value={values.email}
                onChange={changeHandler}
                onBlur={blurHandler}
                onFocus={focusHandler}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
        </div>
        <div className='form-group'>
            <label htmlFor='password'>What is your password?</label>
            <input 
                type='password' 
                placeholder='Ex. 123abc' 
                id='password'
                className={errors.password ? 'form-control is-invalid' : 'form-control'}
                name='password'
                value={values.password}
                onChange={changeHandler}
                onBlur={blurHandler}
                onFocus={focusHandler}
            />
            {errors.password && <div className='invalid-feedback'>{errors.password}</div>}
        </div>

        <div className="form-group">
            <label htmlFor='password'>What is your password?</label>
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
                Javascript
            </label>
        </div>
        <button className='btn btn-secondary'>Submit</button>
    </form>
);

export default Form;