import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = React.lazy(() => import("../App"));

const TrackingPage = React.lazy(
  () => import("../pages/TrackingPage/TrackingPage")
);

export const RoutesComponent = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={""}>
          <Routes>
            <Route path={``} element={<App />}>
              <Route path={`/`} element={<TrackingPage />} />
              <Route path={`/home`} element={<TrackingPage />} />
              <Route path={`*`} element={<div>Stránka nenalezena</div>} />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default RoutesComponent;
