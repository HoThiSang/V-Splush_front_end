import { Link } from "react-router-dom"

function Register() {
    return (
        <div class="wrapper">
            <form action="">
                <h1>Register</h1>
                <div class="input-box">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" required />
                </div>
                <div class="input-box">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required />
                </div>
                <div class="input-box">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number" required />
                </div>
                <div class="input-box">
                    <label for="address">Address</label>
                    <input type="text" id="address" placeholder="Enter your address" required />
                </div>
                <div class="input-box">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <div class="input-box">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Re-enter your password" required />
                </div>
                <button type="submit">Create Account</button>
                <div class="remember-signin">
                    <span>Already have an account?</span>
                    <Link to="/login">Sign in now</Link>
                </div>
            </form>
        </div>
    )
}

export default Register