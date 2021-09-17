import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HeartIcon, XIcon } from "@heroicons/react/outline";
import { PencilIcon, PlusSmIcon } from "@heroicons/react/solid";
import moment from "moment";

export default function DetailsDrawer(props) {
  return (
    <Transition.Root show={props.detailsOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden"
        onClose={props.setDetailsOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
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
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title>
                        <h2 className="text-lg font-medium text-gray-900">
                          <span className="sr-only">Details for </span>
                          Thông tin
                        </h2>
                        <p className="text-sm font-medium text-gray-500">
                          {props.subheader}
                        </p>
                      </Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={() => props.setDetailsOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6 space-y-6">
                    {/* Replace with your content */}
                    {/* <div className="absolute inset-0 px-4 sm:px-6">
                      <div
                        className="h-full border-2 border-dashed border-gray-200"
                        aria-hidden="true"
                      />
                    </div> */}
                    {/* /End replace */}
                    <h3 className="font-medium text-gray-900">Chi tiết</h3>
                    <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
                      <div className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">Tên</dt>
                        <dd className="text-gray-900">{props.target?.name}</dd>
                      </div>
                      <div className="py-3 flex justify-between text-sm font-medium">
                        <dt className="text-gray-500">Khởi tạo</dt>
                        <dd className="text-gray-900">
                          {moment(props.target?.createDate).format(
                            "DD/MM/YYYY"
                          )}
                        </dd>
                      </div>
                      {props.subheader === "Thẻ điểm" && (
                        <div className="py-3 flex justify-between text-sm font-medium">
                          <dt className="text-gray-500">Loại</dt>
                          <dd className="text-gray-900">
                            {props.target?.type}
                          </dd>
                        </div>
                      )}
                      {props.subheader === "Khía cạnh" && (
                        <div className="py-3 flex justify-between text-sm font-medium">
                          <dt className="text-gray-500">Mục tiêu</dt>
                          <dd className="text-gray-900">
                            {props.target?.objectives.length}
                          </dd>
                        </div>
                      )}
                    </dl>

                    <div>
                      <h3 className="font-medium text-gray-900">Mô tả</h3>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm text-gray-500 italic">
                          {props.target?.description || "Không có mô tả"}
                        </p>
                        {/* <button
                          type="button"
                          className="-mr-2 h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <PencilIcon className="h-5 w-5" aria-hidden="true" />
                          <span className="sr-only">Add description</span>
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
