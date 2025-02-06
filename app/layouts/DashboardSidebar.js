import React from "react";
import { 
    Home, 
    CreditCard, 
    UserCircle, 
    Settings 
  } from 'lucide-react';

const DashboardSidebar = () => {
  const menuItems = [
    { icon: Home, label: "Home", page: "home" },
    { icon: CreditCard, label: "Transfer", page: "transfer" },
    { icon: UserCircle, label: "Account", page: "account" },
    { icon: Settings, label: "Settings", page: "settings" },
  ];
  return (
    <div className="w-20 bg-green-600 text-white p-4">
      {menuItems.map((item) => (
        <div
          key={item.page}
          className={`
            p-3 mb-2 rounded cursor-pointer 
             "bg-green-700" : "hover:bg-green-700"}
          `}
          onClick={{}}
        >
          <item.icon className="mx-auto" />
          <span className="text-xs text-center block mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;
