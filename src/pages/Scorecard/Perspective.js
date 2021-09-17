import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import Tabs from "../../components/Scorecard/Tabs";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../components/Perspective/Drawer";
import PageHeading from "../../components/Scorecard/PageHeading";
import TimePeriodSelector from "../../components/Scorecard/TimePeriodSelector";
import Overview from "../../components/Perspective/Overview";
import StrategyView from "../../components/Scorecard/StrategyView";
import MeasuresView from "../../components/Scorecard/MeasuresView";
import { data, data1 } from "../../utils/data";
import months from "../../utils/months";
import years from "../../utils/years";
import quarters from "../../utils/quarters";
import { getPerspective, getObjectivesOfPerspective } from "../../actions/perspective";
import Breadcrumbs from "../../components/shared/Breadcrumbs";
import DetailsModal from "../../components/shared/DetailsDrawer";

export default function Perspective(props) {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId, perspectiveId } = useParams();
  const [enabled, setEnabled] = useState(false);
  const [monthSelected, setMonthSelected] = useState(months[0]);
  const [quarterSelected, setQuarterSelected] = useState(quarters[0]);
  const [yearSelected, setYearSelected] = useState(years[0]);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  const objectives = useSelector((state) => state.perspective.objectives);
  const perspective = useSelector((state) => state.perspective.perspective);

  // Details modal
  const [detailsOpen, setDetailsOpen] = useState(false);

  const [changeType, setChangeType] = useState("");
  const [overviewSelected, setOverviewSelected] = useState(true);
  const [strategyviewSelected, setStrategyviewSelected] = useState(false);
  const [measureviewSelected, setMeasureviewSelected] = useState(false);

  useEffect(() => {
    try {
      dispatch(getPerspective(perspectiveId));
      dispatch(getObjectivesOfPerspective(perspectiveId));
    } catch (error) {
      console.log(error);
    }
  }, [location]);
console.log(perspective?.data)
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        perspectiveId={perspectiveId}
      />
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <main className="flex-1 relative pb-8 z-0">
          <PageHeading
            pageTitle={`Khía cạnh: ${perspective?.data.name}`}
            pageSubtitle={perspectiveId}
            setDrawerOpen={setDrawerOpen}
            settingsId={perspectiveId}
            history={history}
            setDetailsOpen={setDetailsOpen}
          />
          <div className="bg-white">
            <div className="max-w-6xl mx-auto">
              <Breadcrumbs
                history={history}
                scorecardId={scorecardId}
                perspectiveId={perspectiveId}
              />
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
            <Overview
              data={data}
              data1={data1}
              scorecardId={scorecardId}
              perspectiveId={perspectiveId}
              changeType={changeType}
              objectives={objectives?.data}
              history={history}
            />
          )}

          {strategyviewSelected && <StrategyView />}

          {measureviewSelected && <MeasuresView />}
        </main>
      </div>
      <DetailsModal subheader={"Khía cạnh"} target={perspective?.data} detailsOpen={detailsOpen} setDetailsOpen={setDetailsOpen} />
    </div>
  );
}
