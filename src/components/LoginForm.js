import React, { useState } from 'react';
import { login } from '../services/api';


const LoggedInPage = ({ username, token }) => {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <p>Your token is: {token}</p>
      </div>
    );
  };

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await login(username, password);
      console.log(response);
      setUsername(username);
      setToken(response);
      console.log('username:', username);
    console.log('token:', token);
    
    } catch (error) {
      setError('Invalid username or password');
    }
  };
  console.log('token:', token);

  if (token) {
    return <LoggedInPage username={username} token={token} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <div>{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;