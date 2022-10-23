import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const BookingDetails = () => {
  const { bookingRef } = useParams();
  return (
    <Box
      sx={{ marginTop: "100px", ml: "270px", minHeight: "100vh", width: "80%" }}
    >
      <Typography
        sx={{ color: "#003566", fontWeight: "600", fontSize: "25px" }}
      >
        Refference &nbsp;{" "}
        <span style={{ color: "#4B4C55" }}> #{bookingRef}</span>
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ color: "#78B3FE", mr: "20px", fontSize: "14px" }}>
          Type: Flight
        </Typography>
        <Typography sx={{ color: "#78B3FE", mr: "20px", fontSize: "14px" }}>
          System: Sabre
        </Typography>
        <Typography sx={{ color: "#78B3FE", mr: "20px", fontSize: "14px" }}>
          One Way
        </Typography>
      </Box>
      <Box sx={{ background: "#E3ECFA", width: "100%", mt: "20px", p: "5px" }}>
        <Typography sx={{ color: "#003566", fontWeight: "600" }}>
          Journey Details
        </Typography>
      </Box>
    </Box>
  );
};

export default BookingDetails;
