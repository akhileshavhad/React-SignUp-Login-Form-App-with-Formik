
import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState<{ email: string; password: string } | null>(null); 
  const [password, setPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, formType: string) => {
    e.preventDefault();
    setErrorMessage(''); 
    if (formType === 'signup') {
      const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
      const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

      
      setCredentials({ email, password });
      setSuccessMessage('Sign Up Successful');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else if (formType === 'login') {
      const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
      const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

      if (!credentials) {
        setErrorMessage('Account not found. Please sign up first.');
      } else if (credentials.email === email && credentials.password === password) {
        setSuccessMessage('Login Successful');
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setErrorMessage('Invalid email or password.');
      }
    }
  };

  
  const evaluatePasswordStrength = (password: string) => {
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$');
    const mediumRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d@$!%*?&]{6,}$');

    if (strongRegex.test(password)) {
      setPasswordStrength('Strong');
    } else if (mediumRegex.test(password)) {
      setPasswordStrength('Medium');
    } else if (password.length > 0) {
      setPasswordStrength('Weak');
    } else {
      setPasswordStrength('');
    }
  };

  return (
    <div className="form-container">
      
      <div className="toggle-buttons">
        <button
          className={!isLogin ? 'inactive' : ''}
          onClick={() => {
            setIsLogin(true);
            setSuccessMessage('');
            setErrorMessage('');
          }}
        >
          Login
        </button>
        <button
          className={isLogin ? 'inactive' : ''}
          onClick={() => {
            setIsLogin(false);
            setSuccessMessage('');
            setErrorMessage('');
          }}
        >
          Signup
        </button>
      </div>

      
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      
      {isLogin ? (
        <form onSubmit={(e) => handleSubmit(e, 'login')}>
          <input type="email" name="email" placeholder="Email Address" required />
          <input type="password" name="password" placeholder="Password" required />
          <a href="#forgot">Forgot password?</a>
          <button type="submit" className="submit-btn">Login</button>
        </form>
      ) : (
        <form onSubmit={(e) => handleSubmit(e, 'signup')}>
          <input type="text" name="fullname" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              evaluatePasswordStrength(e.target.value);
            }}
            required
          />
          {passwordStrength && (
            <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
              Password Strength: {passwordStrength}
            </div>
          )}
          <button type="submit" className="submit-btn">Signup</button>
        </form>
      )}

      
      <p>
        {isLogin ? 'Not a member? ' : 'Already a member? '}
        <a href="#switch" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Signup now' : 'Login now'}
        </a>
      </p>
    </div>
  );
};

export default App;
