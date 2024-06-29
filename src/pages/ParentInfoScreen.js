import React, { useState } from 'react';
import AuthenHeader from '../components/Authen/AuthenHeader';
import AuthenLogo from '../components/Authen/AuthenLogo';

const ParentInfoScreen = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [role, setRole] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Implement sign in logic here
    console.log('Name:', name);
    console.log('DOB:', dob);
    console.log('Role:', role);
  }

  return (
    <div className="max-w-sm mx-auto bg-white p-4">
      <AuthenHeader returnPath="/signup" />
      <div className='pt-8 pb-12'>
        <AuthenLogo />
      </div>
      
      <form onSubmit={onSubmit} className="p-4 mb-20">
        <h1 className="text-2xl text-center font-semibold mb-10">We need your information</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <input
          type="date"
          placeholder="Date of Birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full p-2 mb-8 border border-gray rounded-xl"
        />
        <input
          type="text"
          placeholder="Role"
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
