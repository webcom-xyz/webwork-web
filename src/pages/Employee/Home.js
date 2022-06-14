import React, { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition, Listbox } from "@headlessui/react";
import {
  ClockIcon,
  HomeIcon,
  MenuAlt1Icon,
  ViewListIcon,
  XIcon,
  CheckCircleIcon,
  InboxIcon,
} from "@heroicons/react/outline";
import {
  ChevronRightIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  PencilAltIcon,
  SearchIcon,
  SelectorIcon,
  TrashIcon,
  UserAddIcon,
  EyeIcon,
  CheckIcon,
} from "@heroicons/react/solid";
import logo from "../../assets/logo_4.svg";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser, getCurrentUserAvatar } from "../../actions/user";
import Topbar from "../../components/Scorecard/Topbar";
import Sidebar from "../../components/Employee/Sidebar";
import classNames from "../../utils/classNames";
const people = [
  { id: 1, name: "Tăng doanh thu" },
  { id: 2, name: "Tăng doanh thu" },
];

const projects = [
  // {
  //   id: 1,
  //   title: "Tổng doanh thu",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Đã cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  {
    id: 2,
    title: "Doanh thu từ máy công nghiệp",
    initials: "N/A",
    team: "Engineering",
    objective: "Tăng tỉ suất lợi nhuận",
    totalMembers: 12,
    lastUpdated: "Đã cập nhật",
    dueDate: "30/06/2021",
    pinned: true,
    bgColorClass: "bg-red-600",
  },
  {
    id: 3,
    title: "Doanh thu từ xuất khẩu",
    initials: "N/A",
    team: "Engineering",
    objective: "Tăng doanh thu",
    totalMembers: 12,
    lastUpdated: "Đã cập nhật",
    dueDate: "30/06/2021",
    pinned: true,
    bgColorClass: "bg-green-600",
  },
  {
    id: 4,
    title: "Giá trị tồn kho bình quân trên doanh thu/tháng",
    initials: "N/A",
    team: "Engineering",
    objective: "Giảm chi phí mua hàng",
    totalMembers: 12,
    lastUpdated: "Chưa cập nhật",
    dueDate: "30/06/2021",
    pinned: true,
    bgColorClass: "bg-blue-600",
  },
  // {
  //   id: 1,
  //   title: "Tỷ lệ vị trí cán bộ quản lý đạt chuẩn tăng thêm",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Tỷ lệ nhân sự kế thừa đạt chuẩn",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Tỷ lệ công nhân được đào tạo nâng bậc",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Tỷ lệ công nhân được nâng bậc sau đào tạo",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Tỷ lệ kỹ sư R&D đáp ứng chuẩn năng lực",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Tỷ lệ nhân viên bán hàng đươc đào tạo về kỹ năng bán hàng",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Tỷ lệ các vị trí có chuẩn năng lực",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Năng suất lao động ",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Tỷ lệ đại lý treo biển",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Số lượng sự kiện quảng bá sản phẩm",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
  // {
  //   id: 1,
  //   title: "Số lượt truy cập website giới thiệu sản phẩm của công ty",
  //   initials: "GA",
  //   team: "Engineering",
  //   objective: "Tăng doanh thu",
  //   totalMembers: 12,
  //   lastUpdated: "Chưa cập nhật",
  //   dueDate: "30/06/2021",
  //   pinned: false,
  //   bgColorClass: "bg-blue-600",
  // },
];
const pinnedProjects = projects.filter((project) => project.pinned);

