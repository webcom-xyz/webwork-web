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
  BadgeCheckIcon,
  XCircleIcon,
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
  PlusCircleIcon,
} from "@heroicons/react/outline";
import CreateNewPerspectiveDrawer from "../../components/Scorecard/CreateNewPerspectiveDrawer";
import { useDispatch, useSelector } from "react-redux";
import { getAllScorecards } from "../../actions/scorecard";
import ConfirmDeleteDialog from "../../components/shared/ConfirmDeleteDialog";
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  Background,
} from "react-flow-renderer";
import CustomEdge from "../../parts/Scorecard/CustomEdge";
import logo from "../../assets/logo_blue_bg.svg";
const data = [
  {
    name: "01",
    uv: 93,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: "02",
    uv: 55,
    // pv: 1398,
    amt: 2210,
  },
  {
    name: "03",
    uv: 67,
    // pv: 9800,
    amt: 2290,
  },
  {
    name: "04",
    uv: 80,
    // pv: 3908,
    amt: 2000,
  },
  {
    name: "05",
    uv: 85,
    // pv: 4800,
    amt: 2181,
  },
  {
    name: "06",
    uv: 97,
    // pv: 3800,
    amt: 2500,
  },
  {
    name: "07",
    uv: 95,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "08",
    uv: 90,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "09",
    uv: 92,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "10",
    uv: 94,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "11",
    uv: 93,
    // pv: 4300,
    amt: 2100,
  },
  {
    name: "12",
    uv: 95,
    // pv: 4300,
    amt: 2100,
  },
];

const data1 = [
  {
    name: "01",
    uv: 40,
  },
  {
    name: "02",
    uv: 50,
  },
  {
    name: "03",
    uv: 60,
  },
  {
    name: "04",
    uv: 70,
  },
  {
    name: "05",
    uv: 80,
  },
  {
    name: "06",
    uv: 90,
  },
  {
    name: "07",
    uv: 100,
  },
];

