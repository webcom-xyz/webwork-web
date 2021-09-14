import React, { useState, useEffect } from "react";
import {
  PresentationChartLineIcon,
} from "@heroicons/react/outline";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import Drawer from "../../components/Scorecard/CreateNewScorecardDrawer";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../actions/user";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
} from "recharts";
import PageHeading from "../../components/Dashboard/PageHeading";

const cards = [
  {
    name: "Hiệu suất",
    href: "#",
    icon: PresentationChartLineIcon,
    amount: "98%",
  },
  {
    name: "Bất thường",
    href: "#",
    icon: PresentationChartLineIcon,
    amount: "_",
  },
  { name: "Thay đổi", href: "#", icon: PresentationChartLineIcon, amount: "_" },
];

const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

const data = [
  {
    name: "Tháng 1",
    uv: 55,
    pv: 55,
    amt: 100,
  },
  {
    name: "Tháng 2",
    uv: 60,
    pv: 60,
    amt: 100,
  },
  {
    name: "Tháng 3",
    uv: 65,
    pv: 65,
    amt: 100,
  },
  {
    name: "Tháng 4",
    uv: 75,
    pv: 75,
    amt: 100,
  },
  {
    name: "Tháng 5",
    uv: 79,
    pv: 79,
    amt: 100,
  },
  {
    name: "Tháng 6",
    uv: 80,
    pv: 80,
    amt: 100,
  },
  {
    name: "Tháng 7",
    uv: 84,
    pv: 84,
    amt: 100,
  },
  {
    name: "Tháng 8",
    uv: 86,
    pv: 86,
    amt: 100,
  },
  {
    name: "Tháng 9",
    uv: 86,
    pv: 86,
    amt: 100,
  },
  {
    name: "Tháng 10",
    uv: 87,
    pv: 87,
    amt: 100,
  },
  {
    name: "Tháng 11",
    uv: 92,
    pv: 91,
    amt: 100,
  },
  {
    name: "Tháng 12",
    uv: 100,
    pv: 100,
    amt: 100,
  },
];

export default function Dashboard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [slideoverOpen, setSlideoverOpen] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  // const scorecards = useSelector((state) => state.scorecard);

  const [createFromTemplate, setCreateFromTemplate] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  // const { data } = useQuery("currentUser", getCurrentUser());

  const triggerNewWorkspaceSlideover = () => {
    setSlideoverOpen(true);
  };

  const handleCreateNewScorecard = () => {
    setDrawerTitle("Thẻ điểm mới");
    setCreateFromTemplate(false);
    setSlideoverOpen(true);
  };

  const handleCreateNewScorecardFromTemplate = () => {
    setDrawerTitle("Thẻ điểm mới theo mẫu");
    setCreateFromTemplate(true);
    setSlideoverOpen(true);
  };

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
      // dispatch(getAllScorecards());
    } catch (error) {
      console.log(error);
    }
  }, [location]);

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
        title={drawerTitle}
        createFromTemplate={createFromTemplate}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}
        {/* Page */}
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          {/* Page header */}
          <PageHeading
            currentUser={currentUser}
            handleSecondaryButton={handleCreateNewScorecard}
            handlePrimaryButton={
              handleCreateNewScorecardFromTemplate
            }
            secondaryButtonText={"Thẻ điểm mới"}
            primaryButtonText={"Thẻ điểm theo mẫu"}
          />

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* <h2 className="text-lg leading-6 font-medium text-gray-900">
                Tổng quan
              </h2> */}
              <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {/* Card */}
                {cards.map((card) => (
                  <div
                    key={card.name}
                    className="bg-white overflow-hidden shadow rounded-lg"
                  >
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                          <card.icon
                            className="h-6 w-6 text-white"
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
                          Xem tất cả
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8"></h2>

            {/* Activity list (smallest breakpoint only) */}
            {/* <div className="shadow sm:hidden">
              <ul className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                {scorecards.scorecard ? (
                  scorecards.scorecard.response.data.map((scorecard) => (
                    <li key={scorecard._id}>
                      <a
                        href="#"
                        className="block px-4 py-4 bg-white hover:bg-gray-50"
                      >
                        <span className="flex items-center space-x-4">
                          <span className="flex-1 flex space-x-2 truncate">
                            <img
                              className="flex-shrink-0 h-16 w-16 rounded text-gray-400"
                              src={logo}
                              alt="avatar"
                            />
                            <span className="flex flex-col text-gray-500 text-sm truncate">
                              <span className="truncate font-medium">
                                {scorecard.name}
                              </span>
                              <span>
                                <span className="text-gray-500">
                                  {scorecard.type}
                                </span>
                              </span>
                              <time dateTime={scorecard.createDate}>
                                {moment(scorecard.createDate).format(
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
            </div> */}

            {/* Activity table (small breakpoint and up) */}
            <div className="hidden sm:block">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mt-2">
                  <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                    <ResponsiveContainer width="100%" height={300}>
                      {/* <BarChart
                        width={500}
                        height={300}
                        data={data}
                        className="bg-white overflow-hidden shadow rounded-lg"
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
                        <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                        <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                        <Bar dataKey="uv" fill="#ffc658" />
                      </BarChart> */}
                      <ComposedChart
                        width={500}
                        height={300}
                        className="bg-white overflow-hidden shadow rounded-lg"
                        data={data}
                        margin={{
                          top: 20,
                          right: 20,
                          left: -20,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Bar dataKey="uv" barSize={35} fill="#10B981" />
                        <Line
                          type="monotone"
                          dataKey="uv"
                          stroke="#FBBF24"
                          strokeWidth={3}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="hidden sm:block">
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
                            Tên thẻ điểm
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Loại thẻ điểm
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Tổng quan
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Mục tiêu
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Ngày tạo
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Open</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {scorecards.scorecard ? (
                          scorecards.scorecard?.response.data.map(
                            (scorecard) => (
                              <tr key={scorecard._id}>
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
                                        {scorecard.name}
                                      </div>
                                      <div className="text-sm text-gray-500">
                                        4 khía cạnh
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {scorecard.type}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {scorecard.team}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800}`}
                                  >
                                    98%
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  3 mục tiêu
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {moment(scorecard.createDate).format(
                                    "DD/MM/YYYY"
                                  )}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a
                                    href="#"
                                    className="text-blue-600 hover:text-blue-900"
                                  >
                                    Cài đặt
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
                    <nav
                      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                      aria-label="Pagination"
                    >
                      <div className="hidden sm:block">
                        <p className="text-sm text-gray-700">
                          Showing{" "}
                          <span className="font-medium">
                            {scorecards.scorecard?.response.data.length}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {scorecards.scorecard?.response.data.length}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">
                            {scorecards.scorecard?.response.data.length}
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
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}
