import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DarkmodeEnable } from "../../App";
import AcadInfo from "./AcadInfo";
import BasicInfoTable from "./BasicInfoTable";
import EmployeeInfoTest from "./EmployeeInfoTest";
import JobInfo from "./JobInfo";
import ParentAddress from "./ParentsAddress";
import "./EmployeeTableDetails.css";
import "./EmployeeDetails.css";
import { Link } from "react-router-dom";
const EmpDetails = () => {
  const { isDark } = useContext(DarkmodeEnable);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Box sx={{ width: "100%", marginLeft: "280px", marginBottom: "200px" }}>
        <Typography
          variant="h6"
          sx={{
            marginTop: "100px",
            color: `${isDark ? "white" : "#003566"}`,
            fontWeight: "600",
          }}
        >
          Employee Details
        </Typography>
        <Box
          sx={{
            width: "95%",
            display: "flex",
            cursor: "pointer",
            justifyContent: "space-between",
            alignItems: "center",

            fontWeight: "600",
          }}
        >
          {" "}
          <h1
            style={{
              color: `${isDark ? "white" : "#252733"}`,
              fontWeight: "600",
            }}
          >
            Employee ID: FFI1002
          </h1>
          <Link to="/productivity" underline="always">
            <span
              style={{
                color: `${isDark ? "white" : "#003566"}`,
                textDecoration: "underline",
              }}
            >
              {" "}
              Productivity
            </span>
          </Link>
        </Box>

        <p
          style={{
            color: `${isDark ? "white" : "#DC143C"}`,
            fontWeight: "600",
          }}
        >
          Kayes Fahim
        </p>
        <EmployeeInfoTest></EmployeeInfoTest>
        <JobInfo></JobInfo>
        <AcadInfo></AcadInfo>
        <BasicInfoTable></BasicInfoTable>
        <ParentAddress></ParentAddress>
      </Box>
    </Box>
  );
};

export default EmpDetails;
