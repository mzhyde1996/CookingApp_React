import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css'
import Header from '../../components/Header/Header';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
  
    let errors = false;
  
    if (username === '') {
      setUsernameErrorMessage('Username field cannot be empty');
      errors = true;
    }
  
    if (password === '') {
      setPasswordErrorMessage('Password field cannot be empty');
      errors = true;
    }

    if (email === '') {
        setEmailErrorMessage('Email field cannot be empty');
        errors = true;
      }
  
    if (errors) {
      return;
    }
  
    // Send login data to backend API
    console.log("sent to backend");
  
    // Redirect to the next page
    window.location.href = '/login'; 

    // Send registration data to backend API
    const formData = {
      email,
      username,
      password
    };

    fetch('http://52.23.196.207:8081/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Handle the response from the backend
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Header />
      <h1>Register</h1>
      <div className='cont'>
          <div>
              <form onSubmit={handleSubmit}>
                  <div>
                      
                      <label htmlFor='email'>Email</label>
                      <input
                          type="email"
                          placeholder='yourEmail@email.com'
                          name = "email"
                          value={email}
                          onChange={(e) => {setEmail(e.target.value);
                                            setEmailErrorMessage('');}}
                      />
                      {emailErrorMessage && <div className='error'>{emailErrorMessage}</div>}
                  </div>

                  <div>
                      <label htmlFor='name'>Username</label>
                      <input
                          type="text"
                          placeholder='LukeIamYourFather'
                          name="username"
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
                          placeholder='Create password'
                          value={password}
                          onChange={(e) => {setPassword(e.target.value);
                                            setPasswordErrorMessage('');}}
                      />
                      {passwordErrorMessage && <div className='error'>{passwordErrorMessage}</div>}
                  </div>
                      
                  <button type="submit" className='btn'>Register</button>
                  <p>Already have an account?</p>
                  <Link to="/login" className='btn'>Login</Link>
              </form>
          </div>
      </div>
    </>
  );
};

export default RegisterForm;
