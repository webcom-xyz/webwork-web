export default function TimePeriodSelector(props) {
  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <span className="col-span-1 relative z-0 inline-flex rounded-lg">
            <button
              type="button"
              onClick={() => props.setTimePeriodSelected("Monthly")}
              className="w-full relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              {props.byMonthText}
            </button>
            <button
              type="button"
              onClick={() => props.setTimePeriodSelected("Quarterly")}
              className="w-full -ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              {props.byQuarterText}
            </button>
            <button
              type="button"
              onClick={() => props.setTimePeriodSelected("Yearly")}
              className="w-full -ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              {props.byYearText}
            </button>
          </span>

          {props.timePeriodSelected == "Monthly" ? (
            <>
              <div className="col-span-1">
                <select
                  id="monthSelector"
                  name="monthSelector"
                  value={props.monthSelected}
                  onChange={props.setMonthSelected}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                >
                  <option>Tháng 1</option>
                  <option>Tháng 2</option>
                  <option>Tháng 3</option>
                  <option>Tháng 4</option>
                  <option>Tháng 5</option>
                  <option>Tháng 6</option>
                  <option>Tháng 7</option>
                  <option>Tháng 8</option>
                  <option>Tháng 9</option>
                  <option>Tháng 10</option>
                  <option>Tháng 11</option>
                  <option>Tháng 12</option>
                </select>
              </div>

              <div className="col-span-1">
                <select
                  id="yearSelector"
                  name="yeaSelector"
                  value={props.yearSelected}
                  onChange={props.setYearSelected}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                >
                  <option>Năm 2021</option>
                  <option>Năm 2022</option>
                  <option>Năm 2023</option>
                  <option>Năm 2024</option>
                </select>
              </div>
            </>
          ) : props.timePeriodSelected == "Quarterly" ? (
            <>
              <div className="col-span-1">
                <select
                  id="quarterSelector"
                  name="quarterSelector"
                  value={props.quarterSelected}
                  onChange={props.setQuarterSelected}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                >
                  <option>Quý 1</option>
                  <option>Quý 2</option>
                  <option>Quý 3</option>
                  <option>Quý 4</option>
                </select>
              </div>

              <div className="col-span-1">
                <select
                  id="yearSelector"
                  name="yeaSelector"
                  value={props.yearSelected}
                  onChange={props.setYearSelected}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                >
                  <option>Năm 2021</option>
                  <option>Năm 2022</option>
                  <option>Năm 2023</option>
                  <option>Năm 2024</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div className="col-span-1">
                <select
                  id="yearSelector"
                  name="yeaSelector"
                  value={props.yearSelected}
                  onChange={props.setYearSelected}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                >
                  <option>Năm 2021</option>
                  <option>Năm 2022</option>
                  <option>Năm 2023</option>
                  <option>Năm 2024</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
