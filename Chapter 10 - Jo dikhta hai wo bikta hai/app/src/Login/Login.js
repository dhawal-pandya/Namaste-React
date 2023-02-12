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
    <div
      className='@apply fixed z-10 h-screen w-screen m-0'
      onClick={() => props.setIsForm(false)}
    >
      <div
        className=' @apply fixed z-20 h-screen*0.7  left-1/4 w-screen/2 text-white bg-black opacity-90'
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
          className='flex flex-col text-center w-screen/3 justify-center z-30 text-white '
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className='text-center z-40 absolute w-screen/3 left-1/3 top-10 font-extrabold'>
            LogIn
          </div>
          <Field
            className='text-center z-40 absolute w-screen/3 left-1/3 top-40'
            name='email'
            type='email'
            placeholder='Email'
          />
          <Field
            className='text-center z-40 absolute w-screen/3 left-1/3 top-60'
            name='name'
            type='password'
            placeholder='Password'
          />
          <button
            className='text-center z-40 absolute w-screen/3 left-1/3 top-80'
            type='submit'
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
