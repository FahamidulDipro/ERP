import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { DarkmodeEnable } from "../../App";
import Pax from "./Pax";
import { useLocation } from "react-router-dom";

const CreateQuotation = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const [count, setCount] = useState(1);
  const [pax, setPax] = useState([]);
  const location = useLocation();
  const handleAddPax = () => {
    setCount(count + 1);
    const arr = Array(count).fill("a");
    setPax(arr);
  };
  return (
    <Box
      sx={{
        marginTop: "100px",
        height: "100vh",
        width: "80%",
        marginLeft: "270px",
      }}
    >
      <Typography
        sx={{
          my: "30px",
          fontSize: "20px",
          textDecoration: "underline",
          color: `${isDark ? "white" : "#003566"}`,
        }}
      >
        {location.state.heading}
      </Typography>{" "}
      <Typography
        sx={{
          my: "30px",
          fontSize: "17px",
          fontWeight: "600",
          color: "#DC143C",
        }}
      >
        Add Air Ticket Sales Quatation{" "}
      </Typography>{" "}
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <TextField
            placeholder="Quatation No:"
            id="outlined-basic"
            variant="outlined"
            size="small"
            className={`${isDark ? "input_dark" : "input_light"}`}
            sx={{
              "& fieldset": { border: "none" },
              width: "100%",
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            placeholder="Bill To"
            id="outlined-basic"
            variant="outlined"
            size="small"
            className={`${isDark ? "input_dark" : "input_light"}`}
            sx={{
              "& fieldset": { border: "none" },
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
      {/* Pax element */}
      <Box>
        {pax.map((p, index) => (
          <Pax key={index} index={index + 1}></Pax>
        ))}
      </Box>
      <Button
        sx={{
          background: "#70A5D8",
          width: "10%",
          color: "white",
          mt: "20px",
          mb: "50px",
          borderRadius: "0",
          "&:hover": {
            backgroundColor: "#70A5D8",
          },
        }}
        onClick={handleAddPax}
      >
        Add PAX
      </Button>
      <Button
        sx={{
          background: "#70A5D8",
          width: "15%",
          color: "white",
          mt: "20px",
          mb: "50px",
          ml: "20px",
          borderRadius: "0",
          "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: "#70A5D8",
          },
        }}
      >
        Create Quatation
      </Button>
    </Box>
  );
};

export default CreateQuotation;
