import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import classNames from "../../utils/classNames";
import Tabs from "../../components/Scorecard/Tabs";
import { useHistory, useLocation, useParams } from "react-router-dom";
import CreateNewPerspectiveDrawer from "../../components/Scorecard/CreateNewPerspectiveDrawer";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteDialog from "../../components/shared/ConfirmDeleteDialog";
// import ReactFlow, {
//   removeElements,
//   addEdge,
//   Controls,
//   Background,
// } from "react-flow-renderer";
// import CustomEdge from "../../parts/Scorecard/CustomEdge";

import PageHeading from "../../components/Scorecard/PageHeading";
import months from "../../utils/months";
import years from "../../utils/years";
import quarters from "../../utils/quarters";
import { data, data1 } from "../../utils/data";
import TimePeriodSelector from "../../components/Scorecard/TimePeriodSelector";
import Overview from "../../components/Scorecard/Overview";
import StrategyView from "../../components/Scorecard/StrategyView";
import MeasuresView from "../../components/Scorecard/MeasuresView";
import { getScorecard } from "../../actions/scorecard";

// const initialElements = [
//   { id: "edges-2", data: { label: "Node 2" }, position: { x: 150, y: 100 } },
//   { id: "edges-2a", data: { label: "Node 2a" }, position: { x: 0, y: 180 } },
//   {
//     id: "edges-e1-2",
//     source: "edges-1",
//     target: "edges-2",
//     label: "bezier edge (default)",
//     className: "normal-edge",
//   },
//   {
//     id: "edges-e2-2a",
//     source: "edges-2",
//     target: "edges-2a",
//     type: "smoothstep",
//     label: "smoothstep edge",
//   },
//   {
//     id: "edges-e2-3",
//     source: "edges-2",
//     target: "edges-3",
//     type: "step",
//     label: "step edge",
//   },
// ];

// const edgeTypes = {
//   custom: CustomEdge,
// };

export default function Scorecard(props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scorecardId } = useParams();
  const [monthSelected, setMonthSelected] = useState(months[0]);
  const [quarterSelected, setQuarterSelected] = useState(quarters[0]);
  const [yearSelected, setYearSelected] = useState(years[0]);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [changeType, setChangeType] = useState("");
  const history = useHistory();
  const [overviewSelected, setOverviewSelected] = useState(true);
  const [strategyviewSelected, setStrategyviewSelected] = useState(false);
  const [measureviewSelected, setMeasureviewSelected] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const scorecards = useSelector((state) => state.scorecard);

  // const [elements, setElements] = useState(initialElements);
  // const onElementsRemove = (elementsToRemove) =>
  //   setElements((els) => removeElements(elementsToRemove, els));
  // const onConnect = (params) => setElements((els) => addEdge(params, els));

  useEffect(() => {
    try {
      dispatch(getScorecard(scorecardId));
    } catch (error) {
      console.log(error);
    }
  }, [location]);

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

        {scorecards.scorecard ? (
          <main className="flex-1 relative pb-8 z-0">
            <PageHeading
              pageTitle={`Thẻ điểm: ${scorecards.scorecard.response.data.name}`}
              pageSubtitle={scorecardId}
              setDrawerOpen={setDrawerOpen}
              settingsId={scorecardId}
              history={history}
            />

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
              <TimePeriodSelector
                timePeriodSelected={timePeriodSelected}
                setTimePeriodSelected={setTimePeriodSelected}
                months={months}
                monthSelected={monthSelected}
                setMonthSelected={setMonthSelected}
                quarters={quarters}
                quarterSelected={quarterSelected}
                setQuarterSelected={setQuarterSelected}
                years={years}
                yearSelected={yearSelected}
                setYearSelected={setYearSelected}
              />
            )}

            {overviewSelected && (
              <Overview data={data} data1={data1} changeType={changeType} />
            )}

            {strategyviewSelected && <StrategyView />}

            {measureviewSelected && <MeasuresView />}
          </main>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
