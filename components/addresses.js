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
                    href={`https://pump.fun/HfmBQPMBTFpXDa1f1LQTEsFuyFmJxi5rcMwMsUj26tG`}
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
                    <SectionTitle pretitle="Pump-Fun Pre-Sale Address" align="left" />
                    <AddressButton address="HfmBQPMBTFpXDa1f1LQTEsFuyFmJxi5rcMwMsUj26tG" />
                </div>
                {/* Reducing bottom margin and padding inside each address div */}
            </div>
        </div>
    );
};

export default Addresses;
