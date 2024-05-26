import { Link } from "react-router-dom"

function Login() {
    return (
        <div class="wrapper">
            <form action="">
                <h1>Login</h1>
                <div class="input-box">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div class="input-box">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit">Login</button>
                <div class="remember-signin">
                    <span>Don't have an account?</span>
                    <Link to="/register">Sign up now</Link>
                </div>
            </form>
        </div>
    )
}

export default Login