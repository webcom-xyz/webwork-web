import { useEffect, useRef, useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import {
  ChevronLeftIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import classNames from "../../utils/classNames";
import { NewSidebar } from "../../components/shared/NewSidebar";
import {
  addMembers,
  getMembers,
  removeEmployee,
} from "../../actions/workspace";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootState } from "../../store";
import { WorkspaceMembersDTO } from "../../types/member";
import AddEmployeeDrawer from "../../components/Employee/AddEmployeeDrawer";
import { CurrentUserDTO } from "../../types/user";
import logo from "../../assets/logo_4.svg";
const profile = {
  name: "Ricardo Cooper",
  imageUrl:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  coverImageUrl:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
  fields: {
    Phone: "(555) 123-4567",
    Email: "ricardocooper@example.com",
    Title: "Senior Front-End Developer",
    Team: "Product Development",
    Location: "San Francisco",
    Sits: "Oasis, 4th floor",
    Salary: "$145,000",
    Birthday: "June 8, 1990",
  },
};

const team = [
  {
    name: "Leslie Alexander",
    handle: "lesliealexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Foster",
    handle: "michaelfoster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Dries Vincent",
    handle: "driesvincent",
    role: "Manager, Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    handle: "lindsaywalton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Recognition", href: "#", current: false },
];

interface IState {
  employeeData: {
    email: string | undefined;
  };
}

export default function NewEmployee(): JSX.Element | null {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector<RootState, CurrentUserDTO>(
    (state) => state.user.currentUser
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const members = useSelector<RootState, WorkspaceMembersDTO>(
    (state) => state.workspace.members
  );
  const location = useLocation();

  const [employeeData, setEmployeeData] = useState<IState["employeeData"]>({
    email: "",
  });
  const emailRef = useRef<HTMLInputElement>(null);

  const [showNotification, setShowNotification] = useState(false);
  const [refetch, setRefetch] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("Thành công!");
  const [notificationSubtitle, setNotificationSubtitle] = useState("");
  const { t, i18n } = useTranslation();
  const [employeeDetailsOpen, setEmployeeDetailsOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [selectedEmployeeEmail, setSelectedEmployeeEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<any>): void => {
    setEmployeeData({
      ...employeeData,
      email: emailRef.current?.value,
    });
  };

  const handleAddEmployeeToWorkspace = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      dispatch(addMembers(employeeData));
      setNotificationSubtitle("Đã thêm nhân viên vào workspace thành công.");
      setShowNotification(true);
      setDrawerOpen(false);
      setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveEmployee = (e: any) => {
    e.preventDefault();
    try {
      dispatch(removeEmployee({ email: selectedEmployeeEmail }));
      setNotificationSubtitle("Đã xóa nhân viên khỏi workspace thành công.");
      setShowNotification(true);
      setEmployeeDetailsOpen(false);
      setRefetch(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    try {
      dispatch(getMembers());
    } catch (error) {
      console.log(error);
    }

    if (refetch) {
      try {
        dispatch(getMembers());
      } catch (error) {
        console.log(error);
      }
    }
  }, [location, dispatch, refetch]);

  return (
    <>
      <div className="h-screen flex">
        <NewSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          employeesActive={true}
        />
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
              <div>
                <img className="h-8 w-auto" src={logo} alt="Workflow" />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
                  onClick={() => setSidebarOpen(true)}
                >
                  <span className="sr-only">Open sidebar</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              {/* Breadcrumb */}
              <nav
                className="flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden"
                aria-label="Breadcrumb"
              >
                <a
                  href="#"
                  className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900"
                >
                  <ChevronLeftIcon
                    className="-ml-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span>Directory</span>
                </a>
              </nav>

              <article>
                {selectedEmployeeId && (
                  <>
                    {/* Profile header */}
                    {members?.data
                      .filter((member) => member.id === selectedEmployeeId)
                      .map((member) => (
                        <div>
                          <div>
                            <img
                              className="h-32 w-full object-cover lg:h-48"
                              src={profile.coverImageUrl}
                              alt=""
                            />
                          </div>
                          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                              <div className="flex">
                                <img
                                  className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                  src={member.avatarUrl}
                                  alt=""
                                />
                              </div>
                              <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                  <h1 className="text-2xl font-bold text-gray-900 truncate">
                                    {member.fullName}
                                  </h1>
                                </div>
                                <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                  <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                  >
                                    <MailIcon
                                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span>Message</span>
                                  </button>
                                  <button
                                    type="button"
                                    className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                  >
                                    <PhoneIcon
                                      className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span>Call</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                              <h1 className="text-2xl font-bold text-gray-900 truncate">
                                {profile.name}
                              </h1>
                            </div>
                          </div>
                        </div>
                      ))}

                    {/* Tabs */}
                    <div className="mt-6 sm:mt-2 2xl:mt-5">
                      <div className="border-b border-gray-200">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                          <nav
                            className="-mb-px flex space-x-8"
                            aria-label="Tabs"
                          >
                            {tabs.map((tab) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                  tab.current
                                    ? "border-blue-500 text-gray-900"
                                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                                )}
                                aria-current={tab.current ? "page" : undefined}
                              >
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                    </div>

                    {/* Description list */}
                    <div className="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        {Object.keys(profile.fields).map((field) => (
                          <div key={field} className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              {field}
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {/* {profile.fields[field]} */}
                            </dd>
                          </div>
                        ))}
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            About
                          </dt>
                          <dd
                            className="mt-1 max-w-prose text-sm text-gray-900 space-y-5"
                            dangerouslySetInnerHTML={{ __html: profile.about }}
                          />
                        </div>
                      </dl>
                    </div>

                    {/* Team member list */}
                    <div className="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
                      <h2 className="text-sm font-medium text-gray-500">
                        Team members
                      </h2>
                      <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {team.map((person) => (
                          <div
                            key={person.handle}
                            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                          >
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={person.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="#" className="focus:outline-none">
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                />
                                <p className="text-sm font-medium text-gray-900">
                                  {person.name}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {person.role}
                                </p>
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </article>
            </main>
            <aside className="hidden xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96 border-r border-gray-200">
              <div className="px-6 pt-6 pb-4">
                <h2 className="text-lg font-medium text-gray-900">Directory</h2>
                <p className="mt-1 text-sm text-gray-600">
                  Search directory of 3,018 employees
                </p>
                <div className="mt-6 flex space-x-4">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        type="search"
                        name="search"
                        id="search"
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(true)}
                    className="inline-flex justify-center px-3.5 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <UserAddIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Add</span>
                  </button>
                </div>
              </div>
              {/* Directory list */}
              <nav
                className="flex-1 min-h-0 overflow-y-auto"
                aria-label="Directory"
              >
                {/* {Object.keys(directory).map((letter) => ( */}
                <div key={1} className="relative">
                  {/* <div className="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
                    <h3>A</h3>
                  </div> */}
                  <div className="top-0 border-t border-gray-200"></div>
                  <ul
                    role="list"
                    className="relative z-0 divide-y divide-gray-200"
                  >
                    {members?.data
                      .filter((member) => member.id !== currentUser?.data.id)
                      .map((member) => (
                        <li
                          key={member.id}
                          onClick={() => setSelectedEmployeeId(member.id)}
                        >
                          <div className="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={member.avatarUrl}
                                alt=""
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <a href="#" className="focus:outline-none">
                                {/* Extend touch target to entire panel */}
                                <span
                                  className="absolute inset-0"
                                  aria-hidden="true"
                                />
                                <p className="text-sm font-medium text-gray-900">
                                  {member.fullName}
                                </p>
                                <p className="text-sm text-gray-500 truncate">
                                  {member.office}
                                </p>
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                {/* ))} */}
              </nav>
            </aside>
          </div>
        </div>
      </div>
      <AddEmployeeDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        handleAddEmployee={handleAddEmployeeToWorkspace}
        handleChange={handleChange}
        emailRef={emailRef}
      />
    </>
  );
}
