import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
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
} from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

export default function Overview(props) {
  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="bg-white shadow rounded-lg">
              <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                {props.performanceTrendText}
              </h3>
              <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                corrupti consectetur.
              </p>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart
                  width={500}
                  height={250}
                  className="border-t border-gray-200 overflow-hidden"
                  data={props.data1}
                  margin={{
                    top: 20,
                    right: 20,
                    left: -20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#FBBF24"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white shadow rounded-lg mt-8">
              <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                {props.historicalPerformancesText}
              </h3>
              <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                corrupti consectetur.
              </p>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  width={500}
                  height={300}
                  className="border-t border-gray-200 overflow-hidden"
                  data={props.data}
                  margin={{
                    top: 20,
                    right: 20,
                    left: -20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#E5E7EB"
                    strokeWidth={3}
                    dot={{ stroke: "#FBBF24", strokeWidth: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4 ml-4">
              {props.perspectivesOverviewText}
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
                  <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                    {props.performanceText}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p className="text-xl font-semibold text-gray-900">N/a%</p>
                  <p
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
                    N/a%
                  </p>
                </dd>
              </div>

              <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                <dt>
                  <div className="absolute bg-yellow-500 rounded-md p-3">
                    <ChipIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                    {props.anomalyText}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p
                    className={classNames(
                      props.changeType === "increase"
                        ? "text-gray-700"
                        : "text-gray-700",
                      "flex items-baseline text-sm font-semibold"
                    )}
                  >
                    {props.anomalyDescription}
                  </p>
                </dd>
              </div>

              <div className="relative bg-white pt-5 px-4 sm:pt-6 sm:px-6 overflow-hidden">
                <dt>
                  <div className="absolute bg-yellow-500 rounded-md p-3">
                    <ChipIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                    {props.changepointText}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p
                    className={classNames(
                      props.changeType === "increase"
                        ? "text-gray-700"
                        : "text-gray-700",
                      "flex items-baseline text-sm font-semibold"
                    )}
                  >
                    {props.changepointDescription}
                  </p>
                </dd>
              </div>

              {props.perspectives ? (
                props.perspectives.map((perspective) => (
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
                        className="ml-16 text-sm font-medium text-gray-500 truncate hover:text-gray-900 cursor-pointer"
                        onClick={() =>
                          props.history.push(
                            `/${props.scorecardId}/${perspective.id}`
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
                        N/a%
                      </p>
                    </dd>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
