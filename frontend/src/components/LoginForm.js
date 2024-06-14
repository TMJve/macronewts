import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log(email,password)
    
        // const loginData = {
        //     email,
        //     password,
        // };

        // try {
        //     const response = await fetch('http://localhost:4000/api/user/login', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(loginData),
        //     });

        //     if (response.ok) {
        //         const responseData = await response.json(); // Parse response data

        //         if (responseData.success) {
        //             setIsLoggedIn(true);
        //             navigate('/index');
        //         } else {
        //             console.error('Login failed:', responseData.message);
        //         }
        //         } else {
        //         console.error('Login request failed:', response.statusText);
        //         }
        //     } catch (error) {
        //         console.error('Error during login:', error);
        // }
    }    

    return (
        <div className="form-container">
            <form onSubmit={handleLogin}>
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