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
      <div className="bg-gray-100 dark:bg-[#030712] min-h-screen">
        {!shouldHideNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/PostJob" element={<PostJob />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/JobDetails" element={<JobDetails />} />
          <Route path="/EditJob" element={<EditJob />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppWrapper;
