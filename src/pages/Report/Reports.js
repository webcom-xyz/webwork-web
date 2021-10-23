import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Scorecard/Sidebar";
import Topbar from "../../components/Scorecard/Topbar";
import KPITable from "../../components/Reports/KPITable";
import PageHeading from "../../components/shared/PageHeading";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCurrentUser } from "../../actions/user";
import Stats from "../../components/Reports/Stats";
import { createKPIValue, getAssignedKPIs } from "../../actions/kpi";
import { useTranslation } from "react-i18next";
import Drawer from "../../components/Reports/Drawer";
import months from "../../utils/months";
import years from "../../utils/years";
import TimePeriodSelector from "../../components/Reports/TimePeriodSelector";

export default function Reports() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const location = useLocation();
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const assignedKPIs = useSelector((state) => state.kpi.assignedKPIs);
  const { t, i18n } = useTranslation();
  const [selectedKPIId, setSelectedKPIId] = useState("");
  const [kpiUpdateData, setKPIUpdateData] = useState({});
  const value = useRef(0);
  const startDate = useRef("");
  const monthSelected = useRef("");
  const yearSelected = useRef("");
  const [valueArgs, setValueArgs] = useState({});

  const handleChange = () => {
    setValueArgs({
      ...valueArgs,
      month: monthSelected.current.value,
      year: yearSelected.current.value,
    });
    setKPIUpdateData({
      ...kpiUpdateData,
      value: value.current.value,
      startDate: `${yearSelected.current.value}-${monthSelected.current.value}-01T15:07:34.339Z`,
    });
  };

  const handleCreateKPIValue = (e) => {
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
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
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
        value={value}
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
          <PageHeading
            secondaryButtonText={t("report.pageHeading.secondaryButton")}
            primaryButtonText={t("report.pageHeading.primaryButton")}
            currentUser={currentUser}
            unverifiedText={t("report.pageHeading.unverified")}
          />

          <div className="hidden mt-8 sm:block">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <Stats measureText={t("report.stats.measure")} />
            </div>
          </div>

          <TimePeriodSelector
            months={months}
            monthSelected={monthSelected}
            years={years}
            yearSelected={yearSelected}
            handleChange={handleChange}
          />

          <div className="hidden mt-8 sm:block">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col mt-2">
                <div className="bg-white shadow rounded-lg">
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
}
