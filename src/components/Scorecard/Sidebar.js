import React, { useEffect } from "react";
import { Fragment } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import {
  CreditCardIcon,
  HomeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
  SupportIcon,
  ChartPieIcon,
  DocumentReportIcon,
} from "@heroicons/react/outline";

import { useHistory, useLocation } from "react-router-dom";
import classNames from "../../utils/classNames";
import logo from "../../assets/logo_4_white.svg";
import handleLink from "../../utils/handleLink";
import { useDispatch, useSelector } from "react-redux";
import { getAllScorecards } from "../../actions/scorecard";
import AccountMenu from "../../parts/Scorecard/AccountMenu";
import { getCurrentUser } from "../../actions/user";
import { signOut } from "../../actions/auth";

export default function Sidebar(props) {
  const history = useHistory();
  const currentUser = useSelector((state) => state.user.currentUser);
  const scorecards = useSelector((state) => state.scorecard.scorecards);

  const dispatch = useDispatch();
  const location = useLocation();

  const navigation = [
    {
      name: "Bảng điều khiển",
      href: "#",
      icon: HomeIcon,
      current: props.homeActive,
      page: "/dashboard",
    },
    {
      name: "Nhân viên",
      href: "#",
      icon: UserGroupIcon,
      current: props.employeesActive,
      page: "/employees",
    },
    {
      name: "Báo cáo",
      href: "#",
      icon: DocumentReportIcon,
      current: props.reportsActive,
      page: "/reports",
    },
    // {
    //   name: "Quy trình",
    //   href: "#",
    //   icon: CollectionIcon,
    // },
  ];

  const secondaryNavigation = [
    {
      name: "Thanh toán",
      href: "#",
      icon: CreditCardIcon,
      current: props.billingActive,
      page: "/account/plan-billing",
    },
    { name: "Hỗ trợ", href: "#", icon: SupportIcon },
    { name: "Bảo mật", href: "#", icon: ShieldCheckIcon },
  ];

  const handleSignOut = () => {
    try {
      dispatch(signOut(history));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
      dispatch(getAllScorecards());
    } catch (error) {
      console.log(error);
    }
  }, [location]);

  return (
    <>
      <Transition.Root show={props.sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={props.sidebarOpen}
          onClose={props.setSidebarOpen}
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
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-blue-700">
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
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => props.setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-4">
                <img
                  className="h-8 w-auto"
                  src={logo}
                  onClick={() => history.push("/")}
                  alt="Webwork logo"
                />
              </div>
              <nav
                className="mt-5 flex-shrink-0 h-full divide-y divide-blue-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleLink(e, item.page, history)}
                      className={classNames(
                        item.current
                          ? "bg-blue-800 text-white"
                          : "text-blue-100 hover:text-white hover:bg-blue-600",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-blue-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}

                  {/* Scorecard section for mobile */}
                  {scorecards ? (
                    scorecards.data.map((scorecard) => (
                      <>
                        <Disclosure
                          as="div"
                          key={scorecard.id}
                          className="space-y-1"
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  scorecard.id === props.scorecardId
                                    ? "bg-blue-800 text-white"
                                    : "text-blue-100 hover:text-white hover:bg-blue-600",
                                  "group w-full flex items-center px-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                )}
                              >
                                <ChartPieIcon
                                  className="mr-3 flex-shrink-0 h-6 w-6 text-blue-200"
                                  aria-hidden="true"
                                />
                                <span
                                  onClick={(e) =>
                                    handleLink(e, `/${scorecard.id}`, history)
                                  }
                                  className="flex-1"
                                >
                                  {scorecard.name}
                                </span>
                                <svg
                                  className={classNames(
                                    open
                                      ? "text-gray-400 rotate-90"
                                      : "text-gray-300",
                                    "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                  )}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 6L14 10L6 14V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </Disclosure.Button>

                              <Disclosure.Panel className="space-y-1">
                                {scorecard.perspectives.map((perspective) => (
                                  <>
                                    <a
                                      onClick={(e) =>
                                        handleLink(
                                          e,
                                          `/${scorecard.id}/${perspective.id}`,
                                          history
                                        )
                                      }
                                      className={classNames(
                                        perspective.id === props.perspectiveId
                                          ? "bg-blue-800 text-white"
                                          : "text-blue-100 hover:text-white hover:bg-blue-600",
                                        "group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md hover:text-white hover:bg-blue-600 cursor-pointer"
                                      )}
                                    >
                                      {perspective.name}
                                    </a>
                                  </>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </div>

                {/* Secondary navigation for smaller screen sizes */}
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleLink(e, item.page, history)}
                        className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-blue-100 hover:text-white hover:bg-blue-600"
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 text-blue-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-blue-700 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src={logo}
                onClick={() => history.push("/")}
                alt="Webwork logo"
              />
            </div>

            <AccountMenu
              avatar={currentUser?.data.avatarUrl}
              userName={currentUser?.data.fullName}
              email={currentUser?.data.email}
              history={history}
              handleSignOut={handleSignOut}
            />

            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-blue-800 overflow-y-auto scrollbar-hidden"
              aria-label="Sidebar"
            >
              <div className="space-y-1 divide-y divide-blue-800">
                <div className="px-2 mb-6">
                  {navigation.map((item) =>
                    !item.children ? (
                      <div key={item.name}>
                        <a
                          href="#"
                          onClick={(e) => handleLink(e, item.page, history)}
                          className={classNames(
                            item.current
                              ? "bg-blue-800 text-white"
                              : "text-blue-100 hover:text-white hover:bg-blue-600",
                            "group w-full flex items-center pl-2 py-2 text-sm font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? "text-blue-200" : "text-blue-200",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </div>
                    ) : (
                      <Disclosure
                        as="div"
                        key={item.name}
                        className="space-y-1"
                      >
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              onClick={(e) => handleLink(e, item.page, history)}
                              className={classNames(
                                item.current
                                  ? "bg-blue-800 text-white"
                                  : "text-blue-100 hover:text-white hover:bg-blue-600",
                                "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              )}
                            >
                              <item.icon
                                className="mr-3 flex-shrink-0 h-6 w-6 text-blue-200"
                                aria-hidden="true"
                              />
                              <span
                                className="flex-1"
                                onClick={(e) =>
                                  handleLink(e, item.page, history)
                                }
                              >
                                {item.name}
                              </span>
                              <svg
                                className={classNames(
                                  open
                                    ? "text-gray-400 rotate-90"
                                    : "text-gray-300",
                                  "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                )}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  d="M6 6L14 10L6 14V6Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel className="space-y-1">
                              {item.children.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={(e) =>
                                    handleLink(e, subItem.page, history)
                                  }
                                  className="group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-white rounded-md hover:text-white hover:bg-blue-600"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    )
                  )}
                </div>
                <div className="px-2 mt-6 pt-6">
                  {/* Scorecards section for desktop */}
                  {scorecards ? (
                    scorecards.data.map((scorecard) => (
                      <>
                        <Disclosure
                          as="div"
                          key={scorecard.id}
                          className="space-y-1"
                        >
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={classNames(
                                  scorecard.id === props.scorecardId
                                    ? "bg-blue-800 text-white"
                                    : "text-blue-100 hover:text-white hover:bg-blue-600",
                                  "group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                )}
                              >
                                <ChartPieIcon
                                  className="mr-3 flex-shrink-0 h-6 w-6 text-blue-200"
                                  aria-hidden="true"
                                />
                                <span
                                  onClick={(e) =>
                                    handleLink(e, `/${scorecard.id}`, history)
                                  }
                                  className="flex-1"
                                >
                                  {scorecard.name}
                                </span>
                                <svg
                                  className={classNames(
                                    open
                                      ? "text-gray-400 rotate-90"
                                      : "text-gray-300",
                                    "ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"
                                  )}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M6 6L14 10L6 14V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </Disclosure.Button>

                              <Disclosure.Panel className="space-y-1">
                                {scorecard.perspectives.map((perspective) => (
                                  <>
                                    <a
                                      onClick={(e) =>
                                        handleLink(
                                          e,
                                          `/${scorecard.id}/${perspective.id}`,
                                          history
                                        )
                                      }
                                      className={classNames(
                                        perspective.id === props.perspectiveId
                                          ? "bg-blue-800 text-white"
                                          : "text-blue-100 hover:text-white hover:bg-blue-600",
                                        "group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium rounded-md hover:text-white hover:bg-blue-600 cursor-pointer"
                                      )}
                                    >
                                      {perspective.name}
                                    </a>
                                  </>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              {/* Secondary navigation for desktop */}
              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleLink(e, item.page, history)}
                      className={classNames(
                        item.current
                          ? "bg-blue-800 text-white"
                          : "text-blue-100 hover:text-white hover:bg-blue-600 hover:text-white hover:bg-blue-600",
                        "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-blue-100"
                      )}
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-blue-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
