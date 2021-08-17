import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Drawer from "../../components/Objective/Drawer"; 

export default function Objective(props) {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId, perspectiveId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        perspectiveId={perspectiveId}
      />
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 relative pb-8 z-0">
          <button onClick={() => setDrawerOpen(true)}>New KPI</button>
        </main>
      </div>
    </div>
  );
}
