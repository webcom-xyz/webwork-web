import React, { useState, useEffect, useRef } from "react";
import PageHeading from "../../components/shared/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootState } from "../../store";
import {
  AssignedMeasuresDTO,
  IMeasure,
  MeasureDTO,
  MeasuresDTO,
} from "../../types/measure";
import { NewSidebar } from "../../components/shared/NewSidebar";
import { MenuIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo_4.svg";
import {
  ChevronLeftIcon,
  SearchIcon,
  UserAddIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";
import classNames from "../../utils/classNames";
import {
  assignEmployeeToScorecard,
  createNewScorecard,
  createNewScorecardFromTemplate,
  deleteScorecard,
  getAllScorecards,
  getAssignedEmployeesOfScorecard,
  getAssignedScorecards,
  getPerspectivesOfScorecard,
  getScorecard,
} from "../../actions/scorecard";
import { IScorecard, ScorecardDTO, ScorecardsDTO } from "../../types/scorecard";
import Tabs from "../../components/Scorecard/Tabs";
import {
  IPerspective,
  PerspectiveDTO,
  PerspectivesDTO,
} from "../../types/perspective";
import {
  assignEmployeeToPerspective,
  createNewPerspective,
  deletePerspective,
  getAssignedEmployeesOfPerspective,
  getObjectivesOfPerspective,
  getPerspective,
} from "../../actions/perspective";
import Overview from "../../components/Scorecard/Overview";
import {
  assignEmployeeToObjective,
  createNewObjective,
  deleteObjective,
  getAssignedEmployeesOfObjective,
  getKPIsOfObjective,
  getObjective,
} from "../../actions/objective";
import {
  assignEmployeeToKPI,
  createNewKPI,
  deleteKPI,
  getAssignedEmployeesOfKPI,
  getKPI,
} from "../../actions/kpi";
import Infoview from "../../components/Scorecard/Infoview";
import { IObjective, ObjectiveDTO, ObjectivesDTO } from "../../types/objective";
import CreateNewPerspectiveDrawer from "../../components/Scorecard/CreateNewPerspectiveDrawer";
import moment from "moment";
import CreateObjectiveDrawer from "../../components/Perspective/CreateObjectiveDrawer";
import CreateMeasureDrawer from "../../components/Objective/CreateMeasureDrawer";
import { AssignedEmployeesDTO, IAssignedEmployee } from "../../types/member";
import AddEmployeeDrawer from "../../components/Employee/AddEmployeeDrawer";
import CreateScorecardDrawer from "../../components/Scorecard/CreateScorecardDrawer";

interface IState {
  valueArgs: {
    month?: string;
    year?: string;
  };
  scorecardData: IScorecard;
  perspectiveData: IPerspective;
  objectiveData: IObjective;
  measureData: IMeasure;
  assignEmployee: IAssignedEmployee;
}

type Params = {
  scorecardId?: string;
  perspectiveId?: string;
  objectiveId?: string;
  measureId?: string;
};

const Scorecards: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const [createPerspectiveDrawerOpen, setCreatePerspectiveDrawerOpen] =
    useState(false);
  const [createObjectiveDrawerOpen, setCreateObjectiveDrawerOpen] =
    useState(false);
  const [createMeasureDrawerOpen, setCreateMeasureDrawerOpen] = useState(false);
  const [addEmployeeDrawerOpen, setAddEmployeeDrawerOpen] = useState(false);
  const [createScorecardDrawerOpen, setCreateScorecardDrawerOpen] =
    useState(false);

  const { t, i18n } = useTranslation();

  const scorecard = useSelector<RootState, ScorecardDTO>(
    (state) => state.scorecard.scorecard
  );
  const scorecards = useSelector<RootState, ScorecardsDTO>(
    (state) => state.scorecard.scorecards
  );
  const assignedScorecards = useSelector<RootState, ScorecardsDTO>(
    (state) => state.scorecard.assignedScorecards
  );
  const perspectives = useSelector<RootState, PerspectivesDTO>(
    (state) => state.scorecard.perspectives
  );

  const perspective = useSelector<RootState, PerspectiveDTO>(
    (state) => state.perspective.perspective
  );
  const objectives = useSelector<RootState, ObjectivesDTO>(
    (state) => state.perspective.objectives
  );

  const objective = useSelector<RootState, ObjectiveDTO>(
    (state) => state.objective.objective
  );
  const measures = useSelector<RootState, MeasuresDTO>(
    (state) => state.objective.kpis
  );

  const measure = useSelector<RootState, MeasureDTO>((state) => state.kpi.kpi);

  const assignedEmployeesOfScorecard = useSelector<
    RootState,
    AssignedEmployeesDTO
  >((state) => state.scorecard.assignedEmployees);

  const assignedEmployeesOfPerspective = useSelector<
    RootState,
    AssignedEmployeesDTO
  >((state) => state.perspective.assignedEmployees);
  const assignedEmployeesOfObjective = useSelector<
    RootState,
    AssignedEmployeesDTO
  >((state) => state.objective.assignedEmployees);
  const assignedEmployeesOfMeasure = useSelector<
    RootState,
    AssignedEmployeesDTO
  >((state) => state.kpi.assignedEmployees);

  const history = useHistory();
  const [overviewSelected, setOverviewSelected] = useState(true);
  const [infoviewSelected, setInfoviewSelected] = useState(false);
  const [strategyviewSelected, setStrategyviewSelected] = useState(false);
  const [measureviewSelected, setMeasureviewSelected] = useState(false);
  const [changeType, setChangeType] = useState("");
  const { scorecardId, perspectiveId, objectiveId, measureId } =
    useParams<Params>();

  const nameRef = useRef<any>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const actualValueRef = useRef<HTMLInputElement>(null);
  const redRef = useRef<HTMLInputElement>(null);
  const goalRef = useRef<HTMLInputElement>(null);
  const dataTypeRef = useRef<HTMLSelectElement>(null);
  const calendarRef = useRef<HTMLSelectElement>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const roleRef = useRef<HTMLSelectElement>(null);

  const scorecardNameRef = useRef<HTMLInputElement>(null);
  const scorecardDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const scorecardTypeRef = useRef<HTMLSelectElement>(null);

  const [createFromTemplate, setCreateFromTemplate] = useState(false);

  // const [blankScorecardData, setBlankScorecardData] = useState<
  //   IState["scorecardData"]
  // >({
  //   name: "",
  //   description: "",
  // });
  // const [templateScorecardData, setTemplateScorecardData] = useState<
  //   IState["scorecardData"]
  // >({
  //   name: "",
  //   description: "",
  //   type: "",
  // });
  const [scorecardData, setScorecardData] = useState<IState["scorecardData"]>({
    name: "",
    description: "",
    type: "",
  });
  const [perspectiveData, setPerspectiveData] = useState<
    IState["perspectiveData"]
  >({
    name: "",
    weight: 0,
    description: "",
    scorecardId: "",
  });
  const [objectiveData, setObjectiveData] = useState<IState["objectiveData"]>({
    name: "",
    weight: 0,
    description: "",
    perspectiveId: "",
  });
  const [measureData, setMeasureData] = useState<IState["measureData"]>({
    name: "",
    weight: 0,
    description: "",
    red: "",
    goal: "",
    dataType: "",
    calendar: "",
    objectiveId: "",
  });
  const [assignEmployeeData, setAssignEmployeeData] = useState<
    IState["assignEmployee"]
  >({
    email: "",
    role: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    // setBlankScorecardData({
    //   ...blankScorecardData,
    //   name: scorecardNameRef.current?.value,
    //   description: scorecardDescriptionRef.current?.value,
    // });
    // setTemplateScorecardData({
    //   ...templateScorecardData,
    //   name: scorecardNameRef.current?.value,
    //   description: scorecardDescriptionRef.current?.value,
    //   type: scorecardTypeRef.current?.value,
    // });
    setScorecardData({
      ...scorecardData,
      name: scorecardNameRef.current?.value,
      description: scorecardDescriptionRef.current?.value,
      type: scorecardTypeRef.current?.value,
    });
    setPerspectiveData({
      ...perspectiveData,
      name: nameRef.current?.value,
      weight: Number(weightRef.current?.value),
      description: descriptionRef.current?.value,
      scorecardId: scorecardId,
    });
    setObjectiveData({
      ...objectiveData,
      name: nameRef.current?.value,
      weight: Number(weightRef.current?.value),
      description: descriptionRef.current?.value,
      perspectiveId: perspectiveId,
    });
    setMeasureData({
      ...measureData,
      name: nameRef.current?.value,
      weight: Number(weightRef.current?.value),
      description: descriptionRef.current?.value,
      red: redRef.current?.value,
      goal: goalRef.current?.value,
      dataType: dataTypeRef.current?.value,
      calendar: calendarRef.current?.value,
      objectiveId: objectiveId,
    });
    setAssignEmployeeData({
      ...assignEmployeeData,
      email: emailRef.current?.value,
      role: roleRef.current?.value,
    });
  };

  const handleCreateScorecard = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      if (createFromTemplate) {
        dispatch(createNewScorecardFromTemplate(scorecardData));
      } else {
        dispatch(createNewScorecard(scorecardData));
      }
      setCreateScorecardDrawerOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreatePerspective = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    try {
      dispatch(createNewPerspective(perspectiveData));
      // setShowNotification(true);
      setCreatePerspectiveDrawerOpen(false);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateObjective = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    try {
      dispatch(createNewObjective(objectiveData));
      // setShowNotification(true);
      setCreateObjectiveDrawerOpen(false);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateMeasure = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      dispatch(createNewKPI(measureData));
      // setShowNotification(true);
      setCreateMeasureDrawerOpen(false);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignEmployeeToScorecard = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    try {
      dispatch(assignEmployeeToScorecard(scorecardId, assignEmployeeData));
      setAddEmployeeDrawerOpen(false);
      // setNotificationSubtitle("Đã giao thẻ điểm cho nhân viên.");
      // setShowNotification(true);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignEmployeeToPerspective = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    try {
      dispatch(assignEmployeeToPerspective(perspectiveId, assignEmployeeData));
      setAddEmployeeDrawerOpen(false);
      // setNotificationSubtitle("Đã giao thẻ điểm cho nhân viên.");
      // setShowNotification(true);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignEmployeeToObjective = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    try {
      dispatch(assignEmployeeToObjective(objectiveId, assignEmployeeData));
      setAddEmployeeDrawerOpen(false);
      // setNotificationSubtitle("Đã giao thẻ điểm cho nhân viên.");
      // setShowNotification(true);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAssignEmployeeToMeasure = (
    e: React.FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();

    try {
      dispatch(assignEmployeeToKPI(measureId, assignEmployeeData));
      setAddEmployeeDrawerOpen(false);
      // setNotificationSubtitle("Đã giao thẻ điểm cho nhân viên.");
      // setShowNotification(true);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteScorecard = () => {
    try {
      dispatch(deleteScorecard(scorecardId));
      // setNotificationSubtitle("Đã xóa thẻ điểm thành công.");
      // setShowNotification(true);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletePerspective = () => {
    try {
      dispatch(deletePerspective(perspectiveId));
      // setNotificationSubtitle("Đã xóa thẻ điểm thành công.");
      // setShowNotification(true);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteObjective = () => {
    try {
      dispatch(deleteObjective(objectiveId));
      // setNotificationSubtitle("Đã xóa thẻ điểm thành công.");
      // setShowNotification(true);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteMeasure = () => {
    try {
      dispatch(deleteKPI(measureId));
      // setNotificationSubtitle("Đã xóa thẻ điểm thành công.");
      // setShowNotification(true);
      // setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      if (scorecardId) {
        dispatch(getScorecard(scorecardId));
        dispatch(getPerspectivesOfScorecard(scorecardId));
        dispatch(getAssignedEmployeesOfScorecard(scorecardId));
      }

      if (scorecardId && perspectiveId) {
        dispatch(getPerspective(perspectiveId));
        dispatch(getObjectivesOfPerspective(perspectiveId));
        dispatch(getAssignedEmployeesOfPerspective(perspectiveId));
      }

      if (scorecardId && perspectiveId && objectiveId) {
        dispatch(getObjective(objectiveId));
        dispatch(getKPIsOfObjective(objectiveId));
        dispatch(getAssignedEmployeesOfObjective(objectiveId));
      }

      if (scorecardId && perspectiveId && objectiveId && measureId) {
        dispatch(getKPI(measureId));
        dispatch(getAssignedEmployeesOfKPI(measureId));
      }
    } catch (error) {}
  }, [location]);

  useEffect(() => {
    try {
      dispatch(getAllScorecards());
      dispatch(getAssignedScorecards());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location]);

  return (
    <>
      <div className="h-screen flex overflow-hidden bg-white">
        <NewSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          scorecardsActive={true}
        />
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
              <div>
                <img className="h-8 w-auto" src={logo} alt="Workflow" />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              {/* Breadcrumb */}
              <nav
                className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                aria-label="Breadcrumb"
              >
                <a
                  href="#"
                  className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
                >
                  <ChevronLeftIcon
                    className="-ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Directory</span>
                </a>
              </nav>

              <article>
                {scorecardId && (
                  <>
                    <PageHeading
                      noBottomBorder={true}
                      primaryButtonText={
                        scorecardId &&
                        !perspectiveId &&
                        !objectiveId &&
                        !measureId
                          ? "Create perspective"
                          : scorecardId &&
                            perspectiveId &&
                            !objectiveId &&
                            !measureId
                          ? "Create objective"
                          : "Create measure"
                      }
                      heading={
                        scorecardId &&
                        !perspectiveId &&
                        !objectiveId &&
                        !measureId
                          ? scorecard?.data.name
                          : scorecardId &&
                            perspectiveId &&
                            !objectiveId &&
                            !measureId
                          ? perspective?.data.name
                          : scorecardId &&
                            perspectiveId &&
                            objectiveId &&
                            !measureId
                          ? objective?.data.name
                          : measure?.data.name
                      }
                      scorecardId={scorecardId}
                      perspectiveId={perspectiveId}
                      objectiveId={objectiveId}
                      measureId={measureId}
                      setDrawerOpen={
                        scorecardId &&
                        !perspectiveId &&
                        !objectiveId &&
                        !measureId
                          ? setCreatePerspectiveDrawerOpen
                          : scorecardId &&
                            perspectiveId &&
                            !objectiveId &&
                            !measureId
                          ? setCreateObjectiveDrawerOpen
                          : setCreateMeasureDrawerOpen
                      }
                      scorecard={scorecard?.data}
                      perspective={perspective?.data}
                      objective={objective?.data}
                      measure={measure?.data}
                    />
                    <div>
                      <div className="border-b border-gray-200">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                          <Tabs
                            overviewSelected={overviewSelected}
                            setOverviewSelected={setOverviewSelected}
                            strategyviewSelected={strategyviewSelected}
                            setStrategyviewSelected={setStrategyviewSelected}
                            measureviewSelected={measureviewSelected}
                            setMeasureviewSelected={setMeasureviewSelected}
                            infoviewSelected={infoviewSelected}
                            setInfoviewSelected={setInfoviewSelected}
                            overviewText={t("tabs.overview")}
                            detailsText={t("tabs.details")}
                            strategyText={t("tabs.strategy")}
                          />
                        </div>
                      </div>
                    </div>
                    {overviewSelected && (
                      <Overview
                        changeType={changeType}
                        perspectives={perspectives?.data}
                        objectives={objectives?.data}
                        measures={measures?.data}
                        scorecardId={scorecardId}
                        perspectiveId={perspectiveId}
                        objectiveId={objectiveId}
                        measureId={measureId}
                        history={history}
                        performanceTrendText={t(
                          "scorecard.overview.performanceTrend"
                        )}
                        historicalPerformancesText={t(
                          "scorecard.overview.historicalPerformances"
                        )}
                        perspectivesOverviewText={t(
                          "scorecard.overview.perspectivesOverview"
                        )}
                        performanceText={t("scorecard.overview.performance")}
                        anomalyText={t("scorecard.overview.anomaly")}
                        anomalyDescription={t(
                          "scorecard.overview.anomalyDescription"
                        )}
                        changepointText={t("scorecard.overview.changepoint")}
                        changepointDescription={t(
                          "scorecard.overview.changepointDescription"
                        )}
                      />
                    )}

                    {infoviewSelected && (
                      <Infoview
                        scorecard={scorecard?.data}
                        scorecardId={scorecardId}
                        perspective={perspective?.data}
                        perspectiveId={perspectiveId}
                        objective={objective?.data}
                        objectiveId={objectiveId}
                        measure={measure?.data}
                        measureId={measureId}
                        setAddEmployeeDrawerOpen={setAddEmployeeDrawerOpen}
                        assignedEmployeesOfScorecard={
                          assignedEmployeesOfScorecard?.data
                        }
                        assignedEmployeesOfPerspective={
                          assignedEmployeesOfPerspective?.data
                        }
                        assignedEmployeesOfObjective={
                          assignedEmployeesOfObjective?.data
                        }
                        assignedEmployeesOfMeasure={
                          assignedEmployeesOfMeasure?.data
                        }
                        handleDeleteScorecard={handleDeleteScorecard}
                        handleDeletePerspective={handleDeletePerspective}
                        handleDeleteObjective={handleDeleteObjective}
                        handleDeleteMeasure={handleDeleteMeasure}
                      />
                    )}
                  </>
                )}
              </article>
            </main>
            <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
              <div className="px-6 pt-6 pb-4">
                <h2 className="text-lg font-medium text-gray-900">Directory</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Directory of 3,018 scorecards
                </p>
                <div className="mt-6 flex space-x-4">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="search"
                        name="search"
                        id="search"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setCreateScorecardDrawerOpen(true)}
                    className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <ViewGridAddIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Add</span>
                  </button>
                </div>
              </div>
              {/* Directory list */}
              <nav
                className="flex-1 min-h-0 overflow-y-auto"
                aria-label="Directory"
              >
                {/* {Object.keys(directory).map((letter) => ( */}
                <div key={1} className="relative">
                  {/* <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                  <h3>A</h3>
                </div> */}
                  <div className="top-0 border-t border-gray-200"></div>
                  <ul
                    role="list"
                    className="relative z-0 divide-y divide-gray-200"
                  >
                    {scorecards?.data.map((scorecard) => (
                      <li
                        key={scorecard.id}
                        onClick={() =>
                          history.push(`/scorecards/${scorecard.id}`)
                        }
                        className={classNames(
                          scorecardId === scorecard.id
                            ? "ring-2 ring-inset ring-blue-600"
                            : "",
                          "relative bg-white py-5 px-4 hover:bg-gray-50"
                        )}
                      >
                        <div className="flex justify-between space-x-3">
                          <div className="min-w-0 flex-1">
                            <a className="block focus:outline-none cursor-pointer">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {scorecard.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                {scorecard.type}
                              </p>
                            </a>
                          </div>
                          <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                            {/* Badge */}
                            {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <svg
                              className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-400"
                              fill="currentColor"
                              viewBox="0 0 8 8"
                            >
                              <circle cx={4} cy={4} r={3} />
                            </svg>
                            N/a
                          </span> */}
                            {/* <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                              <div
                                className={classNames(
                                  "bg-green-500",
                                  "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                                )}
                                aria-hidden="true"
                              />
                            </span> */}
                          </div>
                        </div>
                        <div className="mt-1">
                          <p className="line-clamp-2 text-sm text-gray-600">
                            {moment(scorecard.createDate).format("DD/MM/YYYY")}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* ))} */}
              </nav>
            </aside>
          </div>
        </div>
        <CreateScorecardDrawer
          drawerOpen={createScorecardDrawerOpen}
          handleChange={handleChange}
          handleCreateScorecard={handleCreateScorecard}
          scorecardDescriptionRef={scorecardDescriptionRef}
          scorecardNameRef={scorecardNameRef}
          scorecardTypeRef={scorecardTypeRef}
          setDrawerOpen={setCreateScorecardDrawerOpen}
          createFromTemplate={createFromTemplate}
          setCreateFromTemplate={setCreateFromTemplate}
        />
        <CreateNewPerspectiveDrawer
          drawerOpen={createPerspectiveDrawerOpen}
          setDrawerOpen={setCreatePerspectiveDrawerOpen}
          nameRef={nameRef}
          weightRef={weightRef}
          descriptionRef={descriptionRef}
          handleChange={handleChange}
          handleCreateNewPerspective={handleCreatePerspective}
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
        />
        <CreateObjectiveDrawer
          drawerOpen={createObjectiveDrawerOpen}
          setDrawerOpen={setCreateObjectiveDrawerOpen}
          nameRef={nameRef}
          weightRef={weightRef}
          descriptionRef={descriptionRef}
          handleChange={handleChange}
          handleCreateNewObjective={handleCreateObjective}
          newObjectiveText={t("perspective.drawer.newObjective")}
          newObjectiveDescription={t(
            "perspective.drawer.newObjectiveDescription"
          )}
          objectiveNameText={t("perspective.drawer.objectiveName")}
          descriptionText={t("perspective.drawer.description")}
          weightText={t("perspective.drawer.weight")}
          copyIdText={t("perspective.drawer.copyId")}
          moreAboutObjectiveText={t("perspective.drawer.moreAboutObjective")}
          createObjectiveText={t("perspective.drawer.createObjective")}
          cancelText={t("perspective.drawer.cancel")}
        />
        <CreateMeasureDrawer
          drawerOpen={createMeasureDrawerOpen}
          setDrawerOpen={setCreateMeasureDrawerOpen}
          nameRef={nameRef}
          weightRef={weightRef}
          descriptionRef={descriptionRef}
          actualValueRef={actualValueRef}
          redRef={redRef}
          goalRef={goalRef}
          dataTypeRef={dataTypeRef}
          calendarRef={calendarRef}
          handleChange={handleChange}
          handleCreateNewKPI={handleCreateMeasure}
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
      </div>
      <AddEmployeeDrawer
        drawerOpen={addEmployeeDrawerOpen}
        setDrawerOpen={setAddEmployeeDrawerOpen}
        handleAddEmployee={
          scorecardId && !perspectiveId && !objectiveId && !measureId
            ? handleAssignEmployeeToScorecard
            : scorecardId && perspectiveId && !objectiveId && !measureId
            ? handleAssignEmployeeToPerspective
            : scorecardId && perspectiveId && objectiveId && !measureId
            ? handleAssignEmployeeToObjective
            : handleAssignEmployeeToMeasure
        }
        handleChange={handleChange}
        emailRef={emailRef}
        roleRef={roleRef}
      />
    </>
  );
};
export default Scorecards;
