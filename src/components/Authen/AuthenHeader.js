import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from '../../assets/arrow.png'; // Ensure this path is correct

const AuthenHeader = ({ returnPath }) => {
    const navigate = useNavigate();

    const handleReturn = () => {
        if (returnPath) {
            navigate(returnPath);
        } else {
            navigate(-1); // Go back one step in history if no returnPath is specified
        }
    };

    return (
        <div>
            <header className="bg-white pt-8 pr-4 pl-4 mb-6">
                <div className="mx-auto flex justify-between items-center">
                    <div className="text-left mt-5 ml-2" onClick={handleReturn}>
                        <img src={arrow} alt="Arrow" className="h-8 mr-1" />
                    </div>
                    <div className="text-center text-3xl">
                        <h1 className="absolute top-16 left-1/2 transform -translate-x-1/2">Bara</h1>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default AuthenHeader;