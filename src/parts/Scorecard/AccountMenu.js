import { Fragment } from "react";
import { Transition, Menu } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";
import classNames from "../../utils/classNames";

export default function AccountMenu(props) {
  return (
    <Menu as="div" className="px-3 mt-6 relative inline-block text-left">
      <div>
        <Menu.Button className="group w-full bg-blue-700 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
          <span className="flex w-full justify-between items-center">
            <span className="flex min-w-0 items-center justify-between space-x-3">
              <img
                className="w-10 h-10 bg-blue-300 rounded-full flex-shrink-0"
                src={`http://localhost:3000/${props.avatar}`}
                alt=""
              />
              <span className="flex-1 flex flex-col min-w-0">
                <span className="text-blue-50 text-sm font-medium truncate">
                  {props.userName}
                </span>
                <span className="text-blue-100 text-sm truncate">
                  @mention
                </span>
              </span>
            </span>
            <SelectorIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Hồ sơ & Tài khoản
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Cài đặt
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Thông báo
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
                    active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Đăng xuất
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
