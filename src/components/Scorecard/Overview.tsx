import React from "react";
import classNames from "../../utils/classNames";
import {
  UsersIcon,
  PresentationChartLineIcon,
  CashIcon,
  OfficeBuildingIcon,
  AcademicCapIcon,
  ChipIcon,
  UserIcon,
  UserGroupIcon,
  StopIcon,
} from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";
import { ResponsiveLine } from "@nivo/line";
import { data, data1 } from "../../utils/data";

const dataJ = [
  {
    id: "japan",
    color: "hsl(353, 70%, 50%)",
    data: [
      {
        x: "Tháng 01",
        y: 90,
      },
      {
        x: "Tháng 02",
        y: 80,
      },
      {
        x: "Tháng 03",
        y: 70,
      },
      {
        x: "Tháng 04",
        y: 60,
      },
      {
        x: "Tháng 05",
        y: 70,
      },
      {
        x: "Tháng 06",
        y: 95,
      },
      {
        x: "Tháng 07",
        y: 90,
      },
      {
        x: "Tháng 08",
        y: 100,
      },
      {
        x: "Tháng 09",
        y: 90,
      },
      {
        x: "Tháng 10",
        y: 90,
      },
      {
        x: "Tháng 11",
        y: 90,
      },
      {
        x: "Tháng 12",
        y: 90,
      },
    ],
  },
];

interface IProps {
  performanceTrendText?: string;
  historicalPerformancesText?: string;
  perspectivesOverviewText?: string;
  performanceText?: string;
  changeType?: string;
  anomalyText?: string;
  anomalyDescription?: string;
  changepointText?: string;
  changepointDescription?: string;
  perspectives?: any;
  history?: any;
  scorecardId?: string;
  perspectiveId?: string;
  objectiveId?: string;
  measureId?: string;
  objectives?: any;
  measures?: any;
}

