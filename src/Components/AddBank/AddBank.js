import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

import { DarkmodeEnable } from "../../App";

const AddBank = () => {
  var bankArr = ["Bank ID", "Bank Name", "Account No", "Branch"];

  const { isDark } = React.useContext(DarkmodeEnable);
  return (
    <Box
      sx={{
        width: "80%",
        marginLeft: "280px",
        marginTop: "120px",
        height: "100vh",
      }}
    >
      <Typography
        sx={{
          my: "30px",
          fontSize: "18px",
          color: "#DC143C",
          fontWeight: "600",
        }}
      >
        Add Bank
      </Typography>
      <Grid container spacing={3.5}>
        {bankArr.map((e, index) => (
          <Grid item xs={3}>
            <TextField
              id="outlined-basic"
              placeholder={e}
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

export default AddBank;
