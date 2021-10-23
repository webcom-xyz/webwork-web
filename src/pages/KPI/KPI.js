import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import { getKPI } from "../../actions/kpi";
import Tabs from "../../components/Scorecard/Tabs";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageHeading from "../../components/Scorecard/PageHeading";
import months from "../../utils/months";
import years from "../../utils/years";
import quarters from "../../utils/quarters";
import { data, data1 } from "../../utils/data";

import TimePeriodSelector from "../../components/Scorecard/TimePeriodSelector";
import Overview from "../../components/KPI/Overview";
import StrategyView from "../../components/Scorecard/StrategyView";
import MeasuresView from "../../components/Scorecard/MeasuresView";
import Breadcrumbs from "../../components/shared/Breadcrumbs";
import { useTranslation } from "react-i18next";

export default function KPI() {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scorecardId, perspectiveId, objectiveId, kpiId } = useParams();
  const history = useHistory();
  const location = useLocation();

  const [changeType, setChangeType] = useState("");
  const monthSelected = useRef("");
  const quarterSelected = useRef("");
  const yearSelected = useRef("");
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");

  const [overviewSelected, setOverviewSelected] = useState(true);
  const [strategyviewSelected, setStrategyviewSelected] = useState(false);
  const [measureviewSelected, setMeasureviewSelected] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const { t, i18n } = useTranslation();
  const kpi = useSelector((state) => state.kpi.kpi);

  const [valueArgs, setValueArgs] = useState({});

  const handleChange = () => {
    setValueArgs({
      ...valueArgs,
      month: monthSelected.current.value,
      year: yearSelected.current.value,
    });
  };

  useEffect(() => {
    try {
      dispatch(getKPI(kpiId));
    } catch (error) {
      console.log(error);
    }

    if (refetch) {
      try {
        dispatch(getKPI(kpiId));
      } catch (error) {
        console.log(error);
      }
    }
  }, [location, dispatch, refetch]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        perspectiveId={perspectiveId}
        refetch={refetch}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        <main className="flex-1 relative pb-8 z-0">
          <PageHeading
            pageTitle={`${kpi?.data.name}`}
            pageSubtitle={kpiId}
            scorecardId={scorecardId}
            perspectiveId={perspectiveId}
            objectiveId={objectiveId}
            kpiId={kpiId}
            history={history}
          />
          <div className="bg-white">
            <div className="max-w-6xl mx-auto">
              <Breadcrumbs
                history={history}
                scorecardId={scorecardId}
                perspectiveId={perspectiveId}
                objectiveId={objectiveId}
                kpiId={kpiId}
                scorecardText={t("breadcrumbs.scorecard")}
                perspectiveText={t("breadcrumbs.perspective")}
                objectiveText={t("breadcrumbs.objective")}
                measureText={t("breadcrumbs.measure")}
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
                  overviewText={t("tabs.overview")}
                  detailsText={t("tabs.details")}
                  strategyText={t("tabs.strategy")}
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
              quarters={quarters}
              quarterSelected={quarterSelected}
              years={years}
              yearSelected={yearSelected}
              handleChange={handleChange}
              byMonthText={t("timePeriodSelector.byMonth")}
              byQuarterText={t("timePeriodSelector.byQuarter")}
              byYearText={t("timePeriodSelector.byYear")}
            />
          )}

          {overviewSelected && (
            <Overview
              data={data}
              data1={data1}
              changeType={changeType}
              kpis={kpi?.data}
              valueArgs={valueArgs}
              performanceTrendText={t("measure.overview.performanceTrend")}
              historicalPerformancesText={t(
                "measure.overview.historicalPerformances"
              )}
              measureInformationText={t("measure.overview.measureInformation")}
              performanceText={t("measure.overview.performance")}
              actualValueText={t("measure.overview.actualValue")}
            />
          )}

          {strategyviewSelected && <StrategyView />}

          {measureviewSelected && (
            <MeasuresView
              kpi={kpi?.data}
              measuresText={t("measure.measuresview.measuresText")}
            />
          )}
        </main>
      </div>
    </div>
  );
}
