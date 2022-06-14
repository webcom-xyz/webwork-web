import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

interface IProps {
  monthSelected: React.RefObject<HTMLSelectElement> | null;
  yearSelected: React.RefObject<HTMLSelectElement> | null;
  handleChange: React.ChangeEventHandler<HTMLSelectElement>;
}

const TimePeriodSelector: React.FC<IProps> = ({
  monthSelected,
  yearSelected,
  handleChange,
}) => {
  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <span className="col-span-1 relative z-0 inline-flex rounded-lg">
            <button
              type="button"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </span>

          <div className="col-span-1">
            <select
              id="monthSelector"
              name="monthSelector"
              // value={valueArgs.month}
              ref={monthSelected}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
            >
              <option value="01">Tháng 1</option>
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
              name="yearSelector"
              ref={yearSelected}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-lg"
            >
              <option value="2021">Năm 2021</option>
              <option value="2022">Năm 2022</option>
              <option value="2023">Năm 2023</option>
              <option value="2024">Năm 2024</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimePeriodSelector;
