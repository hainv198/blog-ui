import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from "../../../Context/AuthContext";
import './style.scss'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/admin/home')
        } catch (e) {
            setError(e.message)
            alert(e.message)
        }
    };

    return (
        <div className='container signin'>
            <div style={{width:400}}>
                <div>
                    <h1>Sign in to your account</h1>
                    <p className='py-2'>
                        Don't have an account yet?{' '}
                        <Link to='/signup' >
                            Sign up.
                        </Link>
                    </p>
                </div>
                <form className='sign-form' onSubmit={handleSubmit}>
                    <div >
                        <label>Email Address</label><br/>
                        <input
                                className='input-signin'
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                        />
                    </div>
                    <div>
                        <label>Password</label><br/>
                        <input
                            className='input-signin'
                            onChange={(e) => setPassword(e.target.value)}
                               type='password' />
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <button className='sign-btn'>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;