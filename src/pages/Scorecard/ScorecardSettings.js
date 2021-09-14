import React, { PureComponent, Fragment, useState, useEffect } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  CollectionIcon,
  ChevronRightIcon,
  CheckIcon,
  SelectorIcon,
  InformationCircleIcon,
} from "@heroicons/react/solid";
import classNames from "../../utils/classNames";
import Tabs from "../../components/Scorecard/Tabs";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Switch, Listbox, Transition } from "@headlessui/react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {} from "@heroicons/react/solid";
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
  PresentationChartLineIcon,
  CashIcon,
  OfficeBuildingIcon,
  AcademicCapIcon,
  ChipIcon,
  BellIcon,
  ExclamationIcon,
  AtSymbolIcon,
  CloudDownloadIcon,
  PlusIcon,
  CogIcon,
  ArrowLeftIcon,
  ChevronLeftIcon,
  ArrowCircleLeftIcon,
} from "@heroicons/react/outline";
import CreateNewPerspectiveDrawer from "../../components/Scorecard/CreateNewPerspectiveDrawer";
import { useDispatch, useSelector } from "react-redux";
import { deleteScorecard, getAllScorecards } from "../../actions/scorecard";
import ConfirmDeleteDialog from "../../components/shared/ConfirmDeleteDialog";
import logo4 from "../../assets/logo_4.svg";