const Overview: React.FC<IProps> = ({
  performanceText,
  anomalyDescription,
  anomalyText,
  changeType,
  changepointDescription,
  changepointText,
  historicalPerformancesText,
  history,
  performanceTrendText,
  perspectives,
  perspectivesOverviewText,
  scorecardId,
  objectiveId,
  perspectiveId,
  objectives,
  measures,
  measureId,
}) => {
  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="bg-white shadow-sm rounded-md border border-gray-300">
              <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                {performanceTrendText}
              </h3>
              <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                corrupti consectetur.
              </p>
              <div className="h-48">
                <ResponsiveLine
                  data={dataJ}
                  margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
                  xScale={{ type: "point" }}
                  yScale={{
                    type: "linear",
                    min: 0,
                    max: 100,
                    stacked: false,
                    reverse: false,
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={null}
                  axisLeft={null}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: "serieColor" }}
                  enablePointLabel={true}
                  pointLabelYOffset={-12}
                  enableArea={true}
                  enableCrosshair={true}
                  useMesh={true}
                  legends={[]}
                  enableGridX={false}
                  enableGridY={false}
                />
              </div>
            </div>
            <div className="bg-white shadow-sm rounded-md mt-8 border border-gray-300">
              <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                {historicalPerformancesText}
              </h3>
              <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                corrupti consectetur.
              </p>
              <div className="h-48">
                <ResponsiveLine
                  data={dataJ}
                  margin={{ top: 25, right: 25, bottom: 25, left: 25 }}
                  xScale={{ type: "point" }}
                  yScale={{
                    type: "linear",
                    min: 0,
                    max: 100,
                    stacked: false,
                    reverse: false,
                  }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={null}
                  axisLeft={null}
                  pointSize={10}
                  pointColor={{ theme: "background" }}
                  pointBorderWidth={2}
                  pointBorderColor={{ from: "serieColor" }}
                  enablePointLabel={true}
                  pointLabelYOffset={-12}
                  enableArea={true}
                  enableCrosshair={true}
                  useMesh={true}
                  legends={[]}
                  enableGridX={false}
                  enableGridY={false}
                />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded-md border border-gray-300">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4 ml-4">
              {perspectivesOverviewText}
            </h3>
            <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam
              corrupti consectetur.
            </p>
            <div className="overflow-hidden pb-6 sm:pb-7 border-t border-gray-200">
              <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                <dt>
                  <div className="absolute bg-green-500 rounded-md p-3">
                    <PresentationChartLineIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-sm text-gray-500 truncate">
                    {performanceText}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p className="text-xl font-semibold text-gray-900">N/a%</p>
                  <p
                    className={classNames(
                      changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600",
                      "ml-2 flex items-baseline text-sm font-semibold"
                    )}
                  >
                    {changeType === "increase" ? (
                      <ArrowSmUpIcon
                        className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowSmDownIcon
                        className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    )}
                    <span className="sr-only">
                      {changeType === "increase" ? "Increased" : "Decreased"} by
                    </span>
                    N/a%
                  </p>
                </dd>
              </div>

              <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                <dt>
                  <div className="absolute bg-blue-500 rounded-md p-3">
                    <ChipIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-sm text-gray-500 truncate">
                    {anomalyText}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p
                    className={classNames(
                      changeType === "increase"
                        ? "text-gray-500"
                        : "text-gray-500",
                      "flex items-baseline text-sm font-semibold"
                    )}
                  >
                    {anomalyDescription}
                  </p>
                </dd>
              </div>

              <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                <dt>
                  <div className="absolute bg-blue-500 rounded-md p-3">
                    <ChipIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-sm text-gray-500 truncate">
                    {changepointText}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p
                    className={classNames(
                      changeType === "increase"
                        ? "text-gray-500"
                        : "text-gray-500",
                      "flex items-baseline text-sm font-semibold"
                    )}
                  >
                    {changepointDescription}
                  </p>
                </dd>
              </div>
              {scorecardId &&
                !perspectiveId &&
                !objectiveId &&
                !measureId &&
                perspectives?.map((perspective: any) => (
                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                    <dt>
                      <div className="absolute bg-green-500 rounded-md p-3">
                        {perspective.name === "Khách hàng" ? (
                          <UserGroupIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        ) : perspective.name === "Tài chính" ? (
                          <CashIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        ) : perspective.name === "Quá trình nội bộ" ? (
                          <OfficeBuildingIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        ) : perspective.name === "Học hỏi và phát triển" ? (
                          <AcademicCapIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                      <p
                        className="ml-16 text-sm text-gray-500 truncate hover:text-gray-900 cursor-pointer"
                        onClick={() =>
                          history.push(
                            `/scorecards/${scorecardId}/perspectives/${perspective.id}`
                          )
                        }
                      >
                        {perspective.name}
                      </p>
                    </dt>
                    <dd className="ml-16 flex items-baseline">
                      <p className="text-xl font-semibold text-gray-900">
                        N/a%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-gray-500">
                        {perspective.weight}%
                      </p>
                      <p
                        className={classNames(
                          changeType === "increase"
                            ? "text-green-600"
                            : "text-red-600",
                          "ml-2 flex items-baseline text-sm font-semibold"
                        )}
                      >
                        {changeType === "increase" ? (
                          <ArrowSmUpIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ArrowSmDownIcon
                            className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                            aria-hidden="true"
                          />
                        )}
                        <span className="sr-only">
                          {changeType === "increase"
                            ? "Increased"
                            : "Decreased"}{" "}
                          by
                        </span>
                        N/a%
                      </p>
                    </dd>
                  </div>
                ))}
              {scorecardId &&
                perspectiveId &&
                !objectiveId &&
                !measureId &&
                objectives?.map((objective: any) => (
                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                    <dt>
                      <div className="absolute bg-green-500 rounded-md p-3">
                        <StopIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <p
                        className="ml-16 text-sm font-medium text-gray-500 truncate cursor-pointer hover:text-gray-900"
                        onClick={() =>
                          history.push(
                            `/scorecards/${scorecardId}/perspectives/${perspectiveId}/objectives/${objective.id}`
                          )
                        }
                      >
                        {objective.name}
                      </p>
                    </dt>
                    <dd className="ml-16 flex items-baseline">
                      <p className="text-xl font-semibold text-gray-900">
                        N/a%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-gray-500">
                        {objective.weight}%
                      </p>
                      {/* <p
                      className={classNames(
                        props.changeType === "increase"
                          ? "text-green-600"
                          : "text-red-600",
                        "ml-2 flex items-baseline text-sm font-semibold"
                      )}
                    >
                      {props.changeType === "increase" ? (
                        <ArrowSmUpIcon
                          className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowSmDownIcon
                          className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      )}
                      <span className="sr-only">
                        {props.changeType === "increase"
                          ? "Increased"
                          : "Decreased"}{" "}
                        by
                      </span>
                      25%
                    </p> */}
                    </dd>
                  </div>
                ))}

              {scorecardId &&
                perspectiveId &&
                objectiveId &&
                !measureId &&
                measures?.map((measure: any) => (
                  <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                    <dt>
                      <div className="absolute bg-green-500 rounded-md p-3">
                        <StopIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <p
                        className="ml-16 text-sm font-medium text-gray-500 truncate cursor-pointer hover:text-gray-900"
                        onClick={() =>
                          history.push(
                            `/scorecards/${scorecardId}/perspectives/${perspectiveId}/objectives/${objectiveId}/measures/${measure.id}`
                          )
                        }
                      >
                        {measure.name}
                      </p>
                    </dt>
                    <dd className="ml-16 flex items-baseline">
                      <p className="text-xl font-semibold text-gray-900">
                        N/a%
                      </p>
                      <p className="ml-2 flex items-baseline text-sm font-semibold text-gray-500">
                        {measure.weight}%
                      </p>
                      {/* <p
                      className={classNames(
                        props.changeType === "increase"
                          ? "text-green-600"
                          : "text-red-600",
                        "ml-2 flex items-baseline text-sm font-semibold"
                      )}
                    >
                      {props.changeType === "increase" ? (
                        <ArrowSmUpIcon
                          className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowSmDownIcon
                          className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      )}
                      <span className="sr-only">
                        {props.changeType === "increase"
                          ? "Increased"
                          : "Decreased"}{" "}
                        by
                      </span>
                      25%
                    </p> */}
                    </dd>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overview;
