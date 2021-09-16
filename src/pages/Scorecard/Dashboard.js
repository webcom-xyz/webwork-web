import React, { useState, useEffect, useRef } from "react";
import { PresentationChartLineIcon } from "@heroicons/react/outline";
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
import PageHeading from "../../components/shared/PageHeading";
import {
  createNewScorecard,
  createNewScorecardFromTemplate,
} from "../../actions/scorecard";

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

  const [createFromTemplate, setCreateFromTemplate] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const scorecardName = useRef("");
  const scorecardDescription = useRef("");
  const scorecardType = useRef("");

  const [scorecardData, setScorecardData] = useState({
    name: "",
    type: "",
    description: "",
  });

  const handleChange = () => {
    setScorecardData({
      ...scorecardData,
      name: scorecardName.current.value,
      type: "Company",
      description: scorecardDescription.current.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (createFromTemplate) {
        console.log(scorecardData);
        // dispatch(createNewScorecardFromTemplate(scorecardData));
      } else {
        console.log(scorecardData);
        // dispatch(createNewScorecard(scorecardData));
      }
    } catch (error) {
      console.log(error);
    }
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
        scorecardName={scorecardName}
        scorecardDescription={scorecardDescription}
        scorecardType={scorecardType}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
          {/* Page header */}
          <PageHeading
            currentUser={currentUser}
            handleSecondaryButton={handleCreateNewScorecard}
            handlePrimaryButton={handleCreateNewScorecardFromTemplate}
            secondaryButtonText={"Thẻ điểm mới"}
            primaryButtonText={"Thẻ điểm theo mẫu"}
          />

          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Activity table (small breakpoint and up) */}
            <div className="hidden sm:block">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col mt-2">
                  <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                    <ResponsiveContainer width="100%" height={300}>
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
          </div>
        </main>
      </div>
    </div>
  );
}
