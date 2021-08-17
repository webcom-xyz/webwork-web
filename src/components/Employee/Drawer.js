import { Fragment, useState, useRef } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { createNewKPI } from "../../actions/objective";
import { useParams } from "react-router-dom";
import classNames from "../../utils/classNames";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const team = [
  {
    name: "Tom Cook",
    email: "tomcook@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Whitney Francis",
    email: "whitneyfrancis@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Leonard Krasner",
    email: "leonardkrasner@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Floyd Miles",
    email: "floydmiles@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Emily Selman",
    email: "emilyselman@example.com",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const people = [
  { id: 1, name: "Cấp C" },
  { id: 2, name: "Quản lý" },
  { id: 3, name: "Nhân viên" }
];

export default function Drawer(props) {
  const objectiveNameRef = useRef("");
  const weightRef = useRef("");
  const { perspectiveId } = useParams();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(people[0]);
  const [objective, setObjective] = useState({});

  const handleChange = (e) => {
    setObjective({
      ...objective,
      name: objectiveNameRef.current.value,
      weight: weightRef.current.value,
      perspectiveId: perspectiveId,
    });
  };

//   const handleCreateNewObjective = (e) => {
//     e.preventDefault();

//     try {
//       dispatch(createNewObjective(objective));
//     } catch (error) {
//       console.log(error);
//     }
//   };

  return (
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
                //   onSubmit={handleCreateNewObjective}
                >
                  <div className="flex-1 h-0 overflow-y-auto">
                    <div className="py-6 px-4 bg-blue-700 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          Nhân viên mới
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-blue-700 rounded-md text-blue-200 hover:text-white focus:outline-none"
                            onClick={() => props.setDrawerOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-blue-300">
                          Bắt đầu bằng cách điền những thông tin phù hợp vào để
                          thêm nhân viên mới.
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
                              Email
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="objectiveName"
                                id="objectiveName"
                                placeholder="..."
                                className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                ref={objectiveNameRef}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div>
                          <Listbox value={selected} onChange={setSelected}>
                              {({ open }) => (
                                <>
                                  <Listbox.Label className="block text-sm font-medium text-gray-900">
                                    Quyền hạn
                                  </Listbox.Label>
                                  <div className="mt-1 relative">
                                    <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                      <span className="block truncate">
                                        {selected.name}
                                      </span>
                                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon
                                          className="h-5 w-5 text-gray-400"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    </Listbox.Button>

                                    <Transition
                                      show={open}
                                      as={Fragment}
                                      leave="transition ease-in duration-100"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Listbox.Options
                                        static
                                        className="absolute z-10 mt-1 w-full bg-white shadow max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                                      >
                                        {people.map((person) => (
                                          <Listbox.Option
                                            key={person.id}
                                            className={({ active }) =>
                                              classNames(
                                                active
                                                  ? "text-white bg-indigo-600"
                                                  : "text-gray-900",
                                                "cursor-default select-none relative py-2 pl-3 pr-9"
                                              )
                                            }
                                            value={person}
                                          >
                                            {({ selected, active }) => (
                                              <>
                                                <span
                                                  className={classNames(
                                                    selected
                                                      ? "font-semibold"
                                                      : "font-normal",
                                                    "block truncate"
                                                  )}
                                                >
                                                  {person.name}
                                                </span>

                                                {selected ? (
                                                  <span
                                                    className={classNames(
                                                      active
                                                        ? "text-white"
                                                        : "text-indigo-600",
                                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                                    )}
                                                  >
                                                    <CheckIcon
                                                      className="h-5 w-5"
                                                      aria-hidden="true"
                                                    />
                                                  </span>
                                                ) : null}
                                              </>
                                            )}
                                          </Listbox.Option>
                                        ))}
                                      </Listbox.Options>
                                    </Transition>
                                  </div>
                                </>
                              )}
                            </Listbox>
                            {/* <label
                              htmlFor="description"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Chức vụ
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="description"
                                name="description"
                                rows={4}
                                className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                                placeholder="..."
                              />
                            </div> */}
                          </div>
                          {/* <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              Nhân viên
                            </h3>
                            <div className="mt-2">
                              <div className="flex space-x-2">
                                {team.map((person) => (
                                  <a
                                    key={person.email}
                                    href={person.href}
                                    className="rounded-full hover:opacity-75"
                                  >
                                    <img
                                      className="inline-block h-8 w-8 rounded-full"
                                      src={person.imageUrl}
                                      alt={person.name}
                                    />
                                  </a>
                                ))}
                                <button
                                  type="button"
                                  className="flex-shrink-0 bg-white inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 text-gray-400 hover:text-gray-500 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                  <span className="sr-only">
                                    Add team member
                                  </span>
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
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
                              <span className="ml-2">Sao chép URL</span>
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
                                Tìm hiểu thêm về quyền hạn
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
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Thêm nhân viên
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
