import { Field, Form, Formik } from 'formik';
import React from 'react';

const Login = (props) => {
  const submitHandle = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert('You are now logged in.');

    props.setIsLoggedIn(true);
    props.setIsForm(false);
  };

  return (
    <div className='formHigh' onClick={() => props.setIsForm(false)}>
      <div
        className='formBack'
        onClick={(e) => {
          e.stopPropagation();
        }}
      ></div>
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={submitHandle}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Form
          className='form'
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Field name='email' type='email' placeholder='Email' />
          <Field name='name' type='password' placeholder='Password' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
