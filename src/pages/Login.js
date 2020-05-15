import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
//import Profile from './Profile';
import useAuth from '../hooks/useAuth';

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
    <div>
      <p>Please Enter Your Username and Password</p>
      <form>
        <label>
          Username:
          <input
            type="username"
            id="username"
            placeholder="Enter username"
            value={state.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmitClick} />
        {/* <NavLink to="/profile">Profile</NavLink> */}
      </form>
    </div>
  );
};

export default Login;
