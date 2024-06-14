import { Link } from "react-router-dom";
import { useState } from "react";

function LoginForm() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:4000/api/user/login', {
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
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <span className="login-text">LOG IN</span>
                <input 
                    className="userInput"
                    name="useremail" 
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input 
                    className="userInput"
                    name="userpassword"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button className='submit-button' type='submit'>Login</button>
            </form>
            <div className="divider-container">
                <hr className="line-division"></hr> 
                <p className="or-part">Or</p>
                <hr className="line-division"></hr>
            </div>

            <p className="sign-up-text">
                Haven’t got an account yet?   
                <Link to='/signup' className="signup-text-link">Sign up</Link>
            </p>
        </div>     
    )
}

export default LoginForm;