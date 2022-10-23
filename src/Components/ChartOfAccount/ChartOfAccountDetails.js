import React from "react";
import { useLocation, useParams } from "react-router-dom";
import BankDetails from "../BankDetails/BankDetails";
import { Box, Typography } from "@mui/material";
import MobileBanking from "../MobileBanking/MobileBanking";

const ChartOfAccountDetails = () => {
  const location = useLocation();
  return (
    <Box sx={{ width: "95%", marginLeft: "280px" }}>
      {location.pathname === "/chartOfAccountDetail/001" && (
        <BankDetails></BankDetails>
      )}
      {location.pathname === "/chartOfAccountDetail/003" && (
        <MobileBanking></MobileBanking>
      )}
    </Box>
  );
};

export default ChartOfAccountDetails;
