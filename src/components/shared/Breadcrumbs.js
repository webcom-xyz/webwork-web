import { HomeIcon } from "@heroicons/react/solid";

export default function Breadcrumbs(props) {
  return (
    <nav
      className="bg-white border-b border-gray-200 flex"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"
      >
        {props.scorecardId && (
          <li className="flex">
            <div className="flex items-center">
              <a
                onClick={() => props.history.push(`/${props.scorecardId}`)}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
                // aria-current={page.current ? "page" : undefined}
              >
                Thẻ điểm
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-6 h-6 text-gray-200"
                // fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                /> */}
                {/* <path d="M6 6L14 10L6 14V6Z" fill="currentColor" /> */}

                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        )}

        {props.perspectiveId && (
          <li className="flex">
            <div className="flex items-center">
              <a
                onClick={() =>
                  props.history.push(
                    `/${props.scorecardId}/${props.perspectiveId}`
                  )
                }
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
                // aria-current={page.current ? "page" : undefined}
              >
                Khía cạnh
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-6 h-6 text-gray-200"
                // fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                /> */}
                {/* <path d="M6 6L14 10L6 14V6Z" fill="currentColor" /> */}
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        )}

        {props.objectiveId && (
          <li className="flex">
            <div className="flex items-center">
              <a
                onClick={() =>
                  props.history.push(
                    `/${props.scorecardId}/${props.perspectiveId}/${props.objectiveId}`
                  )
                }
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
                // aria-current={page.current ? "page" : undefined}
              >
                Mục tiêu
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-6 h-6 text-gray-200"
                // fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                /> */}
                {/* <path d="M6 6L14 10L6 14V6Z" fill="currentColor" /> */}
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        )}

        {props.kpiId && (
          <li className="flex">
            <div className="flex items-center">
              <a
                onClick={() =>
                  props.history.push(
                    `/${props.scorecardId}/${props.perspectiveId}/${props.objectiveId}/${props.kpiId}`
                  )
                }
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer"
                // aria-current={page.current ? "page" : undefined}
              >
                KPI
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-6 h-6 text-gray-200"
                // fill=""
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                /> */}
                {/* <path d="M6 6L14 10L6 14V6Z" fill="currentColor" /> */}
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
}
