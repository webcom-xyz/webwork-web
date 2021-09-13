import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../../components/Objective/Drawer";
import { createNewKPI, getAllKPIs } from "../../actions/kpi";

export default function Objective(props) {
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { scorecardId, perspectiveId, objectiveId } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();

  const [kpi, setKPI] = useState({});
  const name = useRef("");
  const weight = useRef(0);
  const description = useRef("");
  const actualValue = useRef("");
  const red = useRef("");
  const goal = useRef("");
  const dataType = useRef("");
  const calendar = useRef("");

  const kpis = useSelector((state) => state.kpi);
  const handleChange = () => {
    setKPI({
      ...kpi,
      name: name.current.value,
      weight: weight.current.value,
      description: description.current.value,
      actualValue: actualValue.current.value,
      red: red.current.value,
      goal: goal.current.value,
      dataType: dataType.current.value,
      calendar: calendar.current.value,
      objectiveId: objectiveId,
    });
  };

  const handleCreateNewKPI = (e) => {
    e.preventDefault();
    console.log(kpi);

    try {
      dispatch(createNewKPI(kpi));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      dispatch(getAllKPIs({ objectiveId: objectiveId }));
    } catch (error) {
      console.log(error);
    }
  }, [location]);
  
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        perspectiveId={perspectiveId}
      />
      <Drawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        name={name}
        weight={weight}
        description={description}
        actualValue={actualValue}
        red={red}
        goal={goal}
        dataType={dataType}
        calendar={calendar}
        handleChange={handleChange}
        handleCreateNewKPI={handleCreateNewKPI}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}

        <main className="flex-1 relative pb-8 z-0">
          <button onClick={() => setDrawerOpen(true)}>New KPI</button>

          {kpis.kpi ? (
            kpis.kpi.response.data.map((kpi) => (
              <li>
                <button
                  onClick={() =>
                    history.push(
                      `/scorecard/${scorecardId}/perspective/${perspectiveId}/objective/${objectiveId}/kpi/${kpi.id}`
                    )
                  }
                >
                  {kpi.name}
                </button>
              </li>
            ))
          ) : (
            <></>
          )}
        </main>
      </div>
    </div>
  );
}
