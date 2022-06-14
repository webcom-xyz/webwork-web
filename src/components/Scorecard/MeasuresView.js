import classNames from "../../utils/classNames";

export default function MeasuresView(props) {
  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-1">
          <div className="rounded-lg bg-white shadow">
            <h3 className="text-lg leading-6 font-medium text-gray-900 ml-4 mt-4">
              {props.measuresText}
            </h3>
            <p className="mt-1 text-sm text-gray-500 ml-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam
              corrupti consectetur.
            </p>
            <div className="flex flex-col overflow-x-auto overflow-y-hidden scrollbar-hidden border-t border-gray-200 mt-4">
              <div className="-my-2 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-6 py-4 text-sm text-gray-900">
                            {props.kpi.name}
                          </td>
                          {props.kpi ? (
                            props.kpi.actualValues.map((value) =>
                              (
                                ((value.value - props.kpi.red) /
                                  (props.kpi.goal - props.kpi.red)) *
                                100
                              ).toFixed(0) >= 33 ? (
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-yellow-500">
                                  {(
                                    ((value.value - props.kpi.red) /
                                      (props.kpi.goal - props.kpi.red)) *
                                    100
                                  ).toFixed(0)}
                                  %
                                </td>
                              ) : (
                                  ((value.value - props.kpi.red) /
                                    (props.kpi.goal - props.kpi.red)) *
                                  100
                                ).toFixed(0) >= 66 ? (
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                                  {(
                                    ((value.value - props.kpi.red) /
                                      (props.kpi.goal - props.kpi.red)) *
                                    100
                                  ).toFixed(0)}
                                  %
                                </td>
                              ) : (
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-red-500">
                                  {(
                                    ((value.value - props.kpi.red) /
                                      (props.kpi.goal - props.kpi.red)) *
                                    100
                                  ).toFixed(0)}
                                  %
                                </td>
                              )
                            )
                          ) : (
                            <></>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <td className="px-6 py-4 whitespace-nowrap text-sm text-white bg-green-500">
                               
%
</td> */
}
