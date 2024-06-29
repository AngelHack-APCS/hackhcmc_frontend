import React, { useState } from 'react';
import AuthenHeader from '../components/AuthenHeader';
import AuthenLogo from '../components/AuthenLogo';

const ChildrenInfoScreen = () => {
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
      <div className='pt-8 pb-12'>
        <AuthenLogo />
      </div>
      
      <form onSubmit={handleSignIn} className="p-4 mb-20">
        <h1 className="text-2xl text-center font-semibold mb-10">We need your information</h1>
        <input
          type="email"
          placeholder="email@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2  mb-8 border border-gray rounded-xl"
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <input
          type="password"
          placeholder="Confirm password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
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

export default ChildrenInfoScreen;