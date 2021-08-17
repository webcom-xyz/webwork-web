import React, { useState } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
export default function Reports() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} reportsActive={true} />

      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
}
