import React, { useState } from 'react';
import AuthenHeader from '../components/Authen/AuthenHeader';
import AuthenLogo from '../components/Authen/AuthenLogo';
import { useNavigate } from 'react-router-dom';

const ParentInfoScreen = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();


  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      dob: dob,
      role: role,
    };

    try {
      const response = await fetch('http://localhost:5000/auth/updateParentInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      // if (response.status === 403) { 
      //   setErrorMessage('Email has been used for another account.');
      //   return;
      // }

      // Check if the status code starts with 2
      if (response.status >= 200 && response.status < 300) {
        navigate('/');
        return;
      }

      console.error('Error signing up:', response.statusText);
      // setErrorMessage('Sign up failed. Please try again.');
    } catch (error) {
      console.error('Error signing up:', error);
      // setErrorMessage('Sign up failed. Please try again.');
    }
  }

  return (
    <div className="relative min-h-screen bg-white h-screen p-4 font-sans max-w-screen-lg mx-auto flex flex-col overflow-hidden">
      <AuthenHeader returnPath="/signup" />
      <div className='pt-8 pb-12'>
        <AuthenLogo />
      </div>
      
      <form onSubmit={onSubmit} className="p-4 mb-20">
        <h1 className="text-2xl text-center font-semibold mb-10">We need your information</h1>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          name="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <input
          type="text"
          placeholder="Role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <button
          type="submit"
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl"
          onClick={onSubmit}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default ParentInfoScreen;
