import React from 'react'
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

function SignInForm() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {signup, error, isLoading} = useSignup()


    const handleSubmit = async(e) => {
        e.preventDefault();
        
        await signup(email, password, confirmPassword)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <span className='login-text'>SIGN UP</span>
                <input 
                    className='userInput'
                    placeholder='Email'
                    name='newUserEmail'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='userInput'
                    placeholder='Password'
                    name='newUserPassword'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className='userInput'
                    placeholder='Confirm Password'
                    type='password'
                    name='confirmNewUserPassword'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button disabled={isLoading} className='submit-button' type='submit'>Sign Up</button>
                { error && <p>{error}</p>}
            </form>
            
        </div>
    )
}

export default SignInForm;
