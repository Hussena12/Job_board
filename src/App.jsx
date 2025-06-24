import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  EditJob,
  Home,
  JobDetails,
  Jobs,
  Login,
  PostJob,
  Register,
} from "./pages";

import { Navbar, Pages } from "./layout";
import { useStateContext } from "./contexts/useStateContext";

function App() {
  const { currentMode } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark " : ""}>
      <BrowserRouter>
        <div className="bg-gray-100 dark:bg-[#030712]">
          <div className="static ">
            <Navbar />
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Pages" element={<Pages />}></Route>
              <Route path="/Jobs" element={<Jobs />}></Route>
              <Route path="/PostJob" element={<PostJob />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/Register" element={<Register />}></Route>
              <Route path="/JobDetails" element={<JobDetails />}></Route>
              <Route path="/EditJob" element={<EditJob />}></Route>
              <Route path="/Dashboard" element={<Dashboard />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
