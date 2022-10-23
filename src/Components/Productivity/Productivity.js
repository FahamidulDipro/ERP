import { Box, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { DarkmodeEnable } from "../../App";
import Attendance from "../EmployeeTable/Attendance";
import EmployeeInfoTest from "../EmployeeTable/EmployeeInfoTest";
import Leave from "../EmployeeTable/Leave";
import ProductivityCompo from "../EmployeeTable/ProductivityCompo";

const Productivity = () => {
  const { isDark } = useContext(DarkmodeEnable);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginTop: "100px",

        height: "170vh",
      }}
    >
      <div
        style={{
          width: "100%",
          marginLeft: "280px",
          marginBottom: "200px",
        }}
      >
        <h1
          style={{
            color: `${isDark ? "white" : "#252733"}`,
            fontWeight: "600",
          }}
        >
          Employee ID: FFI1002
        </h1>
        <p
          style={{
            color: `${isDark ? "white" : "#DC143C"}`,
            fontWeight: "600",
          }}
        >
          Kayes Fahim / Productivity
        </p>
        <div>
          <Attendance></Attendance>
        </div>
        <div>
          <Leave></Leave>
        </div>

        <ProductivityCompo></ProductivityCompo>
      </div>
    </div>
  );
};

export default Productivity;
