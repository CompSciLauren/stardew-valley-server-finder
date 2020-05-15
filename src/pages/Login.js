import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles.css';

const Login = () => {
  const auth = useAuth();
  const [
    shouldRedirectForSuccessfulLogin,
    setShouldRedirectForSuccessfulLogin,
  ] = useState(false);

  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    auth
      .attemptLogin(state.username, state.password)
      .then(() => {
        setShouldRedirectForSuccessfulLogin(true);
      })
      .catch(() => {
        alert('Incorrect username or password');
      });

    // if (state.username === 'CompSciLauren' && state.password === 'mypassword') {
    // console.log('Success');
    //navigate(Profile);

    // } else {
    console.log('Failed to login');
    // }
  };

  if (shouldRedirectForSuccessfulLogin) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="login-section">
      <h1>Sign in to your account</h1>
      <div className="login-grid-container">
        <div className="grid-item">
          <label>Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={state.username}
            onChange={handleChange}
          />
        </div>
        <div className="grid-item">
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="grid-item">
          <button className="primaryBtn" onClick={handleSubmitClick}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
