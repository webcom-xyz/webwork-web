import React from "react";
import {
  ExclamationIcon,
  AtSymbolIcon,
  CloudDownloadIcon,
  CogIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/solid";

export default function PageHeading(props) {
  return (
    <div className="bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            {/* Profile */}
            {/* <div className="flex items-center"></div>
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    Thẻ điểm: _
                  </h1>

                  <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                    <dt className="sr-only">Account status</dt>
                    <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                      {scorecardId}
                    </dd>
                  </dl> */}

            {/* Profile */}
            <div className="flex items-center">
              <div>
                <div className="flex items-center">
                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    {props.pageTitle}
                  </h1>
                </div>
                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Account status</dt>
                  <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                    {props.pageSubtitle}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <button
              onClick={() => props.setDrawerOpen(true)}
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <span className="sr-only">View notifications</span>
              <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              <span className="sr-only">View notifications</span>
              <ExclamationIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              onClick={() => props.setDetailsOpen(true)}
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <span className="sr-only">View notifications</span>
              <InformationCircleIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              <span className="sr-only">View notifications</span>
              <AtSymbolIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            {props.pageSubtitle === props.scorecardId && (
              <button
                onClick={() =>
                  props.history.push(`/${props.scorecardId}/settings`)
                }
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span className="sr-only">View notifications</span>
                <CogIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}

            {props.pageSubtitle === props.perspectiveId && (
              <button
                onClick={() =>
                  props.history.push(
                    `/${props.scorecardId}/${props.perspectiveId}/settings`
                  )
                }
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span className="sr-only">View notifications</span>
                <CogIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}

            {props.pageSubtitle === props.objectiveId && (
              <button
                onClick={() =>
                  props.history.push(
                    `/${props.scorecardId}/${props.perspectiveId}/${props.objectiveId}/settings`
                  )
                }
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span className="sr-only">View notifications</span>
                <CogIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}

            {props.pageSubtitle === props.kpiId && (
              <button
                onClick={() =>
                  props.history.push(
                    `/${props.scorecardId}/${props.perspectiveId}/${props.objectiveId}/${props.kpiId}/settings`
                  )
                }
                className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <span className="sr-only">View notifications</span>
                <CogIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            )}

            <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
              <span className="sr-only">View notifications</span>
              <CloudDownloadIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
