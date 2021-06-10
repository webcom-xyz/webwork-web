import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

export default function Activities() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} activitiesActive={true} />

      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar shadow={"shadow"} />
      </div>
    </div>
  );
}