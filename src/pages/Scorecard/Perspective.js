import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import {
  ArrowSmDownIcon,
  ArrowSmUpIcon,
  CollectionIcon,
  ChevronRightIcon,
  CheckIcon,
  SelectorIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/solid";
import classNames from "../../utils/classNames";
import Tabs from "../../components/Scorecard/Tabs";
import { useLocation, useParams } from "react-router-dom";
import { Switch, Listbox, Transition } from "@headlessui/react";
import { getAllObjectives } from "../../actions/objective";
import { useDispatch } from "react-redux";
import Drawer from "../../components/Perspective/Drawer";
import API from "../../api";
import { getCurrentUser } from "../../actions/user";

const cards = [
  {
    name: "Performance",
    href: "#",
    icon: PresentationChartLineIcon,
    amount: "_",
  },
  { name: "Anomaly", href: "#", icon: PresentationChartLineIcon, amount: "_" },
  { name: "N/A", href: "#", icon: PresentationChartLineIcon, amount: "_" },
];

const stats1 = [
  {
    name: "Performance",
    stat: "N/A",
    previousStat: "N/A",
    change: "N/A",
    changeType: "increase",
  },
  {
    name: "Anomaly",
    stat: "N/A",
    previousStat: "N/A",
    change: "N/A",
    changeType: "increase",
  },
  {
    name: "Forecast",
    stat: "N/A",
    previousStat: "N/A",
    change: "N/A",
    changeType: "increase",
  },
];
const stats2 = [
  {
    name: "Tài chính",
    stat: "N/A",
    previousStat: "N/A",
    change: "N/A",
    changeType: "increase",
  },
  {
    name: "Khách hàng",
    stat: "N/A",
    previousStat: "N/A",
    change: "N/A",
    changeType: "decrease",
  },
  {
    name: "Quá trình nội bộ",
    stat: "N/A",
    previousStat: "N/A",
    change: "N/A",
    changeType: "decrease",
  },
  {
    name: "Học hỏi & Phát triển",
    stat: "N/A",
    previousStat: "N/A",
    change: "N/A",
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

const months = [
  { id: 1, name: "January" },
  { id: 2, name: "February" },
  { id: 3, name: "March" },
  { id: 4, name: "April" },
  { id: 5, name: "May" },
  { id: 6, name: "June" },
  { id: 7, name: "July" },
  { id: 8, name: "August" },
  { id: 9, name: "September" },
  { id: 10, name: "October" },
  { id: 11, name: "November" },
  { id: 12, name: "December" },
];

const quarters = [
  { id: 1, name: "Quarter 1" },
  { id: 2, name: "Quarter 2" },
  { id: 3, name: "Quarter 3" },
  { id: 4, name: "Quarter 4" },
];

const years = [
  { id: 1, name: "2021" },
  { id: 2, name: "2022" },
  { id: 3, name: "2023" },
  { id: 4, name: "2024" },
];

export default function Perspective(props) {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId, perspectiveId } = useParams();
  const [enabled, setEnabled] = useState(false);
  const [monthSelected, setMonthSelected] = useState(months[0]);
  const [quarterSelected, setQuarterSelected] = useState(quarters[0]);
  const [yearSelected, setYearSelected] = useState(years[0]);
  const [timePeriodSelected, setTimePeriodSelected] = useState("Monthly");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      // dispatch(getAllObjectives({ perspectiveId: perspectiveId }));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        perspectiveId={perspectiveId}
      />
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <Topbar setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 relative pb-8 z-0">
          <button onClick={() => setDrawerOpen(true)}>New Objective</button>
        </main>
      </div>
    </div>
  );
}
