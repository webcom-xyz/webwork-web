import { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import {
  LinkIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { createNewWorkspace } from "../../actions/workspace";
import { useDispatch } from "react-redux";

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

export default function Drawer(props) {
  const workspaceName = useRef("");
  const workspaceTeam = useRef("");
  const workspaceDepartment = useRef("");

  const dispatch = useDispatch();

  const [workspaceData, setWorkspaceData] = useState({
    name: "",
    team: "Remote",
    department: "Design",
  });

  const handleChange = (e) => {
    setWorkspaceData({ ...workspaceData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(createNewWorkspace(workspaceData));
      console.log(workspaceData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition.Root show={props.slideoverOpen} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden z-50"
        open={props.slideoverOpen}
        onClose={props.setSlideoverOpen}
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
                  onSubmit={handleSubmit}
                >
                  <div className="flex-1 h-0 overflow-y-auto">
                    <div className="py-6 px-4 bg-blue-700 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          New workspace
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            type="button"
                            className="bg-blue-700 rounded-md text-blue-200 hover:text-white focus:outline-none"
                            onClick={() => props.setSlideoverOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-blue-300">
                          Get started by filling in the information below to
                          create your new workspace.
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
                              Workspace name
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="name"
                                id="project_name"
                                className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                                ref={workspaceName}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          {/* <div>
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium text-gray-900"
                            >
                              Description
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="description"
                                name="description"
                                rows={4}
                                className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md"
                                defaultValue={""}
                              />
                            </div>
                          </div> */}
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              Employees
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
                          </div>
                          <fieldset>
                            <legend className="text-sm font-medium text-gray-900">
                              Security
                            </legend>
                            <div className="mt-2 space-y-5">
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-5">
                                  <input
                                    id="privacy_public"
                                    name="privacy"
                                    aria-describedby="privacy_public_description"
                                    type="radio"
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                    defaultChecked
                                  />
                                </div>
                                <div className="pl-7 text-sm">
                                  <label
                                    htmlFor="privacy_public"
                                    className="font-medium text-gray-900"
                                  >
                                    Public access
                                  </label>
                                  <p
                                    id="privacy_public_description"
                                    className="text-gray-500"
                                  >
                                    Everyone with the ID can join this
                                    workspace.
                                  </p>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id="privacy_private-to-project"
                                      name="privacy"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="font-medium text-gray-900"
                                    >
                                      Private to employees
                                    </label>
                                    <p
                                      id="privacy_private-to-project_description"
                                      className="text-gray-500"
                                    >
                                      Only employees in this workspace would be
                                      able to access.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>

                          <fieldset>
                            <legend className="text-sm font-medium text-gray-900">
                              Team
                            </legend>
                            <div className="mt-2 space-y-5">
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-5">
                                  <input
                                    id=""
                                    name="team"
                                    aria-describedby="privacy_public_description"
                                    type="radio"
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                    value="Remote"
                                    ref={workspaceTeam}
                                    onChange={handleChange}
                                    defaultChecked
                                  />
                                </div>
                                <div className="pl-7 text-sm">
                                  <label
                                    htmlFor="privacy_public"
                                    className="text-gray-900"
                                  >
                                    Remote
                                  </label>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id=""
                                      name="team"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                      value="Work-from-home"
                                      ref={workspaceTeam}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="text-gray-900"
                                    >
                                      Work-from-home
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id=""
                                      name="team"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                      value="In-office"
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="text-gray-900"
                                    >
                                      In-office
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>

                          <fieldset>
                            <legend className="text-sm font-medium text-gray-900">
                              Department
                            </legend>
                            <div className="mt-2 space-y-5">
                              <div className="relative flex items-start">
                                <div className="absolute flex items-center h-5">
                                  <input
                                    id=""
                                    name="department"
                                    aria-describedby="privacy_public_description"
                                    type="radio"
                                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                    value="Design"
                                    ref={workspaceDepartment}
                                    onChange={handleChange}
                                    defaultChecked
                                  />
                                </div>
                                <div className="pl-7 text-sm">
                                  <label
                                    htmlFor="privacy_public"
                                    className="text-gray-900"
                                  >
                                    Design
                                  </label>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id=""
                                      name="department"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                      value="Engineering"
                                      ref={workspaceDepartment}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="text-gray-900"
                                    >
                                      Engineering
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id=""
                                      name="department"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                      value="Human resources"
                                      ref={workspaceDepartment}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="text-gray-900"
                                    >
                                      Human resources
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id=""
                                      name="department"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                      value="Marketing"
                                      ref={workspaceDepartment}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="text-gray-900"
                                    >
                                      Marketing
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id=""
                                      name="department"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                      value="Product management"
                                      ref={workspaceDepartment}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="text-gray-900"
                                    >
                                      Product management
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id=""
                                      name="department"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                      value="Sales"
                                      ref={workspaceDepartment}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="text-gray-900"
                                    >
                                      Sales
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="relative flex items-start">
                                  <div className="absolute flex items-center h-5">
                                    <input
                                      id=""
                                      name="department"
                                      aria-describedby="privacy_private-to-project_description"
                                      type="radio"
                                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                                      value="Support"
                                      ref={workspaceDepartment}
                                      onChange={handleChange}
                                    />
                                  </div>
                                  <div className="pl-7 text-sm">
                                    <label
                                      htmlFor="privacy_private-to-project"
                                      className="text-gray-900"
                                    >
                                      Support
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
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
                              <span className="ml-2">Copy ID</span>
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
                                Learn more about workspaces
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
                      onClick={() => props.setSlideoverOpenpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Create
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
