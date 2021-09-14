import { HomeIcon } from "@heroicons/react/solid";

export default function Breadcrumbs(props) {
  const pages = [
    { name: props.scorecardName, href: "#", current: false },
    { name: props.perspectiveName, href: "#", current: false },
    { name: props.objectiveName, href: "#", current: false },
    { name: props.kpiName, href: "#", current: false },
  ];
  return (
    <nav
      className="bg-white border-b border-gray-200 flex"
      aria-label="Breadcrumb"
    >
      <ol
        role="list"
        className="max-w-screen-xl w-full mx-auto px-4 flex space-x-4 sm:px-6 lg:px-8"
      >
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <a
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="flex-shrink-0 w-6 h-6 text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
