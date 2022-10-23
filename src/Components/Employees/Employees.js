import React, { useContext } from "react";
import { DarkmodeEnable } from "../../App";
import "./Employees.css";

import EmployeeTab from "./EmployeeTab";
import "./Employees.css";

const Employees = () => {
  const { isDark } = useContext(DarkmodeEnable);
  return (
    <div style={{ width: "81%", marginLeft: "30px", height: "100vh" }}>
      <h1
        className="heading"
        style={{
          textAlign: "left",
          fontSize: "23px",
          color: `${isDark ? "white" : "#003566"}`,
          marginTop: "100px",
        }}
      >
        Employee
      </h1>
      <EmployeeTab></EmployeeTab>
    </div>
  );
};

export default Employees;
