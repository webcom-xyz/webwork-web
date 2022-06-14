import { useState, useEffect, useRef, FormEvent } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Tabs from "../../components/Scorecard/Tabs";
import { useHistory, useLocation, useParams } from "react-router-dom";
import CreateNewPerspectiveDrawer from "../../components/Scorecard/CreateNewPerspectiveDrawer";
import { useDispatch, useSelector } from "react-redux";
import ConfirmDeleteDialog from "../../components/shared/ConfirmDeleteDialog";
import PageHeading from "../../components/Scorecard/PageHeading";
import months from "../../utils/months";
import years from "../../utils/years";
import quarters from "../../utils/quarters";
import { data, data1 } from "../../utils/data";
import TimePeriodSelector from "../../components/Scorecard/TimePeriodSelector";
import Overview from "../../components/Scorecard/Overview";
import StrategyView from "../../components/Scorecard/StrategyView";
import MeasuresView from "../../components/Scorecard/MeasuresView";
import {
  getPerspectivesOfScorecard,
  getScorecard,
} from "../../actions/scorecard";
import Breadcrumbs from "../../components/shared/Breadcrumbs";
import DetailsModal from "../../components/shared/DetailsDrawer";
import { createNewPerspective } from "../../actions/perspective";
import Notification from "../../parts/shared/Notification";
import { useTranslation } from "react-i18next";
import { ScorecardDTO, ScorecardParams } from "../../types/scorecard";
import { RootState } from "../../store";
import { IPerspective, PerspectivesDTO } from "../../types/perspective";

interface IState {
  perspectiveData: IPerspective;
}

export default function Scorecard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scorecardId } = useParams<ScorecardParams>();
  const monthSelected = useRef<HTMLSelectElement>(null);
  const quarterSelected = useRef<HTMLSelectElement>(null);
  const yearSelected = useRef<HTMLSelectElement>(null);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [changeType, setChangeType] = useState("");
  const history = useHistory();
  const [overviewSelected, setOverviewSelected] = useState(true);
  const [strategyviewSelected, setStrategyviewSelected] = useState(false);
  const [measureviewSelected, setMeasureviewSelected] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const scorecard = useSelector<RootState, ScorecardDTO>(
    (state) => state.scorecard.scorecard
  );
  const perspectives = useSelector<RootState, PerspectivesDTO>(
    (state) => state.scorecard.perspectives
  );

  // Details modal
  const [detailsOpen, setDetailsOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const [refetch, setRefetch] = useState(false);
  const [perspectiveData, setPerspectiveData] = useState<
    IState["perspectiveData"]
  >({
    name: "",
    weight: 0,
    description: "",
    scorecardId: "",
  });
  const nameRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);

  const handleChange = (): void => {
    setPerspectiveData({
      ...perspectiveData,
      name: nameRef.current?.value,
      weight: Number(weightRef.current?.value),
      description: descriptionRef.current?.value,
      scorecardId: scorecardId,
    });
  };

  const handleCreateNewPerspective = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      dispatch(createNewPerspective(perspectiveData));
      setShowNotification(true);
      setDrawerOpen(false);
      setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getScorecard(scorecardId));
      dispatch(getPerspectivesOfScorecard(scorecardId));
    } catch (error) {
      console.log(error);
    }

    if (refetch) {
      try {
        dispatch(getScorecard(scorecardId));
        dispatch(getPerspectivesOfScorecard(scorecardId));
      } catch (error) {
        console.log(error);
      }
    }
  }, [location, dispatch, refetch]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100 dark:bg-gray-800">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        scorecardId={scorecardId}
        refetch={refetch}
      />
      {/* <CreateNewPerspectiveDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        name={nameRef}
        weight={weightRef}
        description={descriptionRef}
        handleChange={handleChange}
        handleCreateNewPerspective={handleCreateNewPerspective}
        newPerspectiveText={t("scorecard.drawer.newPerspective")}
        newPerspectiveDescription={t(
          "scorecard.drawer.newPerspectiveDescription"
        )}
        perspectiveNameText={t("scorecard.drawer.perspectiveName")}
        customerText={t("scorecard.drawer.customer")}
        financialText={t("scorecard.drawer.financial")}
        learningAndGrowthText={t("scorecard.drawer.learningAndGrowth")}
        internalProcessesText={t("scorecard.drawer.internalProcesses")}
        descriptionText={t("scorecard.drawer.description")}
        weightText={t("scorecard.drawer.weight")}
        copyIdText={t("scorecard.drawer.copyId")}
        moreAboutPerspectiveText={t("scorecard.drawer.moreAboutPerspective")}
        createPerspectiveText={t("scorecard.drawer.createPerspective")}
        cancelText={t("scorecard.drawer.cancel")}
      /> */}
      <ConfirmDeleteDialog
        confirmDeleteDialogOpen={confirmDeleteDialogOpen}
        setConfirmDeleteDialogOpen={setConfirmDeleteDialogOpen}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}

        <main className="flex-1 relative pb-8 z-0">
          <PageHeading
            pageTitle={`${scorecard?.data.name}`}
            pageSubtitle={scorecardId}
            setDrawerOpen={setDrawerOpen}
            scorecardId={scorecardId}
            history={history}
            setDetailsOpen={setDetailsOpen}
          />
          <div className="bg-white">
            <div className="max-w-6xl mx-auto">
              <Breadcrumbs
                history={history}
                scorecardId={scorecardId}
                scorecardText={t("breadcrumbs.scorecard")}
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">
              <div>
                {/* <Tabs
                  overviewSelected={overviewSelected}
                  setOverviewSelected={setOverviewSelected}
                  strategyviewSelected={strategyviewSelected}
                  setStrategyviewSelected={setStrategyviewSelected}
                  measureviewSelected={measureviewSelected}
                  setMeasureviewSelected={setMeasureviewSelected}
                  overviewText={t("tabs.overview")}
                  detailsText={t("tabs.details")}
                  strategyText={t("tabs.strategy")}
                /> */}
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
              byMonthText={t("timePeriodSelector.byMonth")}
              byQuarterText={t("timePeriodSelector.byQuarter")}
              byYearText={t("timePeriodSelector.byYear")}
            />
          )}

          {overviewSelected && (
            <Overview
              changeType={changeType}
              perspectives={perspectives?.data}
              scorecardId={scorecardId}
              history={history}
              performanceTrendText={t("scorecard.overview.performanceTrend")}
              historicalPerformancesText={t(
                "scorecard.overview.historicalPerformances"
              )}
              perspectivesOverviewText={t(
                "scorecard.overview.perspectivesOverview"
              )}
              performanceText={t("scorecard.overview.performance")}
              anomalyText={t("scorecard.overview.anomaly")}
              anomalyDescription={t("scorecard.overview.anomalyDescription")}
              changepointText={t("scorecard.overview.changepoint")}
              changepointDescription={t(
                "scorecard.overview.changepointDescription"
              )}
            />
          )}

          {strategyviewSelected && <StrategyView />}

          {measureviewSelected && (
            <MeasuresView
              measuresText={t("scorecard.measuresview.measuresText")}
            />
          )}
        </main>
      </div>
      <DetailsModal
        subheader={"Thẻ điểm"}
        target={scorecard?.data}
        detailsOpen={detailsOpen}
        setDetailsOpen={setDetailsOpen}
      />
      <Notification
        showNotification={showNotification}
        setShowNotification={setShowNotification}
        title="Thành công!"
        subtitle="Đã tạo thành công khía cạnh mới."
      />
    </div>
  );
}
