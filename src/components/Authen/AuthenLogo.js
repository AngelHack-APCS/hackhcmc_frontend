import React from 'react';
import logo from '../../assets/capybara.png';

const AuthenLogo = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={logo} alt="Logo" className="h-32" />
        </div>
    );
};

export default AuthenLogo;