// import { registerLicense } from "@syncfusion/ej2-base";

// // Replace with your actual license key
// registerLicense(
//   "Ngo9BigBOggjHTQxAR8/V1JEaF5cXmRCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdmWXheeHVRRWVeUUxwXUtWYEk="
// );

// import * as ej2base from "@syncfusion/ej2-base";
// ej2base.registerLicense(
//   " Mzk0MjIwOEAzMTM5MmUzNDJlMzBBMm5oQjRuUVRMUlJjY00wYWZmWVozeExUT3J3cUg4SHBXc1diZGNWN0JrPQ== "
// );

import "./App.css";
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

const AppWrapper = () => (
  <JobProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </JobProvider>
);

function App() {
  const location = useLocation();
  const hideNavbarOn = ["/Login", "/Register", "/PostJob", "/Dashboard"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  const { currentMode } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="bg-[#fcfcfc] dark:bg-[#121212] min-h-screen">
        {!shouldHideNavbar && <Navbar />}

        <div className={!shouldHideNavbar ? "" : ""}>
          <Routes>
            {/* pages */}
            <Route path="/" element={<Home />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/PostJob" element={<PostJob />} />
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

export default AppWrapper;
