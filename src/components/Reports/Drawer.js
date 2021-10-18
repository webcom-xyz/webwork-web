import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { LinkIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

export default function Drawer(props) {
  return (
    <>
      {props.assignedKPIs
        ?.filter((kpi) => kpi.id == props.selectedKPIId)
        .map((kpi) => (
          <Transition.Root show={props.drawerOpen} as={Fragment}>
            <Dialog
              as="div"
              static
              className="fixed inset-0 overflow-hidden z-50"
              open={props.drawerOpen}
              onClose={props.setDrawerOpen}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

                <div className="fixed inset-y-0 pl-16 max-w-full right-0 flex">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <div className="w-screen max-w-md">
                      <form
                        className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl"
                        onSubmit={(e) => props.handleCreateKPIValue(e)}
                      >
                        <div className="flex-1 h-0 overflow-y-auto">
                          <div className="py-6 px-4 bg-blue-700 sm:px-6">
                            <div className="flex items-center justify-between">
                              <Dialog.Title className="text-lg font-medium text-white">
                                Chỉ số
                              </Dialog.Title>
                              <div className="ml-3 h-7 flex items-center">
                                <button
                                  type="button"
                                  className="bg-blue-700 rounded-md text-blue-200 hover:text-white focus:outline-none"
                                  onClick={() => props.setDrawerOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                            <div className="mt-1">
                              <p className="text-sm text-blue-300">
                                {props.newMeasureDescription}
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div className="px-4 divide-y divide-gray-200 sm:px-6">
                              <div className="space-y-6 pt-6 pb-5">
                                <div>
                                  <label
                                    htmlFor="project_name"
                                    className="block text-sm font-medium text-gray-900"
                                  >
                                    {props.measureNameText}
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      name="objectiveName"
                                      id="objectiveName"
                                      placeholder={kpi?.name}
                                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                      ref={props.name}
                                      onChange={props.handleChange}
                                      disabled
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-900"
                                  >
                                    {props.descriptionText}
                                  </label>
                                  <div className="mt-1">
                                    <textarea
                                      id="description"
                                      name="description"
                                      rows={4}
                                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                                      placeholder={kpi?.description}
                                      ref={props.description}
                                      onChange={props.handleChange}
                                      disabled
                                    />
                                  </div>
                                </div>
                                {/* <div>
                            <label
                              htmlFor="project_name"
                              className="block text-sm font-medium text-gray-900"
                            >
                              {props.weightText}
                            </label>
                            <div className="mt-1 relative">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">
                                  %
                                </span>
                              </div>
                              <input
                                type="text"
                                name="weight"
                                id="weight"
                                className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md pl-7"
                                placeholder="0.00"
                                ref={props.weight}
                                onChange={props.handleChange}
                              />
                            </div>
                          </div> */}
                                <div>
                                  <label
                                    htmlFor="project_name"
                                    className="block text-sm font-medium text-gray-900"
                                  >
                                    Giá trị
                                  </label>
                                  <div className="mt-1 relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                      {kpi?.dataType == "Tiền tệ"
                                        ? "$"
                                        : kpi?.dataType == "Phần trăm"
                                        ? "%"
                                        : "0"}
                                    </div>
                                    <input
                                      type="text"
                                      name="actualValue"
                                      id="actualValue"
                                      className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md pl-7"
                                      placeholder="0.00"
                                      ref={props.value}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                </div>
                                {/* <div>
                            <label
                              htmlFor="project_name"
                              className="block text-sm font-medium text-gray-900"
                            >
                              {props.redText}
                            </label>
                            <div className="mt-1 relative">
                              <input
                                type="text"
                                name="weight"
                                id="weight"
                                className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                placeholder="0.00"
                                ref={props.red}
                                onChange={props.handleChange}
                              />
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor="project_name"
                              className="block text-sm font-medium text-gray-900"
                            >
                              {props.goalText}
                            </label>
                            <div className="mt-1 relative">
                              <input
                                type="text"
                                name="weight"
                                id="weight"
                                className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                placeholder="0.00"
                                ref={props.goal}
                                onChange={props.handleChange}
                              />
                            </div>
                          </div> */}
                                {/* <div>
                            <label
                              htmlFor="location"
                              className="block text-sm font-medium text-gray-900"
                            >
                              {props.dataTypeText}
                            </label>
                            <select
                              id="dataType"
                              name="dataType"
                              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                              ref={props.dataType}
                              onChange={props.handleChange}
                            >
                              <option>Số liệu</option>
                              <option>Tiền tệ</option>
                              <option>Phần trăm</option>
                            </select>
                          </div> */}
                                {/* <div>
                            <label
                              htmlFor="location"
                              className="block text-sm font-medium text-gray-900"
                            >
                              {props.calendarText}
                            </label>
                            <select
                              id="calendar"
                              name="calendar"
                              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                              ref={props.calendar}
                              onChange={props.handleChange}
                            >
                              <option>Tháng</option>
                              <option>Quý</option>
                              <option>Năm</option>
                            </select>
                          </div> */}
                              </div>
                              <div className="pt-4 pb-6">
                                <div className="flex text-sm">
                                  <a
                                    href="#"
                                    className="group inline-flex items-center font-medium text-blue-600 hover:text-blue-900"
                                  >
                                    <LinkIcon
                                      className="h-5 w-5 text-blue-500 group-hover:text-blue-900"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2">
                                      {props.copyIdText}
                                    </span>
                                  </a>
                                </div>
                                <div className="mt-4 flex text-sm">
                                  <a
                                    href="#"
                                    className="group inline-flex items-center text-gray-500 hover:text-gray-900"
                                  >
                                    <QuestionMarkCircleIcon
                                      className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2">
                                      {props.moreAboutMeasuresText}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-shrink-0 px-4 py-4 flex justify-end">
                          <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            onClick={() => props.setDrawerOpen(false)}
                          >
                            {props.cancelText}
                          </button>
                          <button
                            type="submit"
                            className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Cập nhật
                          </button>
                        </div>
                      </form>
                    </div>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        ))}
    </>
  );
}
