import React from "react";

import { Send, Phone, Receipt } from "lucide-react"; // Lucide icons

const DashboardNavbar = () => {


  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left - Logo */}
      <div className="text-xl font-bold text-green-600">Dashboard</div>

      {/* Center - Menu Items */}
      <div className="flex space-x-8">
        <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
          <Send size={20} />
          <span>Transfer</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
          <Phone size={20} />
          <span>Airtime</span>
        </button>

        <button className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
          <Receipt size={20} />
          <span>Bills</span>
        </button>
      </div>

      {/* Right - Logout */}
      <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
    </nav>
  );
};

export default DashboardNavbar;
