import React, { useState, useEffect, useRef, FormEvent } from "react";
import KPITable from "../../components/Reports/KPITable";
import PageHeading from "../../components/shared/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../../actions/user";
import Stats from "../../components/Reports/Stats";
import { createKPIValue, getAssignedKPIs } from "../../actions/kpi";
import { useTranslation } from "react-i18next";
import Drawer from "../../components/Reports/Drawer";
import TimePeriodSelector from "../../components/Reports/TimePeriodSelector";
import { RootState } from "../../store";
import { AssignedMeasuresDTO } from "../../types/measure";
import { CurrentUserDTO } from "../../types/user";
import { NewSidebar } from "../../components/shared/NewSidebar";

export interface IState {
  valueArgs: {
    month?: string;
    year?: string;
  };
  assignedKPIs: AssignedMeasuresDTO;
}

const Reports: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector<RootState, CurrentUserDTO>((state) => state.user.currentUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const assignedKPIs = useSelector<RootState, AssignedMeasuresDTO>(
    (state) => state.kpi.assignedKPIs
  );
  const { t, i18n } = useTranslation();
  const [selectedKPIId, setSelectedKPIId] = useState("");
  const [kpiUpdateData, setKPIUpdateData] = useState({});
  const valueRef = useRef<HTMLInputElement>(null);
  const startDate = useRef("");
  const monthSelectedRef = useRef<HTMLSelectElement>(null);
  const yearSelectedRef = useRef<HTMLSelectElement>(null);
  const [valueArgs, setValueArgs] = useState<IState["valueArgs"]>({
    month: "",
    year: "",
  });

  const handleChange = (): void => {
    setValueArgs({
      ...valueArgs,
      month: monthSelectedRef.current?.value,
      year: yearSelectedRef.current?.value,
    });
    setKPIUpdateData({
      ...kpiUpdateData,
      value: valueRef.current?.value,
      startDate: `${yearSelectedRef.current?.value}-${monthSelectedRef.current?.value}-01T15:07:34.339Z`,
    });
  };

  const handleCreateKPIValue = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch(createKPIValue(selectedKPIId, kpiUpdateData));
    } catch (error) {
      console.log(error);
    }
    setDrawerOpen(false);
  };

  useEffect(() => {
    try {
      dispatch(getCurrentUser());
      dispatch(getAssignedKPIs());
    } catch (error) {
      console.log(error);
    }
  }, [location, dispatch]);

  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <NewSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        reportsActive={true}
      />
      <Drawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        assignedKPIs={assignedKPIs?.data}
        selectedKPIId={selectedKPIId}
        handleChange={handleChange}
        handleCreateKPIValue={handleCreateKPIValue}
        value={valueRef}
        startDate={startDate}
        newMeasureText={t("objective.drawer.newMeasure")}
        newMeasureDescription={t("objective.drawer.newMeasureDescription")}
        measureNameText={t("objective.drawer.measureName")}
        descriptionText={t("objective.drawer.description")}
        weightText={t("objective.drawer.weight")}
        dataTypeText={t("objective.drawer.dataType")}
        redText={t("objective.drawer.red")}
        goalText={t("objective.drawer.goal")}
        calendarText={t("objective.drawer.calendar")}
        actualValueText={t("objective.drawer.actualValue")}
        copyIdText={t("objective.drawer.copyId")}
        moreAboutMeasuresText={t("objective.drawer.moreAboutMeasures")}
        createMeasureText={t("objective.drawer.createMeasure")}
        cancelText={t("objective.drawer.cancel")}
      />
      <div className="flex-1 overflow-auto focus:outline-none">
        {/* <Topbar setSidebarOpen={setSidebarOpen} /> */}
        <main className="flex-1 relative pb-8 z-0">
          {/* <PageHeading
            // secondaryButtonText={t("report.pageHeading.secondaryButton")}
            // primaryButtonText={t("report.pageHeading.primaryButton")}
            // handlePrimaryButton={}
            // currentUser={currentUser}
            // unverifiedText={t("report.pageHeading.unverified")}
            heading="Reports"
          /> */}

          <div className="hidden mt-8 sm:block">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Stats measureText={t("report.stats.measure")} />
            </div>
          </div>

          <TimePeriodSelector
            // months={months}
            monthSelected={monthSelectedRef}
            // years={years}
            yearSelected={yearSelectedRef}
            handleChange={handleChange}
          />

          <div className="hidden mt-8 sm:block">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col mt-2">
                <div className="bg-white shadow-sm rounded-md">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 inline-block ml-4 mt-4">
                    {t("report.update")}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 ml-4 mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit quam
                    corrupti consectetur.
                  </p>
                  <KPITable
                    measureText={t("report.measureTable.measure")}
                    valueText={t("report.measureTable.value")}
                    periodText={t("report.measureTable.period")}
                    thresholdsText={t("report.measureTable.thresholds")}
                    assignedKPIs={assignedKPIs?.data}
                    drawerOpen={drawerOpen}
                    setDrawerOpen={setDrawerOpen}
                    setSelectedKPIId={setSelectedKPIId}
                    valueArgs={valueArgs}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Reports;
