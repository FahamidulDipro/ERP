import { Box, Typography } from "@mui/material";
import { Chart } from "chart.js";
import React from "react";
import { Link } from "react-router-dom";
import { DarkmodeEnable } from "../../App";
import AttDetailsChart from "./AttDetailsChart";
import DailyAttReportChart from "./DailyAttReportChart";

const AttandanceDetail = () => {
  const { isDark } = React.useContext(DarkmodeEnable);

  return (
    <Box
      sx={{
        marginTop: "150px",
        justifyContent: "space-between",
        width: "80%",
        alignItems: "center",
        marginLeft: "50px",
        marginLeft: "250px",
        height: "100vh",
        padding: "20px",
      }}
    >
      <p
        className="info"
        style={{
          color: `${isDark ? "white" : "#003566"}`,
          fontWeight: "600",

          cursor: "pointer",
          fontSize: "30px",
        }}
      >
        Attandance Details
      </p>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box height={"232px"} width={"232px"} sx={{ width: "35%" }}>
          <Typography
            color="#DC143C"
            sx={{ fontWeight: "bold", marginBottom: "30px" }}
          >
            Today Attandance Report
          </Typography>
          <AttDetailsChart></AttDetailsChart>
        </Box>
        <Box height={"232px"} width={"232px"} sx={{ width: "70%" }}>
          <Typography
            color="#DC143C"
            sx={{ fontWeight: "bold", marginBottom: "50px", marginLeft: "9%" }}
          >
            Daily Attandance Report
          </Typography>
          <DailyAttReportChart></DailyAttReportChart>
        </Box>
      </Box>
    </Box>
  );
};

export default AttandanceDetail;
