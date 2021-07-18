import React, { useState, Fragment, useEffect } from "react";
import { MenuAlt1Icon, BellIcon } from "@heroicons/react/outline";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import classNames from "../../utils/classNames";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../actions/user";
import { signOut } from "../../actions/auth";
import handleLink from "../../utils/handleLink";

export default function Topbar(props) {
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = (e) => {
    e.preventDefault();

    try {
      dispatch(signOut(history));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div
      className={`relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 ${props.shadow}`}
    >
      <button
        className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
        onClick={() => props.setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      {/* Search bar */}
      <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="flex-1 flex">
          <form className="w-full flex md:ml-0" action="#" method="GET">
            <label htmlFor="search_field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div
                className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                aria-hidden="true"
              >
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search_field"
                name="search_field"
                className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="ml-3 relative">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                    {currentUser ? (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={`http://localhost:3000/${currentUser?.data.avatarUrl}`}
                        alt="avatar"
                      />
                    ) : (
                      <div className="animate-pulse flex-1">
                        <div class="rounded-full bg-gray-200 h-8 w-8"></div>
                      </div>
                    )}
                    {currentUser ? (
                      <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                        <span className="sr-only">Open user menu for </span>
                        {currentUser.data.fullName}
                      </span>
                    ) : (
                      <div className="animate-pulse flex-1">
                        <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                          <span className="sr-only">Open user menu for </span>
                          <span className="bg-gray-200 rounded w-auto">
                            {"⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}
                          </span>
                        </span>
                      </div>
                    )}

                    <ChevronDownIcon
                      className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={(e) => handleLink(e, "/account", history)}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          )}
                        >
                          Profile & Account
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
                          Settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          onClick={handleSignOut}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Logout
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
