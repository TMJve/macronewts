import React from 'react'

function SignInForm() {
  return (
    <div className='form-container'>
        <form>
            <span className='login-text'>SIGN UP</span>
            <input 
                className='userInput'
                placeholder='Email'
                name='newUserEmail'
                type='text'
            />
            <input
                className='userInput'
                placeholder='Password'
                name='newUserPassword'
                type='password'
            />
            <input
                className='userInput'
                placeholder='Confirm Password'
                type='password'
                name='confirmNewUserPassword'
            />
        </form>
    </div>
  )
}

export default SignInForm;
