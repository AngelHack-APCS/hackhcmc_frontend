import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthenHeader from "../components/Authen/AuthenHeader";
import AuthenLogo from "../components/Authen/AuthenLogo";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    // e.preventDefault();

    // const formData = {
    //   email: email,
    //   password: password,
    // };

    // try {
    //   const response = await fetch('http://localhost:5000/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //     credentials: 'include',
    //   });

    //   if (response.status >= 200 && response.status < 300) {
    //     navigate('/parent'); // Change this to the appropriate path after login
    //     return;
    //   }

    //   console.error('Error signing in:', response.statusText);
    //   setErrorMessage('Sign in failed. Please try again.');
    // } catch (error) {
    //   console.error('Error signing in:', error);
    //   setErrorMessage('Sign in failed. Please try again.');
    // }`

    navigate("/parent");
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="relative min-h-screen bg-white h-screen p-4 font-sans max-w-screen-lg mx-auto flex flex-col overflow-hidden">
      <AuthenHeader />
      <div className="pt-8 pb-16">
        <AuthenLogo />
      </div>

      <form onSubmit={handleSignIn} className="p-4">
        <h1 className="text-2xl text-center font-semibold mb-4">Sign in</h1>
        <input
          type="email"
          placeholder="email@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-6 border border-gray rounded-xl"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-6 border border-gray rounded-xl"
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="w-full p-2 bg-colorPalette2 text-white rounded-xl"
        >
          Sign in with email
        </button>
      </form>

      <div className="flex items-center justify-center pr-4 pl-4">
        <hr className="w-full h-px bg-gray-800 mr-4" />
        <span className="text-center">or</span>
        <hr className="w-full h-px bg-gray-800 ml-4" />
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
