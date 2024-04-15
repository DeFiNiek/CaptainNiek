import React from "react";

const AddressButton = ({ children }) => {
    const copyToClipboard = (e) => {
      navigator.clipboard.writeText(children).then(() => {
        // Display a message or change button state to indicate the address was copied
      }, (err) => {
        console.error('Could not copy text: ', err);
      });
    };
  
    return (
      <button
        onClick={copyToClipboard}
        className="bg-custom hover:bg-custom-100 text-white font-bold py-2 px-4 rounded inline-flex items-center"
      >
        {children}
      </button>
    );
  };
  
  const Addresses = () => {
    return (
      <div className="addresses-container text-center my-12">
        <div className="addresses-list inline-block">
          {/* ... */}
          <div className="address mb-3">
            <h3 className="text-lg font-semibold">Token Address</h3>
            <AddressButton>Fg4x1J6dSV93PLRotK4Rv2rSeZwW475PLhHaw9nE2FZ</AddressButton>
          </div>
          <div className="address mb-3">
            <h3 className="text-lg font-semibold">Token Pair Address</h3>
            <AddressButton>Fg4x1J6dSV93PLRotK4Rv2rSeZwW475PLhHaw9nE2FZ</AddressButton>
          </div>
          <div className="address mb-3">
            <h3 className="text-lg font-semibold">Community Wallet Address</h3>
            <AddressButton>Fg4x1J6dSV93PLRotK4Rv2rSeZwW475PLhHaw9nE2FZ</AddressButton>
          </div>
          <div className="address mb-3">
            <h3 className="text-lg font-semibold">Marketing Wallet Address</h3>
            <AddressButton>Fg4x1J6dSV93PLRotK4Rv2rSeZwW475PLhHaw9nE2FZ</AddressButton>
          </div>
        </div>
      </div>
    );
  };
  
  export default Addresses;
