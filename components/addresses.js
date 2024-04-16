import React from "react";
import { FiCopy } from 'react-icons/fi'; // Import the copy icon
import SectionTitle from "./sectionTitle";

const AddressButton = ({ address }) => {
    const copyToClipboard = (e) => {
        e.preventDefault(); // Prevent the link from navigating away
        navigator.clipboard.writeText(address).then(() => {
            // Ideally, change button state or show tooltip that address was copied
            console.log('Address copied to clipboard!');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className="address-button-container">
            <div className="bg-custom hover:bg-custom-dark text-white font-bold py-2 px-4 rounded inline-flex items-center justify-between w-full border-2 border-custom-light transition duration-300 hover:border-custom">
                <a
                    href={`https://solscan.io/account/${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow text-left"
                >
                    {address}
                </a>
                <button
                    onClick={copyToClipboard}
                    className="ml-2"
                >
                    <FiCopy className="cursor-pointer" />
                </button>
            </div>
        </div>
    );
};

const Addresses = () => {
    return (
        <div className="addresses-container my-12">
            <div className="addresses-list grid grid-cols-1 gap-0 px-4">
                <div className="addresses-list max-w-4xl mx-auto space-y-2"> {/* Reduced space between buttons */}
                    <SectionTitle pretitle="Token Address" align="left" />
                    <AddressButton address="4Fb9vvFhXD1YYFYPb6MQam39M5LWfiJXT5UZTWBuovA8" />
                </div>
                {/* Reducing bottom margin and padding inside each address div */}
                <div className="address mb-1">
                    <SectionTitle pretitle="First Token Account Address" align="left" />
                    <AddressButton address="65sPq6aNsqFQkBfgUZzAbmA7y7VtxMgxWfycLefkEEcw" />
                </div>
                <div className="address mb-1">
                    <SectionTitle pretitle="Community Wallet Address" align="left" />
                    <AddressButton address="qTtsmkT6HFx2vezj8fPv85MmyKfVy3a24RaEjyeLzyc" />
                </div>
                <div className="address mb-1">
                    <SectionTitle pretitle="Marketing Wallet Address" align="left" />
                    <AddressButton address="2eNWrPGLw54q8XbgbKjFfdSQFWmwTpfBswQJ7YMxjCvU" />
                </div>
                <div className="address mb-1">
                    <SectionTitle pretitle="Liquidity Reserve Address" align="left" />
                    <AddressButton address="65sPq6aNsqFQkBfgUZzAbmA7y7VtxMgxWfycLefkEEcw" />
                </div>
            </div>
        </div>
    );
};

export default Addresses;