const people = [
  {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    email: "lindsaywalton@example.com",
    role: "Front-end Developer",
    imageId: "1517841905240-472988babdf9",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Courtney Henry",
    handle: "courtneyhenry",
    email: "courtneyhenry@example.com",
    role: "Designer",
    imageId: "1438761681033-6461ffad8d80",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Tom Cook",
    handle: "tomcook",
    email: "tomcook@example.com",
    role: "Director, Product Development",
    imageId: "1472099645785-5658abf4ff4e",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Whitney Francis",
    handle: "whitneyfrancis",
    email: "whitneyfrancis@example.com",
    role: "Copywriter",
    imageId: "1517365830460-955ce3ccd263",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    handle: "leonardkrasner",
    email: "leonardkrasner@example.com",
    role: "Senior Designer",
    imageId: "1519345182560-3f2917c472ef",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    handle: "floydmiles",
    email: "floydmiles@example.com",
    role: "Principal Designer",
    imageId: "1463453091185-61582044d556",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function ScorecardSettings(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId } = useParams();
  const [enabled, setEnabled] = useState(false);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [changeType, setChangeType] = useState("");
  const dispatch = useDispatch();
  const scorecards = useSelector((state) => state.scorecard);
  const [selectedFile, setSelectedFile] = useState(null);
  const history = useHistory();

  // useEffect(() => {
  //   try {
  //     dispatch(getAllScorecards());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  const handleDeleteScorecard = (e) => {
    e.preventDefault();
    try {
      dispatch(deleteScorecard(scorecardId));
    } catch (error) {
      console.log(error);
    }
  };

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
        title={"Xóa thẻ điểm cân bằng"}
        buttonTitle={"Xóa thẻ điểm"}
        handleDeleteScorecard={handleDeleteScorecard}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 relative pb-8 z-0">
          
          <div className="bg-white shadow-sm">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  {/* Profile */}
                  <div className="flex items-center"></div>
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    Thẻ điểm: _
                  </h1>

                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      {scorecardId}
                    </dd>
                  </dl>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button onClick={() => history.push(`/${scorecardId}`)} className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <span className="sr-only">View notifications</span>
                    <ArrowCircleLeftIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                {/* <form>
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Thẻ điểm
                        </h3>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                          <label
                            htmlFor="company_website"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Tên thẻ điểm
                          </label>
                          <div className="mt-1 rounded-md shadow-sm">
                            <input
                              type="text"
                              name="scorecardName"
                              id="scorecardName"
                              placeholder="..."
                              className="focus:ring-blue-500 focus:border-blue-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                            />
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                          <label
                            htmlFor="company_website"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Trọng số
                          </label>

                          <div className="mt-1 rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">
                                %
                              </span>
                            </div>
                            <input
                              type="text"
                              name="weight"
                              id="weight"
                              className="focus:ring-blue-500 focus:border-blue-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                              placeholder="0.00"
                            />
                          </div>
                        </div>

                        <div className="col-span-3">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Mô tả
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="..."
                            />
                          </div>
                        </div>

                        <div className="col-span-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Hình ảnh
                          </label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block rounded-full overflow-hidden h-12 w-12">
                              <img
                                className="h-12 w-12 rounded"
                                src={logo4}
                                alt="worrkspace_avatar"
                              />
                            </span>
                            <input
                              type="file"
                              hidden={true}
                              id="avatarUpload"
                              accept="image/png, image/jpeg"
                              onChange={(e) =>
                                setSelectedFile(e.target.files[0])
                              }
                            />
                            <button
                              type="button"
                              onClick={() =>
                                document.getElementById("avatarUpload").click()
                              }
                              className="ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Thay đổi
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form> */}

                <form>
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
                            name="firstName"
                            id="first_name"
                            placeholder="..."
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Trọng số
                          </label>
                          <div className="mt-1 rounded-md relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">
                                %
                              </span>
                            </div>
                            <input
                              type="text"
                              name="weight"
                              id="weight"
                              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-7 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              placeholder="0.00"
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
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                              placeholder="..."
                            />
                          </div>
                        </div>

                        {/* <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            autoComplete="email"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div> */}

                        {/* <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country / Region
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          >
                            <option>Vietnam</option>
                            <option>United States</option>
                          </select>
                        </div> */}

                        {/* <div className="col-span-6">
                          <label
                            htmlFor="street_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Street address
                          </label>
                          <input
                            type="text"
                            name="street_address"
                            id="street_address"
                            autoComplete="street-address"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State / Province
                          </label>
                          <input
                            type="text"
                            name="state"
                            id="state"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label
                            htmlFor="postal_code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            ZIP / Postal
                          </label>
                          <input
                            type="text"
                            name="postal_code"
                            id="postal_code"
                            autoComplete="postal-code"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        </div> */}

                        <div className="col-span-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Hình ảnh
                          </label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block rounded-full overflow-hidden h-12 w-12">
                              <img
                                className="h-12 w-12 rounded"
                                src={logo4}
                                alt="worrkspace_avatar"
                              />
                            </span>
                            <input
                              type="file"
                              hidden={true}
                              id="avatarUpload"
                              accept="image/png, image/jpeg"
                              onChange={(e) =>
                                setSelectedFile(e.target.files[0])
                              }
                            />
                            <button
                              type="button"
                              onClick={() =>
                                document.getElementById("avatarUpload").click()
                              }
                              className="ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Thay đổi
                            </button>
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

                <form action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Notifications
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          Provide basic informtion about the job. Be specific
                          with the job title.
                        </p>
                      </div>

                      <fieldset>
                        <legend className="text-base font-medium text-gray-900">
                          By Email
                        </legend>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-start">
                            <div className="h-5 flex items-center">
                              <input
                                id="comments"
                                name="comments"
                                type="checkbox"
                                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                htmlFor="comments"
                                className="font-medium text-gray-700"
                              >
                                Comments
                              </label>
                              <p className="text-gray-500">
                                Get notified when someones posts a comment on a
                                posting.
                              </p>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  id="candidates"
                                  name="candidates"
                                  type="checkbox"
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="candidates"
                                  className="font-medium text-gray-700"
                                >
                                  Candidates
                                </label>
                                <p className="text-gray-500">
                                  Get notified when a candidate applies for a
                                  job.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="flex items-start">
                              <div className="h-5 flex items-center">
                                <input
                                  id="offers"
                                  name="offers"
                                  type="checkbox"
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="offers"
                                  className="font-medium text-gray-700"
                                >
                                  Offers
                                </label>
                                <p className="text-gray-500">
                                  Get notified when a candidate accepts or
                                  rejects an offer.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="mt-6">
                        <legend className="text-base font-medium text-gray-900">
                          Push Notifications
                        </legend>
                        <p className="text-sm text-gray-500">
                          These are delivered via SMS to your mobile phone.
                        </p>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center">
                            <input
                              id="push_everything"
                              name="push_notifications"
                              type="radio"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            />
                            <label htmlFor="push_everything" className="ml-3">
                              <span className="block text-sm font-medium text-gray-700">
                                Everything
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push_email"
                              name="push_notifications"
                              type="radio"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            />
                            <label htmlFor="push_email" className="ml-3">
                              <span className="block text-sm font-medium text-gray-700">
                                Same as email
                              </span>
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="push_nothing"
                              name="push_notifications"
                              type="radio"
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                            />
                            <label htmlFor="push_nothing" className="ml-3">
                              <span className="block text-sm font-medium text-gray-700">
                                No push notifications
                              </span>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                      >
                        Save
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
    </div>
  );
}
