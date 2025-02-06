import React from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardNavbar from "./DashboardNavbar";
import RigthSidebar from "./RigthSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <DashboardNavbar />

      <div className="flex flex-1">
        {/* Left Sidebar */}
        <DashboardSidebar />

        {/* Main Content + Right Sidebar */}
        <main className="flex flex-1">
          <div className="flex-1 p-6">{children}</div>
          <RigthSidebar />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
