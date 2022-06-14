import React from "react";
import { Fragment } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PlusSmIcon,
  ScaleIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import classNames from "../../utils/classNames";
import moment from "moment";
import { IPerspective } from "../../types/perspective";
import { IObjective } from "../../types/objective";
import { IMeasure } from "../../types/measure";
import { IScorecard } from "../../types/scorecard";
import { useHistory } from "react-router-dom";

interface IProps {
  noBottomBorder?: boolean;
  handlePrimaryButton?: () => void;
  handleSecondaryButton?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  heading?: string;
  scorecardId?: string;
  perspectiveId?: string;
  objectiveId?: string;
  measureId?: string;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scorecard?: IScorecard;
  perspective?: IPerspective;
  objective?: IObjective;
  measure?: IMeasure;
}

const PageHeading: React.FC<IProps> = ({
  noBottomBorder,
  handlePrimaryButton,
  handleSecondaryButton,
  primaryButtonText,
  secondaryButtonText,
  heading,
  scorecardId,
  perspectiveId,
  objectiveId,
  measureId,
  setDrawerOpen,
  scorecard,
  perspective,
  objective,
  measure,
}) => {
  const history = useHistory();
  return (
    // <div className="bg-white border-b border-gray-200">
    //   <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
    //     <div className="py-6 md:flex md:items-center md:justify-between">
    //       <div className="flex-1 min-w-0">
    //         {/* Profile */}
    //         <div className="flex items-center">
    //           {props.currentUser ? (
    //             <img
    //               className="hidden h-16 w-16 rounded-full sm:block"
    //               src={`http://localhost:5000/${props.currentUser?.data.avatarUrl}`}
    //               alt="avatar"
    //             />
    //           ) : (
    //             <div className="animate-pulse">
    //               <div class="hidden sm:block rounded-full bg-gray-200 h-16 w-16"></div>
    //             </div>
    //           )}

    //           <div>
    //             {/* Sm */}
    //             <div className="flex items-center">
    //               {props.currentUser ? (
    //                 <img
    //                   className="h-16 w-16 rounded-full sm:hidden"
    //                   src={`http://localhost:5000/${props.currentUser?.data.avatarUrl}`}
    //                   alt="avatar"
    //                 />
    //               ) : (
    //                 <div className="animate-pulse">
    //                   <div class="h-16 w-16 rounded-full bg-gray-200 sm:hidden"></div>
    //                 </div>
    //               )}
    //               {props.currentUser ? (
    //                 <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
    //                   {props.currentUser.data.fullName}
    //                 </h1>
    //               ) : (
    //                 <div className="animate-pulse flex-1">
    //                   <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate bg-gray-200 rounded">
    //                     ⠀
    //                   </h1>
    //                 </div>
    //               )}
    //             </div>
    //             <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
    //               <dt className="sr-only">Account status</dt>
    //               {props.currentUser ? (
    //                 <>
    //                   <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
    //                     <BadgeCheckIcon
    //                       className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
    //                       aria-hidden="true"
    //                     />
    //                     {props.currentUser.data.office}
    //                   </dd>
    //                   <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
    //                     <XCircleIcon
    //                       className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
    //                       aria-hidden="true"
    //                     />
    //                     {props.unverifiedText}
    //                   </dd>
    //                 </>
    //               ) : (
    //                 <>
    //                   <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize animate-pulse">
    //                     <div class="flex-shrink-0 mr-1.5 rounded-full bg-gray-200 h-5 w-5"></div>
    //                     <div className="bg-gray-200 rounded">
    //                       {"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}
    //                     </div>
    //                   </dd>
    //                   <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize animate-pulse">
    //                     <div class="flex-shrink-0 mr-1.5 rounded-full bg-gray-200 h-5 w-5"></div>
    //                     <div className="bg-gray-200 rounded">
    //                       {"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}
    //                     </div>
    //                   </dd>
    //                 </>
    //               )}
    //             </dl>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
    //         <button
    //           type="button"
    //           onClick={props.handleSecondaryButton}
    //           className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //         >
    //           {props.secondaryButtonText}
    //         </button>
    //         <button
    //           type="button"
    //           onClick={props.handlePrimaryButton}
    //           className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //         >
    //           {props.primaryButtonText}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div
      className={classNames(
        noBottomBorder ? "" : "border-b border-gray-200",
        "bg-white"
      )}
    >
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="py-6">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                {heading}
              </h2>
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                {scorecardId && !perspectiveId && !objectiveId && !measureId && (
                  <>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <ViewGridIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Thẻ điểm cân bằng
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <BriefcaseIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {scorecard?.type}
                    </div>
                    {/* <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CurrencyDollarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      
                    </div> */}
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CalendarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {moment(scorecard?.createDate).format("DD/MM/YYYY")}
                    </div>
                  </>
                )}
                {scorecardId && perspectiveId && !objectiveId && !measureId && (
                  <>
                    <div
                      className="mt-2 flex items-center text-sm text-gray-500 cursor-pointer hover:underline"
                      onClick={() => history.push(`/scorecards/${scorecardId}`)}
                    >
                      <ViewGridIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Khía cạnh của thẻ điểm
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <ScaleIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {perspective?.weight}%
                    </div>
                    {/* <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CurrencyDollarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      
                    </div> */}
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CalendarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {moment(perspective?.createDate).format("DD/MM/YYYY")}
                    </div>
                  </>
                )}
                {scorecardId && perspectiveId && objectiveId && !measureId && (
                  <>
                    <div
                      className="mt-2 flex items-center text-sm text-gray-500 cursor-pointer hover:underline"
                      onClick={() =>
                        history.push(
                          `/scorecards/${scorecardId}/perspectives/${perspectiveId}`
                        )
                      }
                    >
                      <ViewGridIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Mục tiêu của khía cạnh
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <ScaleIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {objective?.weight}%
                    </div>
                    {/* <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CurrencyDollarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      
                    </div> */}
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CalendarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {moment(objective?.createDate).format("DD/MM/YYYY")}
                    </div>
                  </>
                )}
                {scorecardId && perspectiveId && objectiveId && measureId && (
                  <>
                    <div
                      className="mt-2 flex items-center text-sm text-gray-500 cursor-pointer hover:underline"
                      onClick={() =>
                        history.push(
                          `/scorecards/${scorecardId}/perspectives/${perspectiveId}/objectives/${objectiveId}}`
                        )
                      }
                    >
                      <ViewGridIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      Chỉ số của mục tiêu
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <ScaleIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {measure?.weight}%
                    </div>
                    {/* <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CurrencyDollarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      
                    </div> */}
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CalendarIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {moment(measure?.createDate).format("DD/MM/YYYY")}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              {handleSecondaryButton && (
                <span className="hidden sm:block ml-3">
                  <button
                    type="button"
                    onClick={handleSecondaryButton}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <LinkIcon
                      className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                    {secondaryButtonText}
                  </button>
                </span>
              )}

              <span className="sm:ml-3">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <PlusSmIcon
                    className="-ml-1 mr-2 h-5 w-5"
                    aria-hidden="true"
                  />
                  {primaryButtonText}
                </button>
              </span>

              {/* Dropdown */}
              <Menu as="span" className="ml-3 relative sm:hidden">
                <Menu.Button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  More
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          View
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PageHeading;
