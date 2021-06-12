import React, { Fragment, useState, useEffect } from "react";

// Import Tailwind
import { Menu, Transition } from "@headlessui/react";

// Import icons
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
} from "@heroicons/react/solid";

// Import components
import Sidebar from "../../components/Dashboard/Sidebar";
import Topbar from "../../components/Dashboard/Topbar";

// Import utils
import classNames from "../../utils/classNames";

// Import libraries
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser, getCurrentUserAvatar } from "../../actions/user";

const cards = [
  {
    name: "Productivity",
    href: "#",
    icon: PresentationChartLineIcon,
    amount: "+101%",
  },
  { name: "N/A", href: "#", icon: PresentationChartLineIcon, amount: "_" },
  { name: "N/A", href: "#", icon: PresentationChartLineIcon, amount: "_" },
];

const transactions = [
  {
    id: 1,
    name: "Thien Hung",
    href: "#",
    amount: "35",
    status: "failed",
    type: "General",
    date: "June 4, 2021",
    datetime: "2020-07-11",
  },
  {
    id: 2,
    name: "Thien Hung Marketing",
    href: "#",
    amount: "7",
    status: "success",
    type: "Marketing",
    date: "June 4, 2021",
    datetime: "2020-07-11",
  },
  {
    id: 3,
    name: "Thien Hung Product",
    href: "#",
    amount: "16",
    status: "processing",
    type: "Development",
    date: "June 4, 2021",
    datetime: "2020-07-11",
  },
];

const people = [
  {
    id: "1",
    work: "+12%",
    time: "+6%",
    name: "Free Angels",
    title: "Marketing",
    department: "WFH",
    onboard: "March 13, 2021",
    email: "15 employees",
    employees: "15",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "2",
    work: "+1.2%",
    time: "-23%",
    name: "Courageous Trolls",
    title: "Engineering",
    department: "In-office",
    onboard: "March 13, 2021",
    email: "6 employees",
    employees: "15",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "2",
    work: "-4.5%",
    time: "-32%",
    name: "Courageous Trolls",
    title: "Engineering",
    department: "Remote",
    onboard: "March 13, 2021",
    email: "9 employees",
    employees: "15",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

export default function Dashboard(props) {
  const currentUser = useSelector((state) => state.user.userData);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        homeActive={true}
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
                    <img
                      className="hidden h-16 w-16 rounded-full sm:block"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                      alt=""
                    />
                    <div>
                      <div className="flex items-center">
                        <img
                          className="h-16 w-16 rounded-full sm:hidden"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80"
                          alt=""
                        />
                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                          {currentUser?.data.name}
                        </h1>
                      </div>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Account status</dt>
                        <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                          <CheckCircleIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                          Verified account
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    type="button"
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
                {transactions.map((transaction) => (
                  <li key={transaction.id}>
                    <a
                      href={transaction.href}
                      className="block px-4 py-4 bg-white hover:bg-gray-50"
                    >
                      <span className="flex items-center space-x-4">
                        <span className="flex-1 flex space-x-2 truncate">
                          <OfficeBuildingIcon
                            className="flex-shrink-0 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="flex flex-col text-gray-500 text-sm truncate">
                            <span className="truncate">{transaction.name}</span>
                            <span>
                              <span className="text-gray-900 font-medium">
                                {transaction.amount}
                              </span>
                            </span>
                            <time dateTime={transaction.datetime}>
                              {transaction.date}
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
                ))}
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
                            Work
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Time
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
                        {people.map((person) => (
                          <tr key={person.email}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded"
                                    src={person.image}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-500">
                                    {person.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {person.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {person.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.department}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  person.work.startsWith("+")
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {person.work}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span
                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  person.time.startsWith("+")
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                                }`}
                              >
                                {person.time}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {person.onboard}
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
                        ))}
                      </tbody>
                    </table>
                    {/* Pagination */}
                    <nav
                      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                      aria-label="Pagination"
                    >
                      <div className="hidden sm:block">
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to{" "}
                          <span className="font-medium">10</span> of{" "}
                          <span className="font-medium">20</span> results
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