const months = [
  { id: 1, name: "Tháng 1" },
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

const initialElements = [
  { id: "edges-2", data: { label: "Node 2" }, position: { x: 150, y: 100 } },
  { id: "edges-2a", data: { label: "Node 2a" }, position: { x: 0, y: 180 } },
  {
    id: "edges-e1-2",
    source: "edges-1",
    target: "edges-2",
    label: "bezier edge (default)",
    className: "normal-edge",
  },
  {
    id: "edges-e2-2a",
    source: "edges-2",
    target: "edges-2a",
    type: "smoothstep",
    label: "smoothstep edge",
  },
  {
    id: "edges-e2-3",
    source: "edges-2",
    target: "edges-3",
    type: "step",
    label: "step edge",
  },
];

const edgeTypes = {
  custom: CustomEdge,
};

export default function Scorecard(props) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId } = useParams();
  const [enabled, setEnabled] = useState(false);
  const [monthSelected, setMonthSelected] = useState(months[0]);
  const [quarterSelected, setQuarterSelected] = useState(quarters[0]);
  const [yearSelected, setYearSelected] = useState(years[0]);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [changeType, setChangeType] = useState("");
  const dispatch = useDispatch();
  const scorecards = useSelector((state) => state.scorecard);
  const history = useHistory();
  const [overviewSelected, setOverviewSelected] = useState(true);
  const [strategyviewSelected, setStrategyviewSelected] = useState(false);
  const [measureviewSelected, setMeasureviewSelected] = useState(false);
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

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
      <CreateNewPerspectiveDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
      <ConfirmDeleteDialog
        confirmDeleteDialogOpen={confirmDeleteDialogOpen}
        setConfirmDeleteDialogOpen={setConfirmDeleteDialogOpen}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}

        <main className="flex-1 relative pb-8 z-0">
          <div className="bg-white shadow-sm">
            <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="py-6 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  {/* Profile */}
                  {/* <div className="flex items-center"></div>
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    Thẻ điểm: _
                  </h1>

                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      {scorecardId}
                    </dd>
                  </dl> */}

                  {/* Profile */}
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                          Thẻ điểm: _
                        </h1>
                      </div>
                      <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                        <dt className="sr-only">Account status</dt>
                        <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                          {scorecardId}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                  <button
                    onClick={() => setDrawerOpen(true)}
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
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
                  <button
                    onClick={() =>
                      history.push(`/scorecard/${scorecardId}/settings`)
                    }
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <CogIcon className="h-6 w-6" aria-hidden="true" />
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div>
                <Tabs
                  overviewSelected={overviewSelected}
                  setOverviewSelected={setOverviewSelected}
                  strategyviewSelected={strategyviewSelected}
                  setStrategyviewSelected={setStrategyviewSelected}
                  measureviewSelected={measureviewSelected}
                  setMeasureviewSelected={setMeasureviewSelected}
                />
              </div>
            </div>
          </div>

          {!strategyviewSelected && (
            <div className="mt-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  <span className="relative z-0 inline-flex rounded-md">
                    <button
                      type="button"
                      onClick={() => setTimePeriodSelected("Monthly")}
                      className="w-full relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      Theo tháng
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimePeriodSelected("Quarterly")}
                      className="w-full -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      Theo quý
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimePeriodSelected("Yearly")}
                      className="w-full -ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    >
                      Theo năm
                    </button>
                  </span>

                  {timePeriodSelected == "Monthly" ? (
                    <>
                      <Listbox
                        value={monthSelected}
                        onChange={setMonthSelected}
                      >
                        {({ open }) => (
                          <>
                            <div className="relative">
                              <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
                                  className="absolute z-10 mt-1 w-full bg-white shadow max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                >
                                  {months.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "text-white bg-blue-600"
                                            : "text-gray-900",
                                          "cursor-pointer select-none relative py-2 pl-3 pr-9"
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
                                                  : "text-blue-600",
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
                              <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
                                  className="absolute z-10 mt-1 w-full bg-white shadow max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                >
                                  {years.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "text-white bg-blue-600"
                                            : "text-gray-900",
                                          "cursor-pointer select-none relative py-2 pl-3 pr-9"
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
                                                  : "text-blue-600",
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
                              <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
                                  className="absolute z-10 mt-1 w-full bg-white shadow max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                >
                                  {quarters.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "text-white bg-blue-600"
                                            : "text-gray-900",
                                          "cursor-pointer select-none relative py-2 pl-3 pr-9"
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
                                                  : "text-blue-600",
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
                              <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
                                  className="absolute z-10 mt-1 w-full bg-white shadow max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                >
                                  {years.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "text-white bg-blue-600"
                                            : "text-gray-900",
                                          "cursor-pointer select-none relative py-2 pl-3 pr-9"
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
                                                  : "text-blue-600",
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
                              <Listbox.Button className="bg-white w-full relative border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
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
                                  className="absolute z-10 mt-1 w-full bg-white shadow max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                >
                                  {years.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "text-white bg-blue-600"
                                            : "text-gray-900",
                                          "cursor-pointer select-none relative py-2 pl-3 pr-9"
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
                                                  : "text-blue-600",
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
          )}

          {overviewSelected && (
            <div className="mt-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">
                  <div>
                    <div className="bg-white shadow rounded-lg">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                        Xu hướng hiệu suất
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        quam corrupti consectetur.
                      </p>
                      <ResponsiveContainer width="100%" height={250}>
                        <LineChart
                          width={500}
                          height={250}
                          className="border-t border-gray-200 overflow-hidden"
                          data={data1}
                          margin={{
                            top: 20,
                            right: 20,
                            left: -20,
                            // bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#FBBF24"
                            strokeWidth={3}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="bg-white shadow rounded-lg mt-8">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                        Lịch sử hiệu suất
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        quam corrupti consectetur.
                      </p>

                      <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                          width={500}
                          height={300}
                          className="border-t border-gray-200 overflow-hidden"
                          data={data}
                          margin={{
                            top: 20,
                            right: 20,
                            left: -20,
                            // bottom: 20,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
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
                  </div>
                  <div className="bg-white shadow rounded-lg">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4 ml-4">
                      Khái quát chỉ số
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      quam corrupti consectetur.
                    </p>
                    <div className="overflow-hidden pb-6 sm:pb-7 border-t border-gray-200">
                      <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                        <dt>
                          <div className="absolute bg-green-500 rounded-md p-3">
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
                            93%
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
                            2%
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
                            Bất thường
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
                            Giá trị của chỉ số đo lường phù hợp với thuộc tính
                            của điểm bất thường theo sự đánh giá của chúng tôi
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
                            Thay đổi
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
                            Giá trị của chỉ số đo lường phù hợp với thuộc tính
                            của điểm thay đổi theo sự đánh giá của chúng tôi
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
                            78%
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
                            52%
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
                            35%
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
                            100%
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
          )}

          {strategyviewSelected && (
            <div className="mt-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1">
                  {/* <div>
                    <h2 className="text-lg leading-6 font-medium text-gray-900 inline-block mb-2">
                      Bản đồ
                    </h2>
                    <div className="h-screen flex flex-col bg-white rounded-lg overflow-x-auto overflow-y-hidden shadow scrollbar-hidden">
                      <ReactFlow
                        elements={elements}
                        // onElementClick={onElementClick}
                        onElementsRemove={onElementsRemove}
                        onConnect={onConnect}
                        // onNodeDragStop={onNodeDragStop}
                        // onLoad={onLoad}
                        snapToGrid={true}
                        edgeTypes={edgeTypes}
                        key="edges"
                      >
                        <Controls />
                        <Background />
                      </ReactFlow>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          )}

          {measureviewSelected && (
            <div className="mt-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1">
                  <div className="rounded-lg bg-white shadow">
                    {/* <h2 className="text-lg leading-6 font-medium text-gray-900 inline-block mb-2">
                      KPIs
                    </h2> */}
                    <h3 className="text-lg leading-6 font-medium text-gray-900 ml-4 mt-4">
                      Chỉ số
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 ml-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      quam corrupti consectetur.
                    </p>
                    <div className="flex flex-col overflow-x-auto overflow-y-hidden scrollbar-hidden border-t border-gray-200 mt-4">
                      <div className="-my-2 sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                              {/* <thead className="bg-white">
                                <tr>
                                  <th
                                    scope="col"
                                    className="relative px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  ></th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    01
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    02
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    03
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    04
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    05
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    06
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    07
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    08
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    09
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    10
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    11
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    12
                                  </th>
                                </tr>
                              </thead> */}
                              <tbody>
                                <tr className="bg-white">
                                  <td className="px-6 py-4 text-sm text-gray-900">
                                    Tổng doanh thu
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
                                <tr className="bg-gray-50">
                                  <td className="px-6 py-4 text-sm text-gray-900">
                                    Tỷ trọng chi phí nguyên vật liệu trên giá
                                    thành
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
                                    Tỷ lệ chênh lệch giá
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
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
                                    Tỷ lệ số vụ phản hồi yêu cầu bảo hành
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
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                    n/a%
                                  </td>
                                </tr>
                                <tr className="">
                                  <td className="px-6 py-4 text-sm text-gray-900">
                                    Tỷ lệ số vụ bảo hành, sửa chữa sản phẩm
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
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
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                    n/a%
                                  </td>
                                </tr>
                                <tr className="">
                                  <td className="px-6 py-4 text-sm text-gray-900">
                                    Điểm đánh giá bình quân của đại lý
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
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
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
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
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                    n/a%
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
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
          )}
        </main>
      </div>
    </div>
  );
}
