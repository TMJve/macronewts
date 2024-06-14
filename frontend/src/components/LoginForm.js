import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from '../hooks/useLogin'

function LoginForm() {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin()

    const handleSubmit = async(e) => {
        e.preventDefault();

        await login(email, password)
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
                <button disabled={isLoading} className='submit-button' type='submit'>Login</button>
                {error && <div className="error">{error}</div>}
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