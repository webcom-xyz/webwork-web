import React, { useState, useEffect, useRef, FormEvent } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import KPITable from "../../components/Reports/KPITable";
import PageHeading from "../../components/shared/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../../actions/user";
import Stats from "../../components/Reports/Stats";
import { createKPIValue, getAssignedKPIs } from "../../actions/kpi";
import { useTranslation } from "react-i18next";
import Drawer from "../../components/Reports/Drawer";
import TimePeriodSelector from "../../components/Reports/TimePeriodSelector";
import { RootState } from "../../store";
import { AssignedMeasuresDTO } from "../../types/measure";
import { CurrentUserDTO } from "../../types/user";
import { NewSidebar } from "../../components/shared/NewSidebar";
import { MenuIcon, PaperClipIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo_4.svg";
import {
  ChevronLeftIcon,
  MailIcon,
  PhoneIcon,
  SearchIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import classNames from "../../utils/classNames";

export interface IState {
  valueArgs: {
    month?: string;
    year?: string;
  };
  assignedKPIs: AssignedMeasuresDTO;
}

const messages = [
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  // More messages...
];
const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Recognition", href: "#", current: false },
];
const NewReports: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector<RootState, CurrentUserDTO>(
    (state) => state.user.currentUser
  );
  const location = useLocation();
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const assignedKPIs = useSelector<RootState, AssignedMeasuresDTO>(
    (state) => state.kpi.assignedKPIs
  );
  const { t, i18n } = useTranslation();
  const [selectedKPIId, setSelectedKPIId] = useState("");
  const [kpiUpdateData, setKPIUpdateData] = useState({});
  const valueRef = useRef<HTMLInputElement>(null);
  const startDate = useRef("");
  const monthSelectedRef = useRef<HTMLSelectElement>(null);
  const yearSelectedRef = useRef<HTMLSelectElement>(null);
  const [valueArgs, setValueArgs] = useState<IState["valueArgs"]>({
    month: "",
    year: "",
  });

  const handleChange = (): void => {
    setValueArgs({
      ...valueArgs,
      month: monthSelectedRef.current?.value,
      year: yearSelectedRef.current?.value,
    });
    setKPIUpdateData({
      ...kpiUpdateData,
      value: valueRef.current?.value,
      startDate: `${yearSelectedRef.current?.value}-${monthSelectedRef.current?.value}-01T15:07:34.339Z`,
    });
  };

  const handleCreateKPIValue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(createKPIValue(selectedKPIId, kpiUpdateData));
    } catch (error) {
      console.log(error);
    }
    setDrawerOpen(false);
  };

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
      dispatch(getAssignedKPIs());
    } catch (error) {
      console.log(error);
    }
  }, [location, dispatch]);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <NewSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        reportsActive={true}
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
              {/* Profile header */}
              {assignedKPIs?.data
                .filter((kpi: any) => kpi.id === selectedKPIId)
                .map((kpi: any) => (
                  <div className="mt-6 sm:mt-2 2xl:mt-5">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          Measure Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          Details and attachments
                        </p>
                      </div>
                      <div className="mt-5 border-t border-gray-200">
                        <dl className="sm:divide-y sm:divide-gray-200">
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {kpi.name}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Weight
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {kpi.weight}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Red
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {kpi.red}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Goal
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {kpi.goal}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Data type
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {kpi.dataType}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Description
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {kpi.description}
                            </dd>
                          </div>
                          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                            <dt className="text-sm font-medium text-gray-500">
                              Attachments
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              <ul
                                role="list"
                                className="border border-gray-200 rounded-md divide-y divide-gray-200"
                              >
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                  <div className="w-0 flex-1 flex items-center">
                                    <PaperClipIcon
                                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2 flex-1 w-0 truncate">
                                      resume_back_end_developer.pdf
                                    </span>
                                  </div>
                                  <div className="ml-4 flex-shrink-0">
                                    <a
                                      href="#"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Download
                                    </a>
                                  </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                  <div className="w-0 flex-1 flex items-center">
                                    <PaperClipIcon
                                      className="flex-shrink-0 h-5 w-5 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2 flex-1 w-0 truncate">
                                      coverletter_back_end_developer.pdf
                                    </span>
                                  </div>
                                  <div className="ml-4 flex-shrink-0">
                                    <a
                                      href="#"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Download
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                ))}
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
                  {assignedKPIs?.data.map((kpi) => (
                    <li
                      key={kpi.id}
                      className="relative bg-white py-5 px-4 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                    >
                      <div className="flex justify-between space-x-3">
                        <div className="min-w-0 flex-1">
                          <a href="#" className="block focus:outline-none">
                            <span
                              className="absolute inset-0"
                              aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {kpi.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              N/A
                            </p>
                          </a>
                        </div>
                        <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                          h
                        </div>
                      </div>
                      {/* <div className="mt-1">
                        <p className="line-clamp-2 text-sm text-gray-600">
                          {message.preview}
                        </p>
                      </div> */}
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
  );
};
export default NewReports;
