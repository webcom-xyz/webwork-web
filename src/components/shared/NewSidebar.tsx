import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  CogIcon,
  DocumentReportIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  XIcon,
  ChartPieIcon,
  PuzzleIcon,
  CheckCircleIcon,
  ViewGridIcon,
  StatusOnlineIcon
} from "@heroicons/react/outline";
import classNames from "../../utils/classNames";
import { useHistory, useLocation } from "react-router-dom";
import { RootState } from "../../store";
import { CurrentUserDTO } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { ScorecardsDTO } from "../../types/scorecard";
import { PerspectivesDTO } from "../../types/perspective";
import { ObjectivesDTO } from "../../types/objective";
import { useTranslation } from "react-i18next";
import { signOut } from "../../actions/auth";
import {
  getAllScorecards,
  getAssignedScorecards,
} from "../../actions/scorecard";
import { getCurrentUser } from "../../actions/user";
import { getAssignedPerspectives } from "../../actions/perspective";
import { getAssignedObjectives } from "../../actions/objective";
import logo from "../../assets/logo_4.svg";
interface IProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scorecardId?: string;
  refetch?: boolean;
  homeActive?: boolean;
  employeesActive?: boolean;
  reportsActive?: boolean;
  billingActive?: boolean;
  scorecardsActive?: boolean;
  perspectiveId?: string;
  objectiveId?: string;
  perspectivesActive?: boolean;
  objectivesActive?: boolean;
}

export const NewSidebar: React.FC<IProps> = ({
  sidebarOpen,
  setSidebarOpen,
  scorecardId,
  refetch,
  homeActive,
  employeesActive,
  reportsActive,
  scorecardsActive,
  billingActive,
  perspectiveId,
  objectiveId,
  perspectivesActive,
  objectivesActive
}) => {
  const navigation = [
    {
      name: "Dashboard",
      href: "#",
      icon: HomeIcon,
      current: homeActive,
      page: "/dashboard",
    },
    {
      name: "Scorecard",
      href: "#",
      icon: ViewGridIcon,
      current: scorecardsActive,
      page: "/scorecards",
    },
    {
      name: "Perspective",
      href: "#",
      icon: PuzzleIcon,
      current: perspectivesActive,
      page: "/perspectives",
    },
    {
      name: "Objective",
      href: "#",
      icon: StatusOnlineIcon,
      current: objectivesActive,
      page: "/objectives",
    },
    {
      name: "Report",
      href: "#",
      icon: DocumentReportIcon,
      current: reportsActive,
      page: "/reports",
    },
    {
      name: "Employee",
      href: "#",
      icon: UserGroupIcon,
      current: employeesActive,
      page: "/employees",
    },
  ];

  const secondaryNavigation = [
    { name: "Apps", href: "#", icon: ViewGridAddIcon },
    { name: "Settings", href: "#", icon: CogIcon },
  ];
  const history = useHistory();
  const currentUser = useSelector<RootState, CurrentUserDTO>(
    (state) => state.user.currentUser
  );
  const scorecards = useSelector<RootState, ScorecardsDTO>(
    (state) => state.scorecard.scorecards
  );

  const assignedScorecards = useSelector<RootState, ScorecardsDTO>(
    (state) => state.scorecard.assignedScorecards
  );
  const assignedPerspectives = useSelector<RootState, PerspectivesDTO>(
    (state) => state.perspective.assignedPerspectives
  );
  const assignedObjectives = useSelector<RootState, ObjectivesDTO>(
    (state) => state.objective.assignedObjectives
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const handleSignOut = (): void => {
    try {
      dispatch(signOut(history));
    } catch (error) {
      console.log(error);
    }
  };

  if (refetch) {
    try {
      dispatch(getAllScorecards());
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
      dispatch(getAllScorecards());
      dispatch(getAssignedScorecards());
      dispatch(getAssignedPerspectives());
      dispatch(getAssignedObjectives());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, location]);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <img className="h-8 w-auto" src={logo} alt="Webwork" />
                </div>
                <nav aria-label="Sidebar" className="mt-5">
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => history.push(item.page)}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-4 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <hr
                    className="border-t border-gray-200 my-5"
                    aria-hidden="true"
                  />
                  <div className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md cursor-pointer"
                      >
                        <item.icon
                          className="text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src={currentUser?.data.avatarUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                        {currentUser?.data.fullName}
                      </p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img className="h-8 w-auto" src={logo} alt="Webwork" />
              </div>
              <nav className="mt-5 flex-1" aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => history.push(item.page)}
                      className={classNames(
                        item.current
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <hr
                  className="border-t border-gray-200 my-5"
                  aria-hidden="true"
                />
                <div className="flex-1 px-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md cursor-pointer"
                    >
                      <item.icon
                        className="text-gray-400 group-hover:text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src={currentUser?.data.avatarUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {currentUser?.data.fullName}
                    </p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
