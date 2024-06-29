import React, { useState } from 'react';
import AuthenHeader from '../components/AuthenHeader';
import AuthenLogo from '../components/AuthenLogo';

const AuthenScreen = () => {
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
    <div className="max-w-sm mx-auto bg-white p-4 mb-10">
      <AuthenHeader />
      <div className='pt-8 pb-30'>
        <AuthenLogo />
      </div>
      
      <div className="p-4">
        <button
          type="submit"
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl"
        >
          For parent
        </button>
      </div>
      
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
          For children
        </button>
      </div>
    </div>
  );
};

export default AuthenScreen;