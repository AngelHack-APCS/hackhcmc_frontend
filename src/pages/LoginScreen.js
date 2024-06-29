import React, { useState } from 'react';
import AuthenHeader from '../components/Authen/AuthenHeader';
import AuthenLogo from '../components/Authen/AuthenLogo';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement sign in logic here
  };

  const handleSignUp = () => {
    // Implement sign up logic here
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-4">
      <AuthenHeader />
      <div className='pt-8 pb-16'>
        <AuthenLogo />
      </div>
      
      <form onSubmit={handleSignIn} className="p-4">
        <h1 className="text-2xl text-center font-semibold mb-4">Sign in</h1>
        <input
          type="email"
          placeholder="email@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2  mb-6 border border-gray rounded-xl"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border border-gray rounded-xl"
        />
        <button
          type="submit"
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl"
        >
          Sign in with email
        </button>
      </form>
      
      <div class="flex items-center justify-center pr-4 pl-4">
        <hr class="w-full h-px bg-gray-800 mr-4" />
        <span class="text-center">or</span>
        <hr class="w-full h-px bg-gray-800 ml-4" />
      </div>
      <div className="text-center p-4">
        <button
          onClick={handleSignUp}
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl mb-20"
        >
          Sign up with email
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;