import React from 'react';

const SignUp = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='sign-up-form'>
      <h2 className='title'>Sign up</h2>
      <div className='input-field'>
        <i className='fas fa-user'></i>
        <input type='text' name='name' placeholder='Username' />
      </div>
      <div className='input-field'>
        <i className='fas fa-envelope'></i>
        <input type='email' name='email' placeholder='Email' />
      </div>
      <div className='input-field'>
        <i className='fas fa-lock'></i>
        <input type='password' placeholder='Password' name='password' />
      </div>
      <button type='submit' className='btn'>
        Sign Up
      </button>
      <p className='social-text'>Or Sign up with social platforms</p>
    </form>
  );
};

export default SignUp;
