import logo from "../../assets/logo_blue_bg.svg";
export default function AssignedEmployees(props) {
  return (
    <div>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5">
          {props.assignedEmployees ? (
            props.assignedEmployees.map((employee) => (
              <li key={employee.id} className="py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8 rounded-full" src={logo} alt="" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {employee.fullName}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {"@" + "mention"}
                    </p>
                  </div>
                  <div>
                    <a className="cursor-pointer inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50">
                      {employee.role === "UPDATER"
                        ? "Người cập nhật"
                        : "Người theo dõi"}
                    </a>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}
