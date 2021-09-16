import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../components/Objective/Drawer";
import { createNewKPI } from "../../actions/kpi";
import { getKPIsOfObjective } from "../../actions/objective";
import PageHeading from "../../components/Scorecard/PageHeading";
import TimePeriodSelector from "../../components/Scorecard/TimePeriodSelector";
import { data, data1 } from "../../utils/data";
import months from "../../utils/months";
import years from "../../utils/years";
import quarters from "../../utils/quarters";
import Tabs from "../../components/Scorecard/Tabs";
import Overview from "../../components/Objective/Overview";
import StrategyView from "../../components/Scorecard/StrategyView";
import MeasuresView from "../../components/Scorecard/MeasuresView";
import Breadcrumbs from "../../components/shared/Breadcrumbs";

export default function Objective(props) {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId, perspectiveId, objectiveId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();

  const [kpi, setKPI] = useState({});
  const name = useRef("");
  const weight = useRef(0);
  const description = useRef("");
  const actualValue = useRef("");
  const red = useRef("");
  const goal = useRef("");
  const dataType = useRef("");
  const calendar = useRef("");

  const [monthSelected, setMonthSelected] = useState(months[0]);
  const [quarterSelected, setQuarterSelected] = useState(quarters[0]);
  const [yearSelected, setYearSelected] = useState(years[0]);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");

  const [changeType, setChangeType] = useState("");
  const [overviewSelected, setOverviewSelected] = useState(true);
  const [strategyviewSelected, setStrategyviewSelected] = useState(false);
  const [measureviewSelected, setMeasureviewSelected] = useState(false);

  const kpis = useSelector((state) => state.objective.kpis);
  const handleChange = () => {
    setKPI({
      ...kpi,
      name: name.current.value,
      weight: weight.current.value,
      description: description.current.value,
      actualValue: actualValue.current.value,
      red: red.current.value,
      goal: goal.current.value,
      dataType: dataType.current.value,
      calendar: calendar.current.value,
      objectiveId: objectiveId,
    });
  };

  const handleCreateNewKPI = (e) => {
    e.preventDefault();
    console.log(kpi);

    try {
      dispatch(createNewKPI(kpi));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getKPIsOfObjective(objectiveId));
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        perspectiveId={perspectiveId}
      />
      <Drawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        name={name}
        weight={weight}
        description={description}
        actualValue={actualValue}
        red={red}
        goal={goal}
        dataType={dataType}
        calendar={calendar}
        handleChange={handleChange}
        handleCreateNewKPI={handleCreateNewKPI}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}

        <main className="flex-1 relative pb-8 z-0">
          <PageHeading
            pageTitle={`Mục tiêu: `}
            pageSubtitle={perspectiveId}
            setDrawerOpen={setDrawerOpen}
            settingsId={perspectiveId}
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
            <Overview
              data={data}
              data1={data1}
              scorecardId={scorecardId}
              perspectiveId={perspectiveId}
              objectiveId={objectiveId}
              changeType={changeType}
              kpis={kpis?.data}
              history={history}
            />
          )}

          {strategyviewSelected && <StrategyView />}

          {measureviewSelected && <MeasuresView />}
        </main>
      </div>
    </div>
  );
}
