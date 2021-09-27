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
import { PresentationChartLineIcon, StopIcon } from "@heroicons/react/outline";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

export default function Overview(props) {
  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="bg-white shadow rounded-lg">
              <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                Xu hướng hiệu suất
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
                Lịch sử hiệu suất
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
              Thông tin
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
                    Hiệu suất
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
                    <StopIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-sm font-medium text-gray-500 truncate cursor-pointer hover:text-gray-900">
                    Giá trị thực
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline">
                  <p className="text-xl font-semibold text-gray-900">
                    {props.kpis?.actualValue || "N/a"}
                  </p>
                  <p className="ml-2 flex items-baseline text-sm font-semibold text-gray-500">
                    {props.kpis?.weight}%
                  </p>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
