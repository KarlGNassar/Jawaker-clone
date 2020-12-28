import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault(); //Prevent Refresh
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo" 
                    src="https://s3.amazonaws.com/akhtaboot_public/ExploreCompanies/jawaker/jawaker.png" 
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button onClick={signIn}
                        type="submit"
                        className="login__signInButton">Sign In</button>

                    <p>
                        By creating or accessing an account on Jawaker you agree to the following terms and conditions.
                    </p>

                    <button  onClick={register}
                        className="login__registerButton">Create Your Jawaker Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
