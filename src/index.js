import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardIntegrations from "./dashboard-integrations";
import Dashboard from "./dashboard";
import Projects from "./projects";
import "./index.css";
import Reporting from "./reporting";
import Tasks from "./tasks";
import Users from "./users";
const MainContent = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

ReactDOM.render(
  <React.StrictMode>
    <MainContent>
      <Router>
        <Switch>
          <Route path={"/"} exact component={DashboardIntegrations} />
          <Route
            path={"/dashboard"}
            exact
            component={() => {
              return <Dashboard />;
            }}
          />
          <Route
            path={"/projects"}
            exact
            component={() => {
              return <Projects />;
            }}
          />
          <Route
            path={"/reporting"}
            exact
            component={() => {
              return <Reporting />;
            }}
          />
          <Route
            path={"/tasks"}
            exact
            component={() => {
              return <Tasks />;
            }}
          />
          <Route
            path={"/users"}
            exact
            component={() => {
              return <Users />;
            }}
          />
        </Switch>
      </Router>
    </MainContent>
  </React.StrictMode>,
  document.getElementById("root")
);
