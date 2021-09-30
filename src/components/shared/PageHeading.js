import React from "react";
import { BadgeCheckIcon, XCircleIcon } from "@heroicons/react/solid";

export default function PageHeading(props) {
  return (
    <div className="bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            {/* Profile */}
            <div className="flex items-center">
              {props.currentUser ? (
                <img
                  className="hidden h-16 w-16 rounded-full sm:block"
                  src={`http://localhost:5000/${props.currentUser?.data.avatarUrl}`}
                  alt="avatar"
                />
              ) : (
                <div className="animate-pulse">
                  <div class="hidden sm:block rounded-full bg-gray-200 h-16 w-16"></div>
                </div>
              )}

              <div>
                {/* Sm */}
                <div className="flex items-center">
                  {props.currentUser ? (
                    <img
                      className="h-16 w-16 rounded-full sm:hidden"
                      src={`http://localhost:5000/${props.currentUser?.data.avatarUrl}`}
                      alt="avatar"
                    />
                  ) : (
                    <div className="animate-pulse">
                      <div class="h-16 w-16 rounded-full bg-gray-200 sm:hidden"></div>
                    </div>
                  )}
                  {props.currentUser ? (
                    <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                      {props.currentUser.data.fullName}
                    </h1>
                  ) : (
                    <div className="animate-pulse flex-1">
                      <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate bg-gray-200 rounded">
                        ⠀
                      </h1>
                    </div>
                  )}
                </div>
                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Account status</dt>
                  {props.currentUser ? (
                    <>
                      <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                        <BadgeCheckIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                          aria-hidden="true"
                        />
                        {props.currentUser.data.office}
                      </dd>
                      <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0">
                        <XCircleIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
                          aria-hidden="true"
                        />
                        {props.unverifiedText}
                      </dd>
                    </>
                  ) : (
                    <>
                      <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize animate-pulse">
                        <div class="flex-shrink-0 mr-1.5 rounded-full bg-gray-200 h-5 w-5"></div>
                        <div className="bg-gray-200 rounded">
                          {"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}
                        </div>
                      </dd>
                      <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize animate-pulse">
                        <div class="flex-shrink-0 mr-1.5 rounded-full bg-gray-200 h-5 w-5"></div>
                        <div className="bg-gray-200 rounded">
                          {"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}
                        </div>
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <button
              type="button"
              onClick={props.handleSecondaryButton}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {props.secondaryButtonText}
            </button>
            <button
              type="button"
              onClick={props.handlePrimaryButton}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {props.primaryButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
