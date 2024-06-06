import React from 'react'
import { useState } from 'react';

function SignInForm() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        // e.preventdefault();
        if(password != confirmPassword) {
            setError("Password does not match");
            return;
        }
        setError('');

        const response = await fetch('/api/users/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify({email, password}),
        });

        const data = await response.json();
        if(response.ok) {
            console.log('Sign Up Succesful', data);
        } else {
            console.error('Signup failed', data.error)
        }
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
                <button type='submit'>Sign Up</button>
            </form>
            { error && <p>Password does not match!</p>}
        </div>
    )
}

export default SignInForm;
