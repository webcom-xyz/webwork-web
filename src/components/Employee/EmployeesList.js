import {
  ChevronRightIcon,
  MailIcon,
  BadgeCheckIcon,
} from "@heroicons/react/solid";
import moment from "moment";

export default function EmployeesList(props) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {props.members ? (
          props.members.map((member) => (
            <li key={member.id}>
              <a
                className="block cursor-pointer hover:bg-gray-50"
                onClick={() => {
                  props.setEmployeeDetailsOpen(true);
                  props.setCurrentEmployeeId(member.id);
                  props.setSelectedEmployeeEmail(member.email);
                }}
              >
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={`http://localhost:5000/${member.avatarUrl}`}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {member.fullName}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <BadgeCheckIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">{member.office}</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            {props.onboardedOnText}{" "}
                            <time dateTime="">
                              {moment(member.createDate).format("DD/MM/YYYY")}
                            </time>
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <MailIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            {member.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
