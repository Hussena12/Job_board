import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "./components";
import MainLayout from "./layout/MainLayout";
import { JobProvider } from "./contexts/JobContext";
import { SavedjobsProvider } from "./contexts/useSavedJobs";
import { PrivateRoute } from "./components";

import { Home } from "./pages";
// lazy loaded pages
import { Jobs } from "../src/utils/lazyPages";
import { JobDetails } from "../src/utils/lazyPages";
import { Login } from "../src/utils/lazyPages";
import { PostJob } from "../src/utils/lazyPages";
import { Register } from "../src/utils/lazyPages";
import { AboutUs } from "../src/utils/lazyPages";
import { ContactUs } from "../src/utils/lazyPages";
import { EditJob } from "../src/utils/lazyPages";

const Dashboard = lazy(() => import("./Dashboard/userId/DashNavbar"));
const MyPostedJob = lazy(() => import("./Dashboard/userId/MyPostedJob"));

function App() {
  const location = useLocation();
  const hideNavbarOn = ["/Login", "/Register", "/PostJob", "/Dashboard"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  return (
    <MainLayout shouldHideNavbar={shouldHideNavbar}>
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home />} />{" "}
        <Route
          path="/jobs"
          element={
            <Suspense fallback={<Spinner />}>
              <Jobs />
            </Suspense>
          }
        />{" "}
        <Route
          path="/postJob"
          element={
            <PrivateRoute>
              <Suspense fallback={<Spinner />}>
                <PostJob />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <Suspense fallback={<Spinner />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/ContactUs"
          element={
            <Suspense fallback={<Spinner />}>
              <ContactUs />
            </Suspense>
          }
        />
        <Route
          path="/Login"
          element={
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/Register"
          element={
            <Suspense fallback={<Spinner />}>
              <Register />
            </Suspense>
          }
        />
        {/* dashboard */}
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Suspense fallback={<Spinner />}>
                <Dashboard />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/MyPostedJob"
          element={
            <Suspense fallback={<Spinner />}>
              <MyPostedJob />
            </Suspense>
          }
        />
        <Route
          path="/JobDetails"
          element={
            <Suspense fallback={<Spinner />}>
              <JobDetails />
            </Suspense>
          }
        />
        <Route
          path="/EditJob"
          element={
            <Suspense fallback={<Spinner />}>
              <EditJob />
            </Suspense>
          }
        />{" "}
      </Routes>
    </MainLayout>
  );
}

const AppWrapper = () => (
  <JobProvider>
    <SavedjobsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SavedjobsProvider>
  </JobProvider>
);

export default AppWrapper;
