import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  EditJob,
  Home,
  JobDetails,
  Jobs,
  Login,
  PostJob,
  Register,
  AboutUs,
  ContactUs,
} from "./pages";

import { Dashboard, MyPostedJob } from "./Dashboard";

import { Navbar } from "./layout";
import { useStateContext } from "./contexts/useStateContext";
import { PrivateRoute } from "./components";
import { JobProvider } from "./contexts/JobContext";
import { SavedjobsProvider } from "./contexts/useSavedJobs";

function App() {
  const location = useLocation();
  const hideNavbarOn = ["/Login", "/Register", "/PostJob", "/Dashboard"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  const { currentMode } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="bg-[#f7f7f7] dark:bg-[#121212] min-h-screen">
        {!shouldHideNavbar && <Navbar />}

        <div className={!shouldHideNavbar ? "" : ""}>
          <Routes>
            {/* pages */}
            <Route path="/" element={<Home />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route
              path="/PostJob"
              element={
                <PrivateRoute>
                  <PostJob />
                </PrivateRoute>
              }
            />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            {/* dashboard */}
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/MyPostedJob" element={<MyPostedJob />} />

            <Route path="/JobDetails" element={<JobDetails />} />
            <Route path="/EditJob" element={<EditJob />} />
          </Routes>
        </div>
      </div>
    </div>
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
