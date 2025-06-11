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

import { Navbar } from "./layout";

function App() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <div>
          <div className="static ">
            <Navbar />
            <Home />
          </div>
          <div className="pt-16">
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />}></Route>
              <Route path="/EditJob" element={<EditJob />}></Route>
              <Route path="/Home" element={<Home />}></Route>
              <Route path="/JobDetails" element={<JobDetails />}></Route>
              <Route path="/Jobs" element={<Jobs />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/PostJob" element={<PostJob />}></Route>
              <Route path="/Register" element={<Register />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
