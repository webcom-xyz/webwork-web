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
import { useLocation, useParams } from "react-router-dom";
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
} from "@heroicons/react/outline";
import CreateNewPerspectiveDrawer from "../../components/Scorecard/CreateNewPerspectiveDrawer";
import { useDispatch, useSelector } from "react-redux";
import { getAllScorecards } from "../../actions/scorecard";

const data = [
  {
    name: "01/2021",
    uv: 40,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "02/2021",
    uv: 30,
    // pv: 1398,
    amt: 2210,
  },
  {
    name: "03/2021",
    uv: 20,
    // pv: 9800,
    amt: 2290,
  },
  {
    name: "04/2021",
    uv: 27,
    // pv: 3908,
    amt: 2000,
  },
  {
    name: "05/2021",
    uv: 18,
    // pv: 4800,
    amt: 2181,
  },
  {
    name: "06/2021",
    uv: 100,
    // pv: 3800,
    amt: 2500,
  },
  {
    name: "07/2021",
    uv: 34,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "08/2021",
    uv: 34,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "09/2021",
    uv: 34,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "10/2021",
    uv: 34,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "11/2021",
    uv: 67,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "12/2021",
    uv: 70,
    // pv: 4300,
    amt: 2100,
  },
];

const data1 = [
  {
    name: "01/2021",
    uv: 40,
  },
  {
    name: "02/2021",
    uv: 50,
  },
  {
    name: "03/2021",
    uv: 60,
  },
  {
    name: "04/2021",
    uv: 70,
  },
  {
    name: "05/2021",
    uv: 80,
  },
  {
    name: "06/2021",
    uv: 90,
  },
  {
    name: "07/2021",
    uv: 100,
  },
];

const months = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];

const quarters = [
  { id: 1, name: "Quarter 1" },
  { id: 2, name: "Quarter 2" },
  { id: 3, name: "Quarter 3" },
  { id: 4, name: "Quarter 4" },
];

const years = [
  { id: 1, name: "2021" },
  { id: 2, name: "2022" },
  { id: 3, name: "2023" },
  { id: 4, name: "2024" },
];

