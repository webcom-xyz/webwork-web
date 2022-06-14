import React from "react";
import classNames from "../../utils/classNames";

interface IProps {
  overviewText: string;
  overviewSelected: boolean;
  detailsText: string;
  measureviewSelected: boolean;
  strategyText: string;
  strategyviewSelected: boolean;
  setOverviewSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setStrategyviewSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setMeasureviewSelected: React.Dispatch<React.SetStateAction<boolean>>;
  infoviewSelected: boolean;
  setInfoviewSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const Tabs: React.FC<IProps> = ({
  overviewText,
  overviewSelected,
  detailsText,
  measureviewSelected,
  strategyviewSelected,
  strategyText,
  setMeasureviewSelected,
  setOverviewSelected,
  setStrategyviewSelected,
  infoviewSelected,
  setInfoviewSelected,
}) => {
  const tabs = [
    {
      name: overviewText,
      current: overviewSelected == true && true,
      view: () => {
        setOverviewSelected(true);
        setStrategyviewSelected(false);
        setMeasureviewSelected(false);
        setInfoviewSelected(false);
      },
    },
    {
      name: detailsText,
      current: measureviewSelected == true && true,
      view: () => {
        setOverviewSelected(false);
        setStrategyviewSelected(false);
        setMeasureviewSelected(true);
        setInfoviewSelected(false);
      },
    },
    {
      name: strategyText,
      current: strategyviewSelected == true && true,
      view: () => {
        setOverviewSelected(false);
        setMeasureviewSelected(false);
        setStrategyviewSelected(true);
        setInfoviewSelected(false);
      },
    },
    {
      name: "Thông tin & Cài đặt",
      current: infoviewSelected == true && true,
      view: () => {
        setOverviewSelected(false);
        setStrategyviewSelected(false);
        setMeasureviewSelected(false);
        setInfoviewSelected(true);
      },
    },
  ];
  return (
    // <>
    //   <div>
    //     <div className="sm:hidden">
    //       <label htmlFor="tabs" className="sr-only">
    //         Select a tab
    //       </label>
    //       <select
    //         id="tabs"
    //         name="tabs"
    //         className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
    //         defaultValue={tabs.find((tab) => tab.current).name}
    //       >
    //         {tabs.map((tab) => (
    //           <option key={tab.name}>{tab.name}</option>
    //         ))}
    //       </select>
    //     </div>
    //     <div className="hidden sm:block">
    //       <div className="">
    //         <nav className="-mb-px flex space-x-8" aria-label="Tabs">
    //           {tabs.map((tab) => (
    //             <a
    //               key={tab.name}
    //               href={tab.href}
    //               onClick={tab.view}
    //               className={classNames(
    //                 tab.current
    //                   ? "border-blue-500 text-blue-600"
    //                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
    //                 "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm uppercase"
    //               )}
    //               aria-current={tab.current ? "page" : undefined}
    //             >
    //               {tab.name}
    //             </a>
    //           ))}
    //         </nav>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
      {tabs.map((tab) => (
        <a
          key={tab.name}
          onClick={tab.view}
          className={classNames(
            tab.current
              ? "border-blue-500 text-gray-900"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
            "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer"
          )}
          aria-current={tab.current ? "page" : undefined}
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
};
export default Tabs;
