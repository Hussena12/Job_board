import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Dashboard,
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

import { Navbar } from "./layout";
import { useStateContext } from "./contexts/useStateContext";
import { PrivateRoute } from "./components";

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

function App() {
  const location = useLocation();
  const hideNavbarOn = ["/Login", "/Register", "/PostJob"];
  const shouldHideNavbar = hideNavbarOn.includes(location.pathname);

  const { currentMode } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="bg-[#fcfcfc] dark:bg-[#121212] min-h-screen">
        {!shouldHideNavbar && <Navbar />}

        <div className={!shouldHideNavbar ? "" : ""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/PostJob" element={<PostJob />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />

            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/JobDetails" element={<JobDetails />} />
            <Route path="/EditJob" element={<EditJob />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AppWrapper;
