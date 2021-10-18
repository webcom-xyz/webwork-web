import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../components/Objective/Drawer";
import { createNewKPI } from "../../actions/kpi";
import { getKPIsOfObjective, getObjective } from "../../actions/objective";
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
import DetailsModal from "../../components/shared/DetailsDrawer";
import Notification from "../../parts/shared/Notification";
import { useTranslation } from "react-i18next";

export default function Objective(props) {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId, perspectiveId, objectiveId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  const [showNotification, setShowNotification] = useState(false);
  const [kpiData, setKPIData] = useState({});
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
  const { t, i18n } = useTranslation();
  const kpis = useSelector((state) => state.objective.kpis);
  const objective = useSelector((state) => state.objective.objective);
  const [refetch, setRefetch] = useState(false);
  // Details modal
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleChange = () => {
    setKPIData({
      ...kpiData,
      name: name.current.value,
      weight: weight.current.value,
      description: description.current.value,
      // actualValue: actualValue.current.value,
      red: red.current.value,
      goal: goal.current.value,
      dataType: dataType.current.value,
      calendar: calendar.current.value,
      objectiveId: objectiveId,
    });
  };

  const handleCreateNewKPI = (e) => {
    e.preventDefault();
    try {
      dispatch(createNewKPI(kpiData));
      setShowNotification(true);
      setDrawerOpen(false);
      setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getObjective(objectiveId));
      dispatch(getKPIsOfObjective(objectiveId));
    } catch (error) {
      console.log(error);
    }

    if (refetch) {
      try {
        dispatch(getObjective(objectiveId));
        dispatch(getKPIsOfObjective(objectiveId));
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
        objectiveId={objectiveId}
        refetch={refetch}
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
        newMeasureText={t("objective.drawer.newMeasure")}
        newMeasureDescription={t("objective.drawer.newMeasureDescription")}
        measureNameText={t("objective.drawer.measureName")}
        descriptionText={t("objective.drawer.description")}
        weightText={t("objective.drawer.weight")}
        dataTypeText={t("objective.drawer.dataType")}
        redText={t("objective.drawer.red")}
        goalText={t("objective.drawer.goal")}
        calendarText={t("objective.drawer.calendar")}
        actualValueText={t("objective.drawer.actualValue")}
        copyIdText={t("objective.drawer.copyId")}
        moreAboutMeasuresText={t("objective.drawer.moreAboutMeasures")}
        createMeasureText={t("objective.drawer.createMeasure")}
        cancelText={t("objective.drawer.cancel")}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}

        <main className="flex-1 relative pb-8 z-0">
          <PageHeading
            pageTitle={`${objective?.data.name}`}
            pageSubtitle={objectiveId}
            setDrawerOpen={setDrawerOpen}
            history={history}
            setDetailsOpen={setDetailsOpen}
            scorecardId={scorecardId}
            perspectiveId={perspectiveId}
            objectiveId={objectiveId}
          />
          <div className="bg-white">
            <div className="max-w-6xl mx-auto">
              <Breadcrumbs
                history={history}
                scorecardId={scorecardId}
                perspectiveId={perspectiveId}
                objectiveId={objectiveId}
                scorecardText={t("breadcrumbs.scorecard")}
                perspectiveText={t("breadcrumbs.perspective")}
                objectiveText={t("breadcrumbs.objective")}
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
              setMonthSelected={setMonthSelected}
              quarters={quarters}
              quarterSelected={quarterSelected}
              setQuarterSelected={setQuarterSelected}
              years={years}
              yearSelected={yearSelected}
              setYearSelected={setYearSelected}
              byMonthText={t("timePeriodSelector.byMonth")}
              byQuarterText={t("timePeriodSelector.byQuarter")}
              byYearText={t("timePeriodSelector.byYear")}
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
              performanceTrendText={t("objective.overview.performanceTrend")}
              historicalPerformancesText={t(
                "objective.overview.historicalPerformances"
              )}
              measuresOverviewText={t("objective.overview.measuresOverview")}
              performanceText={t("objective.overview.performance")}
              anomalyText={t("objective.overview.anomaly")}
              anomalyDescription={t("objective.overview.anomalyDescription")}
              changepointText={t("objective.overview.changepoint")}
              changepointDescription={t(
                "objective.overview.changepointDescription"
              )}
            />
          )}

          {strategyviewSelected && <StrategyView />}

          {measureviewSelected && (
            <MeasuresView
              measuresText={t("objective.measuresview.measuresText")}
            />
          )}
        </main>
      </div>
      <DetailsModal
        subheader={"Mục tiêu"}
        target={objective?.data}
        detailsOpen={detailsOpen}
        setDetailsOpen={setDetailsOpen}
      />
      <Notification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
        title="Thành công!"
        subtitle="Đã tạo thành công chỉ số mới."
      />
    </div>
  );
}
