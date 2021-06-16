import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignIn from "./pages/Public/SignIn";
import SignUp from "./pages/Public/SignUp";
import Landing from "./pages/Public/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employees from "./pages/Dashboard/Employees";
import Activities from "./pages/Dashboard/Activities";
import Projects from "./pages/Dashboard/Projects";
import Reports from "./pages/Dashboard/Reports";
import Billing from "./pages/Dashboard/Billing";
import Account from "./pages/Account/Account";

import PrivateRoute from "./components/Dashboard/PrivateRoute";
import Test from "./pages/Public/Test";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          {/* Public routes */}
          <Route exact path="/" component={Landing} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/test" component={Test} />

          {/* Dashboard routes */}
          <PrivateRoute path="/dashboard/home" component={Dashboard} />
          <PrivateRoute path="/dashboard/employees" component={Employees} />
          <PrivateRoute path="/dashboard/activities" component={Activities} />
          <PrivateRoute path="/dashboard/projects" component={Projects} />
          <PrivateRoute path="/dashboard/reports" component={Reports} />

          {/* Account routes */}
          <PrivateRoute exact path="/account" component={Account} />
          <PrivateRoute path="/account/plan-billing" component={Billing} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
