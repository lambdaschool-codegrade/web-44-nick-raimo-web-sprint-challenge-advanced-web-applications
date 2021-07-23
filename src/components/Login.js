import React, { useEffect } from "react";
import React, { useState } from "react";
import { axiosWithAuth } from "./axiosAuth";

const Login = () => {
  state = {
    credentials: {
      username: 'Lambda',
      password: 'School'
    }
  };
  const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('BubblePage', credentials)
      .then(res => {
        localStorage.setItem('AuthToken', res.data.token);
        this.props.history.push('/');
      })
  }

  const handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"