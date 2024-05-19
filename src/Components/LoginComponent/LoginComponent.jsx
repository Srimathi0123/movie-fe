import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginComponent.css'; // Import your CSS file

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3600/user/login', { email, password })
            .then((response) => {
                if (response.status === 200) {
                    alert(`Welcome ${response.data.firstName} ${response.data.lastName}!`);
                    window.localStorage.setItem('token', response.data.token);

                    if (response.data.role === 'admin') {
                        navigate('/admin/dashboard');
                    } else {
                        navigate('/movies');
                    }
                }
            })
            .catch((error) => {
                alert(`Status: ${error.response.status} - ${error.response.data.message}`);
            });
    };

    return (
        <React.Fragment>
            <div className="login">
                <h1>Login</h1>
                <form onSubmit={formSubmitHandler}>
                    <div className='form-group'>
                        <label>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            placeholder='Enter your email address'
                            value={email}
                            onChange={emailHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            placeholder='Enter your password'
                            value={password}
                            onChange={passwordHandler}
                            required
                        />
                    </div>
                    <div className='form-group custom-checkbox custom-control'>
                        <input type='checkbox' className='custom-control-input' id='customCheck1' />
                        <label className='custom-control-label' htmlFor='customCheck1'>
                            Remember me?
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                    <p className='forgot-password text-right'>
                        <a href='#'>Forgot Password?</a>
                    </p>
                    <p className='text-right'>
                        New User? <Link to='/signup'>Register here!</Link>
                    </p>
                </form>
            </div>
        </React.Fragment>
    );
}

export default LoginComponent;
