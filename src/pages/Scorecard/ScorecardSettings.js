import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  assignEmployeeToScorecard,
  deleteScorecard,
  getAssignedEmployeesOfScorecard,
  getScorecard,
  updateScorecard,
} from "../../actions/scorecard";
import ConfirmDeleteDialog from "../../components/shared/ConfirmDeleteDialog";
import Notification from "../../parts/shared/Notification";
import AssignedEmployees from "../../components/shared/AssignedEmployees";
import Breadcrumbs from "../../components/shared/Breadcrumbs";
import { useTranslation } from "react-i18next";

export default function Settings(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId } = useParams();
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const scorecard = useSelector((state) => state.scorecard.scorecard);
  const assignedEmployees = useSelector(
    (state) => state.scorecard.assignedEmployees
  );
  const history = useHistory();
  const [showNotification, setShowNotification] = useState(false);
  const email = useRef("");
  const role = useRef("");
  const name = useRef("");
  const type = useRef("");
  const description = useRef("");
  const [employeeData, setEmployeeData] = useState({});
  const [scorecardData, setScorecardData] = useState({});
  const [refetch, setRefetch] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("Thành công!");
  const [notificationSubtitle, setNotificationSubtitle] = useState("");
  const { t, i18n } = useTranslation();
  const handleDeleteScorecard = (e) => {
    e.preventDefault();
    try {
      dispatch(deleteScorecard(scorecardId));
      setNotificationSubtitle("Đã xóa thẻ điểm thành công.");
      setShowNotification(true);
      setRefetch(true);
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

    setScorecardData({
      ...scorecardData,
      name: name.current.value || scorecard?.data.name,
      type: type.current.value || scorecard?.data.type,
      description: description.current.value || scorecard?.data.description,
    });
  };

  const handleAssignEmployeeToScorecard = (e) => {
    e.preventDefault();

    try {
      dispatch(assignEmployeeToScorecard(scorecardId, employeeData));
      setNotificationSubtitle("Đã giao thẻ điểm cho nhân viên.");
      setShowNotification(true);
      setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateScorecard = (e) => {
    e.preventDefault();

    try {
      dispatch(updateScorecard(scorecardId, scorecardData));
      setNotificationSubtitle("Đã cập nhật thẻ điểm thành công.");
      setShowNotification(true);
      setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  if (refetch) {
    try {
      dispatch(getScorecard(scorecardId));
      dispatch(getAssignedEmployeesOfScorecard(scorecardId));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      dispatch(getScorecard(scorecardId));
      dispatch(getAssignedEmployeesOfScorecard(scorecardId));
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
        refetch={refetch}
      />
      <ConfirmDeleteDialog
        confirmDeleteDialogOpen={confirmDeleteDialogOpen}
        setConfirmDeleteDialogOpen={setConfirmDeleteDialogOpen}
        title={"Xóa thẻ điểm cân bằng"}
        buttonTitle={"Xóa thẻ điểm"}
        handleDelete={handleDeleteScorecard}
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
                    {scorecard?.data.name}
                  </h1>

                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                      {scorecardId}
                    </dd>
                  </dl>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    onClick={() => history.push(`/${scorecardId}`)}
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
          <div className="bg-white">
            <div className="max-w-6xl mx-auto">
              <Breadcrumbs
                history={history}
                scorecardId={scorecardId}
                scorecardText={t("breadcrumbs.scorecard")}
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form onSubmit={handleUpdateScorecard}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Thẻ điểm
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Cập nhật thông tin thẻ điểm
                        </p>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tên thẻ điểm
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
                            htmlFor="type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Bộ phận
                          </label>
                          <select
                            id="type"
                            name="type"
                            ref={type}
                            onChange={handleChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option value="Company">Công ty</option>
                            <option value="Produce">Sản xuất</option>
                            <option value="R&D">Nghiên cứu & Phát triển</option>
                            <option value="Sale">Bán hàng</option>
                            <option value="Engineering">Kỹ thuật</option>
                            <option value="Business">Kinh doanh</option>
                            <option value="Storage">Kho vận</option>
                            <option value="Accountant">Kế toán</option>
                          </select>
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

                <form onSubmit={handleAssignEmployeeToScorecard}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Nhân viên
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Thêm nhân viên vào thẻ điểm
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
                            <option value="Watcher">Người xem</option>
                            <option value="Updater">Người cập nhật</option>
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
        title={notificationTitle}
        subtitle={notificationSubtitle}
      />
    </div>
  );
}
