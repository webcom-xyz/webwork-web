import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteDialog from "../../components/shared/ConfirmDeleteDialog";
import {
  assignEmployeeToKPI,
  deleteKPI,
  getKPI,
  updateKPI,
} from "../../actions/kpi";

export default function Settings(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId, perspectiveId, objectiveId, kpiId } = useParams();
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const email = useRef("");
  const role = useRef("");
  const [employeeData, setEmployeeData] = useState({});
  const [kpiData, setKPIData] = useState({});

  const name = useRef("");
  const weight = useRef(0);
  const description = useRef("");
  const red = useRef("");
  const goal = useRef("");
  const dataType = useRef("");
  const calendar = useRef("");
  const kpi = useSelector((state) => state.kpi.kpi);

  const handleDeleteKPI = (e) => {
    e.preventDefault();
    try {
      dispatch(deleteKPI(kpiId));
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

    setKPIData({
      ...kpiData,
      name: name.current.value,
      weight: weight.current.value,
      description: description.current.value,
      actualValue: kpi?.data.actualValue,
      red: red.current.value,
      goal: goal.current.value,
      dataType: dataType.current.value,
      calendar: calendar.current.value,
    });
  };

  const handleAssignEmployeeToKPI = (e) => {
    e.preventDefault();

    try {
      dispatch(assignEmployeeToKPI(kpiId, employeeData));
      console.log(employeeData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateKPI = (e) => {
    e.preventDefault();

    try {
      dispatch(updateKPI(kpiId, kpiData));
      console.log(kpiData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getKPI(kpiId));
    } catch (error) {
      console.log(error);
    }
  }, [location]);

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
        title={"Xóa KPI"}
        buttonTitle={"Xóa KPI"}
        handleDeleteScorecard={handleDeleteKPI}
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
                    {kpi?.data.name}
                  </h1>

                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      {kpiId}
                    </dd>
                  </dl>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    onClick={() =>
                      history.push(
                        `/${scorecardId}/${perspectiveId}/${objectiveId}/${kpiId}`
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
                <form onSubmit={handleUpdateKPI}>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Chỉ số
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Cập nhật thông tin chỉ số
                        </p>
                      </div>

                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-4 sm:col-span-4">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tên chỉ số
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
                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Chu kỳ
                          </label>
                          <select
                            id="calendar"
                            name="calendar"
                            ref={calendar}
                            onChange={handleChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option value="Tháng">Theo tháng</option>
                            <option value="Quý">Theo quý</option>
                            <option value="Năm">Theo năm</option>
                          </select>
                        </div>

                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="weight"
                            className="block text-sm font-medium text-gray-900"
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
                              onChange={props.handleChange}
                            />
                          </div>
                        </div>

                        <div className="col-span-4">
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

                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ngưỡng dưới
                          </label>
                          <input
                            type="text"
                            name="red"
                            id="red"
                            placeholder="..."
                            ref={red}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ngưỡng trên
                          </label>
                          <input
                            type="text"
                            name="goal"
                            id="goal"
                            placeholder="..."
                            ref={goal}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-2 sm:col-span-2">
                          <label
                            htmlFor="type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Kiểu dữ liệu
                          </label>
                          <select
                            id="calendar"
                            name="calendar"
                            ref={dataType}
                            onChange={handleChange}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          >
                            <option>Số liệu</option>
                            <option>Tiền tệ</option>
                            <option>Phần trăm</option>
                          </select>
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

                <form onSubmit={handleAssignEmployeeToKPI}>
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
                        Xóa chỉ số
                      </h3>
                      <div className="mt-2 max-w-xl text-sm text-gray-500">
                        <p>
                          Một khi đã xóa, mọi dữ liệu của chỉ số sẽ bị mất và
                          không thể khôi phục.
                        </p>
                      </div>
                      <div className="mt-5">
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteDialogOpen(true)}
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                        >
                          Xóa chỉ số
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
    </div>
  );
}
