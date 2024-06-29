import React, { useState } from 'react';
import AuthenHeader from '../components/Authen/AuthenHeader';
import AuthenLogo from '../components/Authen/AuthenLogo';
import { useNavigate } from 'react-router-dom';

const AuthenScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-sm mx-auto bg-white p-4 mb-10">
      <div>
          <header className="bg-white pt-8 pr-4 pl-4 mb-6">
              <div className="mx-auto flex justify-between items-center">
                  <div className="text-center text-3xl">
                      <h1 className="absolute top-16 left-1/2 transform -translate-x-1/2">Bara</h1>
                  </div>
              </div>
          </header>
        </div>
      <div className='pt-20 pb-20'>
        <AuthenLogo />
      </div>
      
      <div className="p-4">
        <button
          type="submit"
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl"
          onClick={() => navigate('/auth/parent/login')}
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
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl mb-20"
          onClick={() => navigate('/auth/child/login')}
        >
          For children
        </button>
      </div>
    </div>
  );
};

export default AuthenScreen;