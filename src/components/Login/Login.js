import React, { useRef } from "react";

import "./Login.scss";

import { Link } from "react-router-dom";

const Login = ({ user, setUser, auth }) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailRef.current.value && passwordRef.current.value && !user) {
            auth.signInWithEmailAndPassword(
                emailRef.current.value,
                passwordRef.current.value
            )
                .then((res) => {
                    setUser(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const toggleVisibility = (e) => {
        if (e.target.checked) {
            passwordRef.current.type = "text";
        } else {
            passwordRef.current.type = "password";
        }
    };

    return (
        <main className={"login"}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input
                        type="email"
                        ref={emailRef}
                        placeholder={"enter email here"}
                    />
                </label>

                <label>
                    <p>Password</p>
                    <input
                        type="password"
                        ref={passwordRef}
                        placeholder={"enter password here"}
                    />
                </label>
                <label>
                    <input type="checkbox" onChange={toggleVisibility} />
                    <p>Show password</p>
                </label>

                <button type="submit">Login</button>
            </form>
            <p>
                Need an account? <Link to={"register"}>Register</Link>
            </p>
        </main>
    );
};

export default Login;
