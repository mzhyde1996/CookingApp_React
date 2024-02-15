import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'
import Header from '../../components/Header/Header';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    let errors = false;
  
    if (username === '') {
      setUsernameErrorMessage('Username field cannot be empty');
      errors = true;
    }
  
    if (password.trim() === '') {
      setPasswordErrorMessage('Password field cannot be empty');
      errors = true;
    }
  
    if (errors) {
      return;
    }
  
    // Send login data to backend API
    console.log("sent to backend");
  
    // Redirect to the next page
    window.location.href = '/'; // Change this to the URL of the next page
  };
  

  return (
    <div>
        <Header style={{position: 'fixed'}} />
        <h1>Log In</h1>
        <div className='cont'>
            <div>
                <form action='' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='username'>Username</label>
                        <input
                            type="text"
                            placeholder='LukeIamYourFather'
                            value={username}
                            onChange={(e) => {setUsername(e.target.value);
                                             setUsernameErrorMessage('');}}
                        />
                        {usernameErrorMessage && <div className='error'>{usernameErrorMessage}</div>}
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value);
                                               setPasswordErrorMessage("")}}
                        />
                        {passwordErrorMessage && <div className='error'>{passwordErrorMessage}</div>}
                    </div>
                    <button type="submit" className='btn loginbtn'>Login</button>
                    <p>Are you new here?</p>
                    <Link to = "/register" className='btn regbtn'>Register</Link>
                </form>
            </div>
        </div>
    </div>
  );
};

export default LoginForm;
