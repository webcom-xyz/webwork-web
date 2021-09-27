import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import KPITable from "../../components/Reports/KPITable";
import PageHeading from "../../components/shared/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../../actions/user";
import Stats from "../../components/Reports/Stats";
import { getAssignedKPIs } from "../../actions/kpi";
export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const dispatch = useDispatch();

  const assignedKPIs = useSelector((state) => state.kpi.assignedKPIs);

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
      dispatch(getAssignedKPIs());
    } catch (error) {
      console.log(error);
    }
  }, [location, dispatch]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        reportsActive={true}
      />

      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}
        <main className="flex-1 relative pb-8 z-0">
          <PageHeading currentUser={currentUser} />

          <div className="hidden mt-8 sm:block">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Stats />
            </div>
          </div>

          <div className="hidden mt-8 sm:block">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col mt-2">
                <div className="bg-white shadow rounded-lg">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                    Cập nhật
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                    corrupti consectetur.
                  </p>
                  <KPITable assignedKPIs={assignedKPIs?.data} />
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
