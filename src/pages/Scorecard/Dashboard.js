import React, { useState, useEffect, useRef } from "react";
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
import Stats from "../../components/Dashboard/Stats";
import Notification from "../../parts/shared/Notification";

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentUser = useSelector((state) => state.user.currentUser);
  const [refetch, setRefetch] = useState(false);
  const [createFromTemplate, setCreateFromTemplate] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState("");

  const [showNotification, setShowNotification] = useState(false);

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
        dispatch(createNewScorecardFromTemplate(scorecardData));
        setShowNotification(true);
        setDrawerOpen(false);
        setRefetch(true);
      } else {
        dispatch(createNewScorecard(scorecardData));
        setShowNotification(true);
        setDrawerOpen(false);
        setRefetch(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateNewScorecard = () => {
    setDrawerTitle("Thẻ điểm mới");
    setCreateFromTemplate(false);
    setDrawerOpen(true);
  };

  const handleCreateNewScorecardFromTemplate = () => {
    setDrawerTitle("Thẻ điểm mới theo mẫu");
    setCreateFromTemplate(true);
    setDrawerOpen(true);
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
        refetch={refetch}
      />
      <Drawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
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
              <Stats />
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
      <Notification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
        title="Thành công!"
        subtitle="Đã tạo thành công thẻ điểm cân bằng."
      />
    </div>
  );
}
