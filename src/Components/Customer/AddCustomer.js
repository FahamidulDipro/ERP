import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

import { DarkmodeEnable } from "../../App";

const AddCustomer = () => {
  var arr = Array(8).fill("");

  const { isDark } = React.useContext(DarkmodeEnable);
  return (
    <Box>
      <Typography
        sx={{
          my: "30px",
          fontSize: "20px",
          color: "#DC143C",
          fontWeight: "600",
        }}
      >
        Add Customer Information
      </Typography>
      <Grid container spacing={3.5}>
        {arr.map((e) => (
          <Grid item xs={3}>
            <TextField
              id="outlined-basic"
              value="Go Explore"
              variant="outlined"
              size="small"
              className={`${isDark ? "input_dark" : "input_light"}`}
              sx={{
                "& fieldset": { border: "none" },
                width: "295px",
                borderRadius: "2px",
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          width: "17.6%",
          float: "right",
          marginTop: "30px",
          background: "#70A5D8",
        }}
      >
        <Button
          sx={{
            background: "#70A5D8",
            width: "100%",
            color: "white",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddCustomer;
