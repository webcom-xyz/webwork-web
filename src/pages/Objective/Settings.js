import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteDialog from "../../components/shared/ConfirmDeleteDialog";
import Notification from "../../parts/shared/Notification";
import {
  assignEmployeeToObjective,
  deleteObjective,
  getAssignedEmployeesOfObjective,
  getObjective,
  updateObjective,
} from "../../actions/objective";
import AssignedEmployees from "../../components/shared/AssignedEmployees";

export default function Settings(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId, perspectiveId, objectiveId } = useParams();
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [showNotification, setShowNotification] = useState(false);
  const email = useRef("");
  const role = useRef("");
  const name = useRef("");
  const weight = useRef("");
  const description = useRef("");
  const [employeeData, setEmployeeData] = useState({});
  const [objectiveData, setObjectiveData] = useState({});
  const objective = useSelector((state) => state.objective.objective);
  const assignedEmployees = useSelector((state) => state.objective.assignedEmployees);


  const handleDeleteObjective = (e) => {
    e.preventDefault();
    try {
      dispatch(deleteObjective(objectiveId));
      setShowNotification(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    setEmployeeData({
      ...employeeData,
      email: email.current.value,
      role: role.current.value,
    });

    setObjectiveData({
      ...objectiveData,
      name: name.current.value || objective?.data.name,
      weight: weight.current.value || objective?.data.weight,
      description: description.current.value || objective?.data.description,
    });
  };

  const handleAssignEmployeeToObjective = (e) => {
    e.preventDefault();

    try {
      dispatch(assignEmployeeToObjective(objectiveId, employeeData));
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateObjective = (e) => {
    e.preventDefault();

    try {
      dispatch(updateObjective(objectiveId, objectiveData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getObjective(objectiveId));
      dispatch(getAssignedEmployeesOfObjective(objectiveId));
    } catch (error) {
      console.log(error);
    }
  }, [location, dispatch]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        scorecardId={scorecardId}
      />
      <ConfirmDeleteDialog
        confirmDeleteDialogOpen={confirmDeleteDialogOpen}
        setConfirmDeleteDialogOpen={setConfirmDeleteDialogOpen}
        title={"Xóa mục tiêu"}
        buttonTitle={"Xóa mục tiêu"}
        handleDelete={handleDeleteObjective}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        <main className="flex-1 relative pb-8 z-0">
          <div className="bg-white shadow-sm">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  {/* Profile */}
                  <div className="flex items-center"></div>
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    {objective?.data.name}
                  </h1>

                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      {objectiveId}
                    </dd>
                  </dl>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    onClick={() =>
                      history.push(
                        `/${scorecardId}/${perspectiveId}/${objectiveId}`
                      )
                    }
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <ArrowCircleLeftIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form onSubmit={handleUpdateObjective}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Mục tiêu
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Cập nhật thông tin mục tiêu
                        </p>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tên mục tiêu
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="..."
                            ref={name}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Trọng số
                          </label>
                          <div className="mt-1 relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">
                                %
                              </span>
                            </div>
                            <input
                              type="text"
                              name="weight"
                              id="weight"
                              className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md pl-7"
                              placeholder="0.00"
                              ref={weight}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-span-6">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Mô tả
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows={3}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="..."
                              ref={description}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cập nhật
                      </button>
                    </div>
                  </div>
                </form>

                <form onSubmit={handleAssignEmployeeToObjective}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Nhân viên
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Thêm nhân viên vào mục tiêu
                        </p>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="..."
                            ref={email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Quyền hạn
                          </label>
                          <select
                            id="role"
                            name="role"
                            ref={role}
                            onChange={handleChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            defaultValue="Canada"
                          >
                            <option value="WATCHER">Người theo dõi</option>
                            <option value="UPDATER">Người cập nhật</option>
                          </select>
                        </div>
                      </div>
                      <AssignedEmployees
                        assignedEmployees={assignedEmployees?.data}
                      />
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cập nhật
                      </button>
                    </div>
                  </div>
                </form>

                <form>
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Xóa thẻ điểm cân bằng
                      </h3>
                      <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>
                          Một khi đã xóa, mọi dữ liệu của thẻ điểm sẽ bị mất và
                          không thể khôi phục.
                        </p>
                      </div>
                      <div className="mt-5">
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteDialogOpen(true)}
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                        >
                          Xóa thẻ điểm
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Notification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
        title="Thành công!"
        subtitle="Đã xóa thành công thẻ điểm cân bằng."
      />
    </div>
  );
}
