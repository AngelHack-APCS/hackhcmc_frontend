import React from 'react';
import arrow from '../../assets/arrow.png'; // Ensure this path is correct

const WalletHeader = ({ balance }) => {
    return (
        <div>
            <header className="bg-white pt-8 pr-4 pl-4 mb-6">
                <div className="mx-auto flex justify-between items-center">
                    <div className="text-center text-3xl">
                        <h1 className="absolute top-16 left-1/2 transform -translate-x-1/2">My Wallet</h1>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default WalletHeader;