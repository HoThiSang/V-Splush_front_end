import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axiosService from "../../services/configAxios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosService.post("/login", { email, password });
            if (response.data.user) {
                // Lưu vào localStorage
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                // // Lưu thông tin user vào cookie
                // document.cookie = `user=${JSON.stringify(response.data.user)}; path=/`;

                setUser(response.data.user);
                setEmail("");
                setPassword("");
                navigate("/register");
            } else {
                console.log(response.data.error);
            }
        } catch (e) {
            if (e.response.status === 422) {
                setErrors(e.response.data.errors);
            }
        }
    }

    return (
        <div className="registration-form">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter your email" />
                    {errors.email && (
                        <p>{errors.email[0]}</p>
                    )}
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Enter your password" />
                    {errors.password && (
                        <p>{errors.password[0]}</p>
                    )}
                </div>
                <button type="submit">Login</button>
                <div className="remember-signin">
                    <span>Don't have an account?</span>
                    <Link to="/register">Sign up now</Link>
                </div>
            </form>
        </div>
    )
}

export default Login