import React from 'react';
import Logo from './Logos/logo.png'

function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-7 bg-white shadow-sm">
      {/* Logo */}
      <img src={Logo} alt="/" to='/' className="h-20 mx-4 " />

      {/* Heading */}
      <h2 className="text-2xl font-medium text-gray-900">Telangana Building And Other Construction Workers Welfare Board</h2>

      {/* Card */}
      <div className="p-5 bg-custom-background rounded-lg mx-1">
        <h3 className="mb-1 text-xl font-medium text-black-600 text-center">  249140 </h3>
        <p className="text-xs text-black-500 text-center">
          Total Exsisting Beneficiaries
        </p>
      </div>
      <div className="p-5 bg-custom-background1 rounded-lg mx-auto">
        <h3 className="mb-1 text-xl font-medium text-black-600 text-center">  249140 </h3>
        <p className="text-xs text-black-500 text-center">
        Total Approved Benefeciaries
        </p>
      </div>
      <div className="p-5 bg-custom-background2 rounded-lg mx-1">
        <h3 className="mb-1 text-xl font-medium text-black-600 text-center">  249140 </h3>
        <p className="text-xs text-black-500 text-center">
          Total Exsisting Beneficiaries
        </p>
      </div>
      <div className="p-5 bg-custom-background3 rounded-lg mx-1">
        <h3 className="mb-1 text-xl font-medium text-black-600 text-center">  249140 </h3>
        <p className="text-xs text-black-500 text-center">
          Total Exsisting Beneficiaries
        </p>
      </div>
    </div>
  );
}

export default Header;
