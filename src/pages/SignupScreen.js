import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenHeader from '../components/Authen/AuthenHeader';
import AuthenLogo from '../components/Authen/AuthenLogo';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    setPasswordMatchError(false);

    const formData = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 403) {
        setErrorMessage('Email has been used for another account.');
        return;
      }

      // Check if the status code starts with 2
      if (response.status >= 200 && response.status < 300) {
        navigate('/signup2');
        return;
      }

      console.error('Error signing up:', response.statusText);
      setErrorMessage('Sign up failed. Please try again.');
    } catch (error) {
      console.error('Error signing up:', error);
      setErrorMessage('Sign up failed. Please try again.');
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-4 mb-10">
      <AuthenHeader returnPath="/auth" />
      <div className='pt-8 pb-12'>
        <AuthenLogo />
      </div>
      
      <form onSubmit={handleSignUp} className="p-4 mb-20">
        <h1 className="text-2xl text-center font-semibold mb-10">Sign up</h1>
        <input
          type="email"
          placeholder="email@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-2 mb-8 border ${errorMessage ? 'border-red-500' : 'border-gray'} rounded-xl`}
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`w-full p-2 mb-8 border ${passwordMatchError ? 'border-red-500' : 'border-gray'} rounded-xl`}
        />
        {passwordMatchError && (
          <p className="text-red-500 text-sm mb-4">Passwords do not match.</p>
        )}
        <button
          type="submit"
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignupScreen;