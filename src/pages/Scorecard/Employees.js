import React, { useState } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  CollectionIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import classNames from "../../utils/classNames";
import Tabs from "../../components/Scorecard/Tabs";

const stats = [
  {
    name: "Task Completions",
    stat: "23",
    previousStat: "12",
    change: "12%",
    changeType: "increase",
  },
  {
    name: "Avg. Quality",
    stat: "58.16%",
    previousStat: "56.14%",
    change: "2.02%",
    changeType: "increase",
  },
  {
    name: "Avg. Time",
    stat: "4h",
    previousStat: "7h",
    change: "4.05%",
    changeType: "decrease",
  },
];

const people = [
  {
    id: "1",
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    role: "Admin",
    onboard: "March 13, 2021",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    id: "2",
    name: "Cody Fisher",
    title: "Product Directives Officer",
    department: "Intranet",
    role: "Admin",
    onboard: "March 15, 2021",
    email: "cody.fisher@example.com",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixqx=NZi01NmzgY&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

export default function Employees() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} employeesActive={true} />

      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar setSidebarOpen={setSidebarOpen} shadow={"shadow"} />

        {/* Page */}
        <main className="flex-1 relative pb-8 z-0 overflow-y-auto">

        
        </main>
      </div>
    </div>
  );
}
