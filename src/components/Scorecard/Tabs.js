import React from "react";
import classNames from "../../utils/classNames";

export default function Tabs(props) {
  const tabs = [
    {
      name: props.overviewText,
      href: "#",
      current: props.overviewSelected == true && true,
      view: () => {
        props.setOverviewSelected(true);
        props.setStrategyviewSelected(false);
        props.setMeasureviewSelected(false);
      },
    },
    {
      name: props.detailsText,
      href: "#",
      current: props.measureviewSelected == true && true,
      view: () => {
        props.setOverviewSelected(false);
        props.setStrategyviewSelected(false);
        props.setMeasureviewSelected(true);
      },
    },
    {
      name: props.strategyText,
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
