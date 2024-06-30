import React, { useState } from 'react';
import AuthenHeader from '../components/Authen/AuthenHeader';
import AuthenLogo from '../components/Authen/AuthenLogo';
import { useNavigate } from 'react-router-dom';

const ChildrenLoginScreen = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    navigate('/child');
  };

  return (
    <div className="relative min-h-screen bg-white h-screen p-4 font-sans max-w-screen-lg mx-auto flex flex-col overflow-hidden">
      <AuthenHeader />
      <div className='pt-8 pb-12'>
        <AuthenLogo />
      </div>
      
      <form onSubmit={handleSignIn} className="p-4 mb-20">
        <h1 className="text-2xl text-center font-semibold mb-10">Enter your lovely kids' code</h1>
        <input
          type="text"
          placeholder="XXXXXX"
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

export default ChildrenLoginScreen;