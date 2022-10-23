import React, { useContext } from "react";
import { DarkmodeEnable } from "../../App";
import "./NotFound.css";
const NotFound = () => {
  const { isDark } = useContext(DarkmodeEnable);
  return (
    <div className={`${isDark ? "employees_div_dark" : "employees_div_light"}`}>
      <h1
        style={{
          textAlign: "center",
          color: `${isDark ? "white" : "black"}`,
          marginTop: "70px",
        }}
      >
        404! Page Not Found
      </h1>
    </div>
  );
};

export default NotFound;
