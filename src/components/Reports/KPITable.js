import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  DotsVerticalIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/solid";
import classNames from "../../utils/classNames";
import moment from "moment";

export default function KPITable(props) {
  return (
    <div className="align-middle inline-block min-w-full border-b border-gray-200">
      <table className="min-w-full">
        <thead>
          <tr className="border-t border-gray-200">
            <th className="px-6 py-3 whitespace-nowrap border-b border-gray-200 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <span className="lg:pl-2">{props.measureText}</span>
            </th>
            <th className="hidden md:table-cell whitespace-nowrap px-6 py-3 border-b border-gray-200 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {props.valueText}
            </th>
            <th className="hidden md:table-cell whitespace-nowrap px-6 py-3 border-b border-gray-200 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {props.periodText}
            </th>
            <th className="hidden md:table-cell whitespace-nowrap px-6 py-3 border-b border-gray-200 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {props.thresholdsText}
            </th>
            <th className="pr-6 py-3 border-b whitespace-nowrap border-gray-200 bg-white text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {props.assignedKPIs ? (
            props.assignedKPIs.map((kpi) => (
              <tr key={kpi?.id}>
                <td className="px-6 py-3 max-w-0 w-full whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="flex items-center space-x-3 lg:pl-2">
                    <div
                      className={classNames(
                        kpi?.actualValue < kpi?.goal &&
                          kpi?.actualValue > kpi?.red
                          ? "bg-yellow-400"
                          : kpi?.actualValue < kpi?.red
                          ? "bg-red-400"
                          : "bg-green-400",
                        "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                      )}
                      aria-hidden="true"
                    />

                    <a href="#" className="truncate hover:text-gray-600">
                      <span>
                        {kpi?.name}{" "}
                        <span className="text-gray-500 font-normal">
                          của N/a
                        </span>
                      </span>
                    </a>
                  </div>
                </td>

                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                  {kpi?.actualValue}
                </td>
                <td className="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left">
                  {kpi?.calendar} {moment(moment().toDate()).format("MM, YYYY")}
                </td>
                <td className="px-6 py-3 text-sm text-gray-500 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      {kpi?.red}
                    </div>
                    <div className="flex flex-shrink-0 -space-x-1">
                      {kpi?.goal}
                    </div>
                  </div>
                </td>
                <td className="pr-6">
                  <Menu
                    as="div"
                    className="relative flex justify-end items-center"
                  >
                    <Menu.Button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      <span className="sr-only">Open options</span>
                      <DotsVerticalIcon
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="mx-3 origin-top-right absolute right-7 top-0 w-48 mt-1 rounded-md shadow z-10 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                onClick={() => {
                                  props.setDrawerOpen(true);
                                  props.setSelectedKPIId(kpi?.id);
                                }}
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "group flex items-center px-4 py-2 text-sm cursor-pointer"
                                )}
                              >
                                <PencilAltIcon
                                  className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                Cập nhật
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "group flex items-center px-4 py-2 text-sm"
                                )}
                              >
                                <TrashIcon
                                  className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                Xóa
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}
