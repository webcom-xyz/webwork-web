import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  CollectionIcon,
  ChevronRightIcon,
  MailIcon,
  PhoneIcon,
  XCircleIcon,
  BadgeCheckIcon,
} from "@heroicons/react/solid";
import classNames from "../../utils/classNames";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../components/Employee/Drawer";
import { addMembers, getMembers } from "../../actions/workspace";
import { useLocation } from "react-router";
const stats = [
  {
    name: "Task Completions",
    stat: "23",
    previousStat: "12",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Quality",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Avg. Time",
    stat: "4h",
    previousStat: "7h",
    change: "4.05%",
    changeType: "decrease",
  },
];

const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  // More people...
];

export default function Employees() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const workspace = useSelector((state) => state.workspace);
  const location = useLocation();

  const [members, setMembers] = useState({});
  const email = useRef("");

  const handleChange = () => {
    setMembers({
      ...members,
      email: email.current.value,
    });
  };

  const handleAddMembers = (e) => {
    e.preventDefault();
    try {
      dispatch(addMembers(members));
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
          <div className="bg-white shadow-sm">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  {/* Profile */}
                  <div className="flex items-center">
                    {currentUser ? (
                      <img
                        className="hidden h-16 w-16 rounded-full sm:block"
                        src={`http://localhost:5000/${currentUser?.data.avatarUrl}`}
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
                            src={`http://localhost:5000/${currentUser?.data.avatarUrl}`}
                            alt="avatar"
                          />
                        ) : (
                          <div className="animate-pulse">
                            <div class="h-16 w-16 rounded-full bg-gray-200 sm:hidden"></div>
                          </div>
                        )}
                        {currentUser ? (
                          <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                            {currentUser.data.fullName}
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
                          <>
                            <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                              <BadgeCheckIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                aria-hidden="true"
                              />
                              Giám đốc vận hành
                            </dd>
                            <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                              <XCircleIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
                                aria-hidden="true"
                              />
                              Chưa xác thực
                            </dd>
                          </>
                        ) : (
                          <>
                            <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize animate-pulse">
                              <div class="flex-shrink-0 mr-1.5 rounded-full bg-gray-200 h-5 w-5"></div>
                              <div className="bg-gray-200 rounded">
                                {"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}
                              </div>
                            </dd>
                            <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize animate-pulse">
                              <div class="flex-shrink-0 mr-1.5 rounded-full bg-gray-200 h-5 w-5"></div>
                              <div className="bg-gray-200 rounded">
                                {"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}
                              </div>
                            </dd>
                          </>
                        )}
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  {/* <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    
                  </button> */}
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => setDrawerOpen(true)}
                  >
                    Nhân viên mới
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* {people.map((person) => (
                  <li
                    key={person.email}
                    className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
                  >
                    <div className="w-full flex items-center justify-between p-6 space-x-6">
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-gray-900 text-sm font-medium truncate">
                            {person.name}
                          </h3>
                          <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                            {person.role}
                          </span>
                        </div>
                        <p className="mt-1 text-gray-500 text-sm truncate">
                          {person.title}
                        </p>
                      </div>
                      <img
                        className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="-mt-px flex divide-x divide-gray-200">
                        <div className="w-0 flex-1 flex">
                          <a
                            href={`mailto:${person.email}`}
                            className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                          >
                            <MailIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-3">Email</span>
                          </a>
                        </div>
                        <div className="-ml-px w-0 flex-1 flex">
                          <a
                            href={`tel:${person.telephone}`}
                            className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                          >
                            <PhoneIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-3">Call</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))} */}
                {workspace?.workspace ? (
                  workspace.workspace.membersData.data.map((member) => (
                    <li
                      key={member.id}
                      className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
                    >
                      <div className="w-full flex items-center justify-between p-6 space-x-6">
                        <div className="flex-1 truncate">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-gray-900 text-sm font-medium truncate">
                              {member.fullName}
                            </h3>
                            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                              {member.office || "Unassigned"}
                            </span>
                          </div>
                          <p className="mt-1 text-gray-500 text-sm truncate">
                            {member.office || "Unassigned"}
                          </p>
                        </div>
                        <img
                          className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                          src={`http://localhost:5000/${member.avatarUrl}`}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="-mt-px flex divide-x divide-gray-200">
                          <div className="w-0 flex-1 flex">
                            <a
                              // href={`mailto:${person.email}`}
                              className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                            >
                              <MailIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3">Email</span>
                            </a>
                          </div>
                          <div className="-ml-px w-0 flex-1 flex">
                            <a
                              // href={`tel:${person.telephone}`}
                              className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                            >
                              <PhoneIcon
                                className="w-5 h-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3">Call</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
