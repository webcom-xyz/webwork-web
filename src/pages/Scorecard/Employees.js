import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../components/Employee/Drawer";
import {
  addMembers,
  getMembers,
  removeEmployee,
} from "../../actions/workspace";
import { useLocation } from "react-router";
import PageHeading from "../../components/shared/PageHeading";
import Stats from "../../components/Employee/Stats";
import EmployeesList from "../../components/Employee/EmployeesList";
import EmployeeDetails from "../../components/Employee/EmployeeDetails";
import Notification from "../../parts/shared/Notification";

export default function Employees() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const members = useSelector((state) => state.workspace.members);
  const location = useLocation();

  const [employeeData, setEmployeeData] = useState({});
  const email = useRef("");

  const [showNotification, setShowNotification] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("Thành công!");
  const [notificationSubtitle, setNotificationSubtitle] = useState("");
  // Employee details drawer
  const [employeeDetailsOpen, setEmployeeDetailsOpen] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState("");
  const [selectedEmployeeEmail, setSelectedEmployeeEmail] = useState("");

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
      setNotificationSubtitle("Đã thêm nhân viên vào workspace thành công.");
      setShowNotification(true);
      setDrawerOpen(false);
      setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveEmployee = (e) => {
    e.preventDefault();
    try {
      dispatch(removeEmployee({ email: selectedEmployeeEmail }));
      setNotificationSubtitle("Đã xóa nhân viên khỏi workspace thành công.");
      setShowNotification(true);
      setEmployeeDetailsOpen(false);
      setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (refetch) {
    try {
      dispatch(getMembers());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      dispatch(getMembers());
    } catch (error) {
      console.log(error);
    }
  }, [location, dispatch]);

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
      <EmployeeDetails
        employeeDetailsOpen={employeeDetailsOpen}
        setEmployeeDetailsOpen={setEmployeeDetailsOpen}
        employee={members?.data}
        currentEmployeeId={currentEmployeeId}
        handleRemoveEmployee={handleRemoveEmployee}
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
              <EmployeesList
                members={members?.data}
                setCurrentEmployeeId={setCurrentEmployeeId}
                setSelectedEmployeeEmail={setSelectedEmployeeEmail}
                setEmployeeDetailsOpen={setEmployeeDetailsOpen}
              />
            </div>
          </div>
        </main>
      </div>
      <Notification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
        title={notificationTitle}
        subtitle={notificationSubtitle}
      />
    </div>
  );
}
