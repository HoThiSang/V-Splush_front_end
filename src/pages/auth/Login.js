import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axiosService from "../../services/configAxios";
import { CurrentUserContext } from "../../context/CurrentUserContext";

const Login = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const [apiErrors, setApiErrors] = useState([]);
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    const onSubmit = async (data) => {
        try {
            const response = await axiosService.post("/login", data);
            console.log('User data', response.data);
            if (response.data.user) {
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                setCurrentUser(response.data.user);
                navigate("/");
            } else {
                console.log(response.data.error);
            }
        } catch (e) {
            if (e.response.status === 422) {
                e.response.data.errors.forEach(error => {
                    setError(error.field, { type: "manual", message: error.message });
                });
            } else {
                setApiErrors([e.response.data.message]);
            }
        }
    };

    return (
        <div className="registration-form">
            <form onSubmit={handleSubmit(onSubmit)} className="form-rigister">
                <h3>Login</h3>
                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && (
                        <p>{errors.email.message}</p>
                    )}
                </div>
                <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        {...register("password", { required: "Password is required" })}
                    />
                    {errors.password && (
                        <p>{errors.password.message}</p>
)}
                </div>
                {apiErrors.length > 0 && (
                    <div className="alert alert-danger">
                        {apiErrors.map((error, index) => (
                            <p key={index}>{error}</p>
                        ))}
                    </div>
                )}
                <button type="submit">Login</button>
                <div className="remember-signin">
                    <span>Don't have an account?</span>
                    <Link to="/register">Sign up now</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;