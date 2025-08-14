import React from "react";
import { useStateContext } from "@/contexts/useStateContext";
import Navbar from "./Navbar";

const MainLayout = ({ children, shouldHideNavbar }) => {
  const { currentMode } = useStateContext();

  return (
    <div>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        <div className="bg-[#f7f7f7] dark:bg-[#121212] min-h-screen">
          {!shouldHideNavbar && <Navbar />}

          <div className={!shouldHideNavbar ? "" : ""}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
