import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./pages/Public/SignIn";
import SignUp from "./pages/Public/SignUp";

import Landing from "./pages/Public/Landing";

import Dashboard from "./pages/Scorecard/Dashboard";
import Employees from "./pages/Scorecard/Employees";
import Reports from "./pages/Scorecard/Reports";
import Billing from "./pages/Scorecard/Billing";
import Account from "./pages/Account/Account";
import Employee from "./pages/Employee/Home";
import Scorecard from "./pages/Scorecard/Scorecard";
import Perspective from "./pages/Scorecard/Perspective";

import PrivateRoute from "./components/Scorecard/PrivateRoute";
import Home from "./pages/Manager/Home";
import ScorecardSettings from "./pages/Scorecard/ScorecardSettings";
import Objective from "./pages/Scorecard/Objective";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Public routes */}
          <Route exact path="/" component={Landing} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />

          {/* Dashboard routes */}
          <PrivateRoute path="/scorecard/dashboard" component={Dashboard} />
          <PrivateRoute path="/scorecard/employees" component={Employees} />
          <PrivateRoute path="/scorecard/reports" component={Reports} />

          <PrivateRoute
            exact
            path="/scorecard/:scorecardId"
            component={Scorecard}
          />
          <PrivateRoute
            exact
            path="/scorecard/:scorecardId/settings"
            component={ScorecardSettings}
          />
          <PrivateRoute
            exact
            path="/scorecard/:scorecardId/perspective/:perspectiveId"
            component={Perspective}
          />
          <PrivateRoute
            exact
            path="/scorecard/:scorecardId/perspective/:perspectiveId/objective/:objectiveId"
            component={Objective}
          />

          {/* Account routes */}
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute path="/account/plan-billing" component={Billing} />
          <PrivateRoute path="/manager" component={Home} />
          <PrivateRoute path="/employee/home" component={Employee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
