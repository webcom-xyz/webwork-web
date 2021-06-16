import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuAlt1Icon,
  CollectionIcon,
  PresentationChartLineIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";
import Drawer from "../../components/Dashboard/Drawer";
import classNames from "../../utils/classNames";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getCurrentUserAvatar } from "../../actions/user";
import { getAllWorkspaces } from "../../actions/workspace";
import logo from "../../assets/logo_blue_bg.svg";
import moment from "moment";

const cards = [
  {
    name: "Productivity",
    href: "#",
    icon: PresentationChartLineIcon,
    amount: "_",
  },
  { name: "N/A", href: "#", icon: PresentationChartLineIcon, amount: "_" },
  { name: "N/A", href: "#", icon: PresentationChartLineIcon, amount: "_" },
];

const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

export default function Dashboard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [slideoverOpen, setSlideoverOpen] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  const workspaces = useSelector((state) => state.workspace);
  console.log(workspaces);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const triggerNewWorkspaceSlideover = () => {
    setSlideoverOpen(true);
  };

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
      dispatch(getAllWorkspaces());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        homeActive={true}
      />
      <Drawer
        slideoverOpen={slideoverOpen}
        setSlideoverOpen={setSlideoverOpen}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar setSidebarOpen={setSidebarOpen} />
        {/* Page */}
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          {/* Page header */}
          <div className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                <div className="flex-1 min-w-0">
                  {/* Profile */}
                  <div className="flex items-center">
                    {currentUser ? (
                      <img
                        className="hidden h-16 w-16 rounded-full sm:block"
                        src={`http://localhost:3000/${currentUser?.data.avatarUrl}`}
                        alt="avatar"
                      />
                    ) : (
                      <div className="animate-pulse">
                        <div class="hidden sm:block rounded-full bg-gray-200 h-16 w-16"></div>
                      </div>
                    )}

                    <div>
                      {/* Sm */}
                      <div className="flex items-center">
                        {currentUser ? (
                          <img
                            className="h-16 w-16 rounded-full sm:hidden"
                            src={`http://localhost:3000/${currentUser?.data.avatarUrl}`}
                            alt="avatar"
                          />
                        ) : (
                          <div className="animate-pulse">
                            <div class="h-16 w-16 rounded-full bg-gray-200 sm:hidden"></div>
                          </div>
                        )}
                        {currentUser ? (
                          <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                            {currentUser.data.name}
                          </h1>
                        ) : (
                          <div className="animate-pulse flex-1">
                            <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate bg-gray-200 rounded">
                              ⠀
                            </h1>
                          </div>
                        )}
                      </div>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Account status</dt>
                        {currentUser ? (
                          <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                            {/* <CheckCircleIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            aria-hidden="true"
                          /> */}
                            <XCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
                              aria-hidden="true"
                            />
                            Unverified account
                          </dd>
                        ) : (
                          <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize animate-pulse">
                            <div class="flex-shrink-0 mr-1.5 rounded-full bg-gray-200 h-5 w-5"></div>
                            <div className="bg-gray-200 rounded">
                              {"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}
                            </div>
                          </dd>
                        )}
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    type="button"
                    onClick={triggerNewWorkspaceSlideover}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    New workspace
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Advanced workspace
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Overview
              </h2>
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {cards.map((card) => (
                  <div
                    key={card.name}
                    className="bg-white overflow-hidden shadow rounded-lg"
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <card.icon
                            className="h-6 w-6 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-5 w-0 flex-1">
                          <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">
                              {card.name}
                            </dt>
                            <dd>
                              <div className="text-lg font-medium text-gray-900">
                                {card.amount}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-5 py-3">
                      <div className="text-sm">
                        <a
                          href={card.href}
                          className="font-medium text-blue-700 hover:text-blue-900"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
              Workspaces
            </h2>

            {/* Activity list (smallest breakpoint only) */}
            <div className="shadow sm:hidden">
              <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                {workspaces.workspace ? (
                  workspaces.workspace.response.data.map((workspace) => (
                    <li key={workspace._id}>
                      <a
                        href="#"
                        className="block px-4 py-4 bg-white hover:bg-gray-50"
                      >
                        <span className="flex items-center space-x-4">
                          <span className="flex-1 flex space-x-2 truncate">
                            {/* <OfficeBuildingIcon
                              className="flex-shrink-0 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            /> */}
                            <img
                              className="flex-shrink-0 h-16 w-16 rounded text-gray-400"
                              src={logo}
                              alt="avatar"
                            />
                            <span className="flex flex-col text-gray-500 text-sm truncate">
                              <span className="truncate font-medium">
                                {workspace.name}
                              </span>
                              <span>
                                <span className="text-gray-500">
                                  {workspace.department} | {workspace.team}
                                </span>
                              </span>
                              <time dateTime={workspace.createDate}>
                                {moment(workspace.createDate).format(
                                  "DD/MM/YYYY"
                                )}
                              </time>
                            </span>
                          </span>
                          <ChevronRightIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-4 bg-white hover:bg-gray-50"
                    >
                      <span className="flex items-center space-x-4">
                        <span className="flex-1 flex space-x-2 truncate">
                          <div className="animate-pulse">
                            <div class="flex-shrink-0 h-16 w-16 rounded text-gray-400 bg-gray-200"></div>
                          </div>
                          <span className="flex flex-col flex-1 text-gray-500 text-sm truncate animate-pulse">
                            <span className="truncate font-medium bg-gray-200 rounded">
                              {"⠀"}
                            </span>
                            <span className="text-gray-500 bg-gray-200 rounded">
                              {"⠀"}
                            </span>
                            <span className="bg-gray-200 rounded">{"⠀"}</span>
                          </span>
                        </span>
                        <ChevronRightIcon
                          className="flex-shrink-0 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </li>
                )}
              </ul>

              <nav
                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                aria-label="Pagination"
              >
                <div className="flex-1 flex justify-between">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>

            {/* Activity table (small breakpoint and up) */}
            <div className="hidden sm:block">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mt-2">
                  <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Overall
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Security
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Created
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Open</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {workspaces.workspace ? (
                          workspaces.workspace?.response.data.map(
                            (workspace) => (
                              <tr key={workspace._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <img
                                        className="h-10 w-10 rounded"
                                        src={logo}
                                        alt="worrkspace_avatar"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-500">
                                        {workspace.name}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        N/A employees
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {workspace.department}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {workspace.team}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800}`}
                                  >
                                    +N/A%
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  Private
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {moment(workspace.createDate).format(
                                    "DD/MM/YYYY"
                                  )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-900"
                                  >
                                    Settings
                                  </a>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <div className="animate-pulse">
                                    <div class="rounded bg-gray-200 h-10 w-10"></div>
                                  </div>
                                  {/* <img
                                    className="h-10 w-10 rounded"
                                    src={logo}
                                    alt="worrkspace_avatar"
                                  /> */}
                                </div>
                                <div className="ml-4 flex-1 animate-pulse">
                                  <div className="text-sm font-medium text-gray-500 bg-gray-200 rounded">
                                    {"⠀"}
                                  </div>
                                  <div className="text-sm text-gray-500 bg-gray-200 rounded">
                                    {"⠀"}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 flex-1 animate-pulse">
                                <div className="bg-gray-200 rounded">{"⠀"}</div>
                              </div>
                              <div className="text-sm text-gray-500 flex-1 animate-pulse">
                                <div className="bg-gray-200 rounded">{"⠀"}</div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-1">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    bg-gray-200 text-green-800
                                }`}
                              >
                                {"⠀⠀⠀⠀"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                    bg-gray-200 text-red-800
                                }`}
                              >
                                {"⠀⠀⠀⠀"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-1 animate-pulse">
                              <div className="bg-gray-200 rounded">{"⠀"}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a
                                href="#"
                                className="text-blue-600 hover:text-blue-900"
                              >
                                Settings
                              </a>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    {/* Pagination */}
                    <nav
                      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                      aria-label="Pagination"
                    >
                      <div className="hidden sm:block">
                        <p className="text-sm text-gray-700">
                          Showing{" "}
                          <span className="font-medium">
                            {workspaces.workspace?.response.data.length}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {workspaces.workspace?.response.data.length}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">
                            {workspaces.workspace?.response.data.length}
                          </span>{" "}
                          results
                        </p>
                      </div>
                      <div className="flex-1 flex justify-between sm:justify-end">
                        <a
                          href="#"
                          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Previous
                        </a>
                        <a
                          href="#"
                          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Next
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
