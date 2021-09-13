import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import { getKPI } from "../../actions/kpi";
import Tabs from "../../components/Scorecard/Tabs";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Switch, Listbox, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../components/Perspective/Drawer";
import PageHeading from "../../components/Scorecard/PageHeading";
import months from "../../utils/months";
import years from "../../utils/years";
import quarters from "../../utils/quarters";
import { data, data1 } from "../../utils/data";

import TimePeriodSelector from "../../components/Scorecard/TimePeriodSelector";
import Overview from "../../components/Scorecard/Overview";
import StrategyView from "../../components/Scorecard/StrategyView";
import MeasuresView from "../../components/Scorecard/MeasuresView";
import axios from "axios";
export default function KPI() {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { perspectiveId, kpiId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();

  const [changeType, setChangeType] = useState("");
  const [monthSelected, setMonthSelected] = useState(months[0]);
  const [quarterSelected, setQuarterSelected] = useState(quarters[0]);
  const [yearSelected, setYearSelected] = useState(years[0]);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");

  const [overviewSelected, setOverviewSelected] = useState(true);
  const [strategyviewSelected, setStrategyviewSelected] = useState(false);
  const [measureviewSelected, setMeasureviewSelected] = useState(false);

  const kpis = useSelector((state) => state.kpi);

  useEffect(() => {
    try {
      dispatch(getKPI(kpiId));
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
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}

        {kpis.kpi ? (
          <main className="flex-1 relative pb-8 z-0">
            <PageHeading
              pageTitle={`KPI: ${kpis.kpi.response.data.name}`}
              pageSubtitle={kpiId}
              setDrawerOpen={setDrawerOpen}
              settingsId={kpiId}
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
        ) : (<p>Loading...</p>)}
      </div>
    </div>
  );
}