export default function Employee() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [selected, setSelected] = useState(people[0]);

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main column */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Search header */}
        <Topbar setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* Page title & actions */}
          <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-normal leading-6 text-gray-900 sm:truncate">
                Chỉ số KPI
              </h1>
            </div>
            <div className="mt-4 flex sm:mt-0 sm:ml-4">
              <button
                type="button"
                className="order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:order-0 sm:ml-0"
              >
                Tải xuống
              </button>

              {/* <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                  <div className="order-1 relative ml-3 sm:ml-0 sm:order-0">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                      <span className="block truncate">{selected.name}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options
                        static
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                      >
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-blue-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-8 pr-4"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={classNames(
                                    selected ? "font-semibold" : "font-normal",
                                    "block truncate"
                                  )}
                                >
                                  {person.name}
                                </span>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-blue-600",
                                      "absolute inset-y-0 left-0 flex items-center pl-1.5"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                )}
              </Listbox> */}

              <button
                type="button"
                className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:order-1 sm:ml-3"
              >
                Tải xuống tất cả
              </button>
            </div>
          </div>

          {/* Pinned projects */}
          <div className="px-4 mt-6 sm:px-6 lg:px-8">
            <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
              Tổng quan
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 xl:grid-cols-4 mt-3">
              {pinnedProjects.map((project) => (
                <li
                  key={project.id}
                  className="relative col-span-1 flex shadow-sm rounded-md"
                >
                  <div
                    className={classNames(
                      project.bgColorClass,
                      "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
                    )}
                  >
                    {project.initials}
                  </div>
                  <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                    <div className="flex-1 px-4 py-2 text-sm truncate">
                      <a
                        href="#"
                        className="text-gray-900 font-medium hover:text-gray-600"
                      >
                        {project.objective}
                      </a>
                      <p className="text-gray-500">
                        {project.totalMembers} người
                      </p>
                    </div>
                    <Menu as="div" className="flex-shrink-0 pr-2">
                      {({ open }) => (
                        <>
                          <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <span className="sr-only">Open options</span>
                            <DotsVerticalIcon
                              className="w-5 h-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="z-10 mx-3 origin-top-right absolute right-10 top-3 w-48 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                            >
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      View
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                              <div className="py-1">
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Removed from pinned
                                    </a>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <a
                                      href="#"
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Share
                                    </a>
                                  )}
                                </Menu.Item>
                              </div>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects list (only on smallest breakpoint) */}
          <div className="mt-10 sm:hidden">
            <div className="px-4 sm:px-6">
              <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                Newest
              </h2>
            </div>
            <ul className="mt-3 border-t border-gray-200 divide-y divide-gray-100">
              {projects.map((project) => (
                <li key={project.id}>
                  <a
                    href="#"
                    className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                  >
                    <span className="flex items-center truncate space-x-3">
                      <span
                        className={classNames(
                          project.bgColorClass,
                          "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                        )}
                        aria-hidden="true"
                      />
                      <span className="font-normal truncate text-sm leading-6">
                        {project.title}
                      </span>
                    </span>
                    <ChevronRightIcon
                      className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects table (small breakpoint and up) */}
          <div className="mt-8 hidden sm:block">
            <div className="align-middle inline-block min-w-full border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr className="border-t border-gray-200">
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <span className="lg:pl-2">Tất cả</span>
                    </th>
                    {/* <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Score
                    </th> */}
                    <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Giá trị
                    </th>
                    <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Đơn vị
                    </th>
                    {/* <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      GOAL
                    </th> */}
                    <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mục tiêu
                    </th>
                    <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Hạn
                    </th>
                    <th className="hidden md:table-cell px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trạng thái
                    </th>
                    <th className="pr-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider" />
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex items-center space-x-3 lg:pl-2">
                          <div
                            className={classNames(
                              project.bgColorClass,
                              "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                            )}
                            aria-hidden="true"
                          />
                          <a
                            href="#"
                            className="truncate hover:text-gray-600 font-normal"
                          >
                            <span>{project.title}</span>
                          </a>
                        </div>
                      </td>
                      {/* <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-green-600 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          6.9
                        </span>
                      </td> */}
                      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          _
                        </span>
                      </td>
                      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                        _
                      </td>
                      {/* <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                        ...
                      </td> */}
                      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                        {project.objective}
                      </td>
                      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                        {project.dueDate}
                      </td>
                      <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right">
                        {project.lastUpdated}
                      </td>
                      <td className="pr-6">
                        <Menu
                          as="div"
                          className="relative flex justify-end items-center"
                        >
                          {({ open }) => (
                            <>
                              <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                <span className="sr-only">Open options</span>
                                <DotsVerticalIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </Menu.Button>
                              <Transition
                                show={open}
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                              >
                                <Menu.Items
                                  static
                                  className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow-lg z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none"
                                >
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "group flex items-center px-4 py-2 text-sm"
                                          )}
                                        >
                                          <EyeIcon
                                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                          />
                                          View
                                        </a>
                                      )}
                                    </Menu.Item>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "group flex items-center px-4 py-2 text-sm"
                                          )}
                                        >
                                          <PencilAltIcon
                                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                          />
                                          Edit
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </div>
                                  <div className="py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <a
                                          href="#"
                                          className={classNames(
                                            active
                                              ? "bg-gray-100 text-gray-900"
                                              : "text-gray-700",
                                            "group flex items-center px-4 py-2 text-sm"
                                          )}
                                        >
                                          <TrashIcon
                                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                          />
                                          Delete
                                        </a>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
