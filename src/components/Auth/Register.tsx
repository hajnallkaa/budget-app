import React, { useReducer, useEffect, useState } from 'react';

const initialState:State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername': 
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword': 
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled': 
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess': 
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed': 
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError': 
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Register = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
     dispatch({
       type: 'setIsButtonDisabled',
       payload: false
     });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
   
    <form  noValidate autoComplete="off">
    
        <div className="formstyle">
        <h1>Register</h1>
        <input className="inputstyle" id="username"type="email"  placeholder="Username"  onChange={handleUsernameChange}
        onKeyPress={handleKeyPress}></input>
        <input className="inputstyle" id="password" type="password"  placeholder="Password"  onChange={handlePasswordChange}
        onKeyPress={handleKeyPress}></input>
        <input className="inputstyle" id="confirmpassword" type="password"  placeholder="Confirm Password"  onChange={handlePasswordChange}
        onKeyPress={handleKeyPress}></input>
        <input className="inputstyle button" type="submit"onClick={handleLogin} disabled={state.isButtonDisabled}></input>
        </div>
  </form>
  );
}

export default Register;