import React from "react";
import Header from "./components/header";

import {
  PatientsPage,
  PatientsHistoryPage,
  DoctorsPage,
  TestExamsPage,
} from "./pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "./seed";
import NewPatientPage from "./pages/new-patient/index";
import PrintPage from "./pages/print/index";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path={ROUTES.patients}>
              <PatientsPage />
            </Route>
            <Route path={ROUTES.newPatient}>
              <NewPatientPage />
            </Route>
            <Route path={ROUTES.patientsHistory}>
              <PatientsHistoryPage />
            </Route>
            <Route path={ROUTES.doctors}>
              <DoctorsPage />
            </Route>
            <Route path={ROUTES.testExams}>
              <TestExamsPage />
            </Route>
            <Route path={ROUTES.print}>
              <PrintPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
