function LoginForm() {
    return (
        <div className="form-container">
            <form>
                <span className="login-text">LOG IN</span>
                <input 
                    className="userInput"
                    name="useremail" 
                    type="text"
                    placeholder="Email"
                />
                <input 
                    className="userInput"
                    name="userpassword"
                    type="password"
                    placeholder="Password"
                />
            </form>
            <div className="divider-container">
                <hr className="line-division"></hr> 
                <p className="or-part">Or</p>
                <hr className="line-division"></hr>
            </div>

            <p className="sign-up-text">
                Haven’t got an account yet?   
                <a href="#">Sign up</a>
            </p>
            
           
        </div>     
    )
}

export default LoginForm;