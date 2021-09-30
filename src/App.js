import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./pages/Public/SignIn";
import SignUp from "./pages/Public/SignUp";

import Landing from "./pages/Public/Landing";

import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Employee/Employees";
import Reports from "./pages/Report/Reports";
// import Billing from "./pages/Scorecard/Billing";
import Account from "./pages/Account/Account";
// import Employee from "./pages/Employee/Home";
import Scorecard from "./pages/Scorecard/Scorecard";
import Perspective from "./pages/Perspective/Perspective";

import PrivateRoute from "./components/Scorecard/PrivateRoute";
// import Home from "./pages/Manager/Home";
import ScorecardSettings from "./pages/Scorecard/ScorecardSettings";
import Objective from "./pages/Objective/Objective";
import KPI from "./pages/KPI/KPI";
import KPISettings from "./pages/KPI/Settings";
import ObjectiveSettings from "./pages/Objective/Settings";
import PerspectiveSettings from "./pages/Perspective/Settings";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/employees" component={Employees} />
          <PrivateRoute path="/reports" component={Reports} />
          <PrivateRoute exact path="/user/account" component={Account} />


          <PrivateRoute
            exact
            path="/:scorecardId/settings"
            component={ScorecardSettings}
          />
          <PrivateRoute
            exact
            path="/:scorecardId/:perspectiveId/settings"
            component={PerspectiveSettings}
          />
          <PrivateRoute
            exact
            path="/:scorecardId/:perspectiveId/:objectiveId/settings"
            component={ObjectiveSettings}
          />
          <PrivateRoute
            exact
            path="/:scorecardId/:perspectiveId/:objectiveId/:kpiId/settings"
            component={KPISettings}
          />


          <PrivateRoute 
            exact 
            path="/:scorecardId" 
            component={Scorecard} />
          <PrivateRoute
            exact
            path="/:scorecardId/:perspectiveId"
            component={Perspective}
          />
          <PrivateRoute
            exact
            path="/:scorecardId/:perspectiveId/:objectiveId"
            component={Objective}
          />
          <PrivateRoute
            exact
            path="/:scorecardId/:perspectiveId/:objectiveId/:kpiId"
            component={KPI}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
