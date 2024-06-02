import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import axiosService from "../../services/configAxios";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosService.post("/login", { email, password });
            console.log('User data', response.data)
            if (response.data.user) {
                // Lưu vào localStorage
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                // // Lưu thông tin user vào cookie
                // document.cookie = `user=${JSON.stringify(response.data.user)}; path=/`;
                    
                setCurrentUser(response.data.user);
                setEmail("");
                setPassword("");
                navigate("/");
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
            <form onSubmit={handleLogin} className="form-rigister">
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