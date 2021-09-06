// import React from "react";
// import classNames from "../../utils/classNames";

// export default function Tabs(props) {
//   const tabs = [
//     {
//       name: "Tổng quan",
//       href: "#",
//       current: props.overviewSelected == true && true,
//       view: () => {
//         props.setOverviewSelected(true);
//         props.setMeasureviewSelected(false);
//       },
//     },
//     {
//       name: "KPIs",
//       href: "#",
//       current: props.measureviewSelected == true && true,
//       view: () => {
//         props.setOverviewSelected(false);
//         props.setMeasureviewSelected(true);
//       },
//     },
//     {
//       name: "OKRs",
//       href: "#",
//       current: false,
//     },
//   ];
//   return (
//     <>
//       <div className="sm:hidden">
//         <label htmlFor="tabs" className="sr-only">
//           Select a tab
//         </label>
//         <select
//           id="tabs"
//           name="tabs"
//           className="block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
//           defaultValue={tabs.find((tab) => tab.current).name}
//         >
//           {tabs.map((tab) => (
//             <option key={tab.name}>{tab.name}</option>
//           ))}
//         </select>
//       </div>
//       <div className="hidden sm:block ">
//         <nav
//           className="relative z-0 rounded-lg flex divide-x divide-gray-200 border border-gray-200"
//           aria-label="Tabs"
//         >
//           {tabs.map((tab, tabIdx) => (
//             <a
//               key={tab.name}
//               href={tab.href}
//               onClick={tab.view}
//               className={classNames(
//                 tab.current
//                   ? "text-gray-900"
//                   : "text-gray-500 hover:text-gray-700",
//                 tabIdx === 0 ? "rounded-l-lg" : "",
//                 tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
//                 "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
//               )}
//               aria-current={tab.current ? "page" : undefined}
//             >
//               <span>{tab.name}</span>
//               <span
//                 aria-hidden="true"
//                 className={classNames(
//                   tab.current ? "bg-blue-500" : "bg-transparent",
//                   "absolute inset-x-0 bottom-0 h-0.5"
//                 )}
//               />
//             </a>
//           ))}
//         </nav>
//       </div>
//     </>
//   );
// }

import React from "react";
import classNames from "../../utils/classNames";

export default function Tabs(props) {
  const tabs = [
    {
      name: "Tổng quan",
      href: "#",
      current: props.overviewSelected == true && true,
      view: () => {
        props.setOverviewSelected(true);
        props.setStrategyviewSelected(false);
        props.setMeasureviewSelected(false);
      },
    },
    {
      name: "Chi tiết",
      href: "#",
      current: props.measureviewSelected == true && true,
      view: () => {
        props.setOverviewSelected(false);
        props.setStrategyviewSelected(false);
        props.setMeasureviewSelected(true);
      },
    },
    {
      name: "Chiến lược",
      href: "#",
      current: props.strategyviewSelected == true && true,
      view: () => {
        props.setOverviewSelected(false);
        props.setMeasureviewSelected(false);
        props.setStrategyviewSelected(true);
      },
    },
  ];
  return (
    <>
      <div>
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={tab.view}
                  className={classNames(
                    tab.current
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm uppercase"
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
    </>
  );
}
