import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import classNames from "../../utils/classNames";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../components/Employee/Drawer";
import { addMembers, getMembers } from "../../actions/workspace";
import { useLocation } from "react-router";
import PageHeading from "../../components/shared/PageHeading";
import moment from "moment";
import Stats from "../../components/Employee/Stats";
import EmployeesList from "../../components/Employee/EmployeesList";

export default function Employees() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const members = useSelector((state) => state.workspace.members);
  const location = useLocation();

  const [employeeData, setEmployeeData] = useState({});
  const email = useRef("");

  const handleChange = () => {
    setEmployeeData({
      ...employeeData,
      email: email.current.value,
    });
  };

  const handleAddMembers = (e) => {
    e.preventDefault();
    try {
      dispatch(addMembers(employeeData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getMembers());
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        employeesActive={true}
      />
      <Drawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        email={email}
        handleChange={handleChange}
        handleAddMembers={handleAddMembers}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          <PageHeading
            currentUser={currentUser}
            handlePrimaryButton={() => setDrawerOpen(true)}
            // secondaryButtonText={"Thẻ điểm mới"}
            primaryButtonText={"Nhân viên mới"}
          />

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Stats />
            </div>
          </div>
          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <EmployeesList members={members?.data} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
