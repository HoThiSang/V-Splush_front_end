

function Register(){
    return (
        <div class="wrapper">
                                            <form action="">
                                                <h1>Register</h1>
                                                <div class="input-box">
                                                    <input type="text" placeholder="Name" required />
                                                </div>
                                                <div class="input-box">
                                                    <input type="email" placeholder="Email" required />
                                                </div>
                                                <div class="input-box">
                                                    <input type="tel" placeholder="Phone" required />
                                                </div>
                                                <div class="input-box">
                                                    <input type="text" placeholder="Address" required />
                                                </div>
                                                <div class="input-box">
                                                    <input type="password" placeholder="Password" required />
                                                </div>
                                                <div class="input-box">
                                                    <input type="password" placeholder="Re-enter Password" required />
                                                </div>
                                                <button type="submit">Create Account</button>
                                                <div class="remember-signin">
                                                    <span>Already have an account?</span>
                                                    {/* <a href="#">Sign in now</a> */}
                                                </div>
                                            </form>
                                        </div>
    )
}

export default Register