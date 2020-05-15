import React, { useState, useContext } from 'react';

const AuthContext = React.createContext(null);

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const attemptLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      fetch('/api/login', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        //make sure to serialize your JSON body
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then((response) => {
          if (response.status === 200) {
            setIsLoggedIn(true);
            setUser({
              id: response.id,
              user: response.username,
            });
            resolve();
          } else {
            reject();
          }
        })
        .catch(reject);

      // if (username === 'CompSciLauren' && password === 'mypassword') {
      //   setIsLoggedIn(true);
      //   setUser({
      //     user: 'CompSciLauren',
      //     email: 'compscilauren@gmail.com',
      //     realName: 'Lauren Stephenson',
      //   });

      //   resolve();
      // } else {
      //   reject();
      // }
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const contextValue = {
    isLoggedIn,
    user,
    attemptLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export default useAuth;
export { AuthProvider };