export default function Scorecard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId } = useParams();
  const [enabled, setEnabled] = useState(false);
  const [monthSelected, setMonthSelected] = useState(months[0]);
  const [quarterSelected, setQuarterSelected] = useState(quarters[0]);
  const [yearSelected, setYearSelected] = useState(years[0]);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [changeType, setChangeType] = useState("");
  const dispatch = useDispatch();
  const scorecards = useSelector((state) => state.scorecard);

  const handleCreateNewPerspective = () => {
    setDrawerOpen(true);
  };

  // useEffect(() => {
  //   try {
  //     dispatch(getAllScorecards());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);


  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        scorecardId={scorecardId}
      />
      <CreateNewPerspectiveDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 relative pb-8 z-0">
          <div className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  {/* Profile */}
                  <div className="flex items-center"></div>
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    Thẻ điểm: N/A
                  </h1>

                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      {scorecardId}
                    </dd>
                  </dl>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    onClick={handleCreateNewPerspective}
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <PlusIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <span className="sr-only">View notifications</span>
                    <ExclamationIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <span className="sr-only">View notifications</span>
                    <InformationCircleIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <span className="sr-only">View notifications</span>
                    <AtSymbolIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                    <span className="sr-only">View notifications</span>
                    <CloudDownloadIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Tổng quan
              </h2>
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <span className="relative z-0 inline-flex rounded-md">
                  <button
                    type="button"
                    onClick={() => setTimePeriodSelected("Monthly")}
                    className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Theo tháng
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimePeriodSelected("Quarterly")}
                    className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Theo quý
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimePeriodSelected("Yearly")}
                    className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    Theo năm
                  </button>
                </span>

                {timePeriodSelected == "Monthly" ? (
                  <>
                    <Listbox value={monthSelected} onChange={setMonthSelected}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <span className="block truncate">
                                {monthSelected.name}
                              </span>
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
                                {months.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
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
                        </>
                      )}
                    </Listbox>

                    <Listbox value={yearSelected} onChange={setYearSelected}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <span className="block truncate">
                                {yearSelected.name}
                              </span>
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
                                {years.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
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
                        </>
                      )}
                    </Listbox>
                  </>
                ) : timePeriodSelected == "Quarterly" ? (
                  <>
                    <Listbox
                      value={quarterSelected}
                      onChange={setQuarterSelected}
                    >
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <span className="block truncate">
                                {quarterSelected.name}
                              </span>
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
                                {quarters.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
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
                        </>
                      )}
                    </Listbox>

                    <Listbox value={yearSelected} onChange={setYearSelected}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <span className="block truncate">
                                {yearSelected.name}
                              </span>
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
                                {years.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
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
                        </>
                      )}
                    </Listbox>
                  </>
                ) : (
                  <>
                    <Listbox value={yearSelected} onChange={setYearSelected}>
                      {({ open }) => (
                        <>
                          <div className="relative">
                            <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <span className="block truncate">
                                {yearSelected.name}
                              </span>
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
                                {years.map((person) => (
                                  <Listbox.Option
                                    key={person.id}
                                    className={({ active }) =>
                                      classNames(
                                        active
                                          ? "text-white bg-indigo-600"
                                          : "text-gray-900",
                                        "cursor-default select-none relative py-2 pl-3 pr-9"
                                      )
                                    }
                                    value={person}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>

                                        {selected ? (
                                          <span
                                            className={classNames(
                                              active
                                                ? "text-white"
                                                : "text-indigo-600",
                                              "absolute inset-y-0 right-0 flex items-center pr-4"
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
                        </>
                      )}
                    </Listbox>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">
                <div className="">
                  <h2 className="text-lg leading-6 font-medium text-gray-900 inline-block mb-2">
                    Hiệu suất theo thời gian
                  </h2>

                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart
                      width={500}
                      height={250}
                      className="bg-white overflow-hidden shadow rounded-lg"
                      data={data1}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#E5E7EB"
                        strokeWidth={3}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>

                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      width={500}
                      height={300}
                      className="bg-white overflow-hidden shadow rounded-lg mt-2"
                      data={data}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      {/* <Legend verticalAlign="top" /> */}
                      {/* <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                /> */}
                      <Line
                        type="monotone"
                        dataKey="uv"
                        stroke="#E5E7EB"
                        strokeWidth={3}
                        dot={{ stroke: "#FBBF24", strokeWidth: 7 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="">
                  <h2 className="text-lg leading-6 font-medium text-gray-900 inline-block mb-2">
                    Khái quát đơn vị đo lường
                  </h2>
                  <div className="bg-white overflow-hidden shadow rounded-lg pb-6 sm:pb-7">
                    <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                      <dt>
                        <div className="absolute bg-red-500 rounded-md p-3">
                          <PresentationChartLineIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                          Hiệu suất
                        </p>
                      </dt>
                      <dd className="ml-16 flex items-baseline">
                        <p className="text-xl font-semibold text-gray-900">
                          N/A%
                        </p>
                        <p
                          className={classNames(
                            changeType === "increase"
                              ? "text-green-600"
                              : "text-red-600",
                            "ml-2 flex items-baseline text-sm font-semibold"
                          )}
                        >
                          {changeType === "increase" ? (
                            <ArrowSmUpIcon
                              className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowSmDownIcon
                              className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                              aria-hidden="true"
                            />
                          )}
                          <span className="sr-only">
                            {changeType === "increase"
                              ? "Increased"
                              : "Decreased"}{" "}
                            by
                          </span>
                          N/A%
                        </p>
                      </dd>
                    </div>

                    <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                      <dt>
                        <div className="absolute bg-blue-500 rounded-md p-3">
                          <ChipIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                          Điểm bất thường
                        </p>
                      </dt>
                      <dd className="ml-16 flex items-baseline">
                        {/* <p className="text-sm font-semibold text-gray-900">
                        Measure matches properties of anomalies
                      </p> */}
                        <p
                          className={classNames(
                            changeType === "increase"
                              ? "text-gray-700"
                              : "text-gray-700",
                            "flex items-baseline text-sm font-semibold"
                          )}
                        >
                          Giá trị của đơn vị đo lường phù hợp với thuộc tính của
                          điểm bất thường theo sự đánh giá của chúng tôi
                        </p>
                      </dd>
                    </div>

                    <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                      <dt>
                        <div className="absolute bg-blue-500 rounded-md p-3">
                          <ChipIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                          Điểm thay đổi
                        </p>
                      </dt>
                      <dd className="ml-16 flex items-baseline">
                        {/* <p className="text-sm font-semibold text-gray-900">
                        Measure matches properties of anomalies
                      </p> */}
                        <p
                          className={classNames(
                            changeType === "increase"
                              ? "text-gray-700"
                              : "text-gray-700",
                            "flex items-baseline text-sm font-semibold"
                          )}
                        >
                          Giá trị của đơn vị đo lường phù hợp với thuộc tính của
                          điểm thay đổi theo sự đánh giá của chúng tôi
                        </p>
                      </dd>
                    </div>

                    <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                      <dt>
                        <div className="absolute bg-green-500 rounded-md p-3">
                          <CashIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                          Tài chính
                        </p>
                      </dt>
                      <dd className="ml-16 flex items-baseline">
                        <p className="text-xl font-semibold text-gray-900">
                          N/A%
                        </p>
                        <p
                          className={classNames(
                            changeType === "increase"
                              ? "text-gray-500"
                              : "text-gray-500",
                            "ml-2 flex items-baseline text-sm font-semibold"
                          )}
                        >
                          {/* {changeType === "increase" ? (
                          <ArrowSmUpIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowSmDownIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        )}
                        <span className="sr-only">
                          {changeType === "increase"
                            ? "Increased"
                            : "Decreased"}{" "}
                          by
                        </span> */}
                          25%
                        </p>
                      </dd>
                    </div>

                    <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                      <dt>
                        <div className="absolute bg-yellow-500 rounded-md p-3">
                          <UsersIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                          Khách hàng
                        </p>
                      </dt>
                      <dd className="ml-16 flex items-baseline">
                        <p className="text-xl font-semibold text-gray-900">
                          N/A%
                        </p>
                        <p
                          className={classNames(
                            changeType === "increase"
                              ? "text-gray-500"
                              : "text-gray-500",
                            "ml-2 flex items-baseline text-sm font-semibold"
                          )}
                        >
                          {/* {changeType === "increase" ? (
                          <ArrowSmUpIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowSmDownIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        )}
                        <span className="sr-only">
                          {changeType === "increase"
                            ? "Increased"
                            : "Decreased"}{" "}
                          by
                        </span> */}
                          25%
                        </p>
                      </dd>
                    </div>

                    <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                      <dt>
                        <div className="absolute bg-red-500 rounded-md p-3">
                          <OfficeBuildingIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                          Quá trình nội bộ
                        </p>
                      </dt>
                      <dd className="ml-16 flex items-baseline">
                        <p className="text-xl font-semibold text-gray-900">
                          N/A%
                        </p>
                        <p
                          className={classNames(
                            changeType === "increase"
                              ? "text-gray-500"
                              : "text-gray-500",
                            "ml-2 flex items-baseline text-sm font-semibold"
                          )}
                        >
                          {/* {changeType === "increase" ? (
                          <ArrowSmUpIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowSmDownIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        )}
                        <span className="sr-only">
                          {changeType === "increase"
                            ? "Increased"
                            : "Decreased"}{" "}
                          by
                        </span> */}
                          25%
                        </p>
                      </dd>
                    </div>

                    <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                      <dt>
                        <div className="absolute bg-green-500 rounded-md p-3">
                          <AcademicCapIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                          Học tập & Phát triển
                        </p>
                      </dt>
                      <dd className="ml-16 flex items-baseline">
                        <p className="text-xl font-semibold text-gray-900">
                          N/A%
                        </p>
                        <p
                          className={classNames(
                            changeType === "increase"
                              ? "text-gray-500"
                              : "text-gray-500",
                            "ml-2 flex items-baseline text-sm font-semibold"
                          )}
                        >
                          {/* {changeType === "increase" ? (
                          <ArrowSmUpIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowSmDownIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        )}
                        <span className="sr-only">
                          {changeType === "increase"
                            ? "Increased"
                            : "Decreased"}{" "}
                          by
                        </span> */}
                          25%
                        </p>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1">
                <div>
                  <h2 className="text-lg leading-6 font-medium text-gray-900 inline-block mb-2">
                    Đơn vị đo lường
                  </h2>

                  <div className="flex flex-col bg-white rounded-lg overflow-x-auto overflow-y-hidden shadow">
                    <div className="-my-2 sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Tên
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  01/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  02/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  03/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  04/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  05/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  06/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  07/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  08/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  09/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  10/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  11/2021
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  12/2021
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="">
                                <td className="px-6 py-4 text-sm text-gray-900">
                                  N/A
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                              </tr>
                              <tr className="">
                                <td className="px-6 py-4 whitespace-normal text-sm text-gray-900">
                                  N/A
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  n/a%
                                </td>
                              </tr>
                              <tr className="">
                                <td className="px-6 py-4 text-sm text-gray-900">
                                  N/A
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  n/a%
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
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
