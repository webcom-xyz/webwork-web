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
                  ref={props.monthSelected}
                  onChange={props.handleChange}
                  defaultValue="01"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                >
                  <option value="01" selected>Tháng 1</option>
                  <option value="02">Tháng 2</option>
                  <option value="03">Tháng 3</option>
                  <option value="04">Tháng 4</option>
                  <option value="05">Tháng 5</option>
                  <option value="06">Tháng 6</option>
                  <option value="07">Tháng 7</option>
                  <option value="08">Tháng 8</option>
                  <option value="09">Tháng 9</option>
                  <option value="10">Tháng 10</option>
                  <option value="11">Tháng 11</option>
                  <option value="12">Tháng 12</option>
                </select>
              </div>

              <div className="col-span-1">
                <select
                  id="yearSelector"
                  name="yeaSelector"
                  ref={props.yearSelected}
                  onChange={props.setYearSelected}
                  defaultValue="2021"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
                >
                  <option value="2021" selected>Năm 2021</option>
                  <option value="2022">Năm 2022</option>
                  <option value="2023">Năm 2023</option>
                  <option value="2024">Năm 2024</option>
                </select>
              </div>
            </>
          ) : props.timePeriodSelected == "Quarterly" ? (
            <>
              <div className="col-span-1">
                <select
                  id="quarterSelector"
                  name="quarterSelector"
                  ref={props.quarterSelected}
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
                  ref={props.yearSelected}
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
                  ref={props.yearSelected}
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
