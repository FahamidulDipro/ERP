import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DarkmodeEnable } from "../../App";
import "./FlyFarLadies.css";
const FlyFarLadies = () => {
  const { isDark } = React.useContext(DarkmodeEnable);
  const placeHolders = [
    {
      english: "Title Text English",
      bangla: "Title Text Bangla",
    },
    {
      english: "Main Text English",
      bangla: "Main Text Bangla",
    },
    {
      english: "Sub Heading Text English",
      bangla: "Sub Heading Text Bangla",
    },
    {
      english: "Pink Text English",
      bangla: "Pink Text Bangla",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: "100px",
        width: "80%",
        marginLeft: "50px",
        minHeight: "100vh",
      }}
    >
      <Typography sx={{ color: "#003566", fontWeight: "600" }}>
        Fly Far Ladies
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: "20px" }}>
        <Button className="selected_ladies">Home</Button>
        <Button className="not_selected_ladies">Packages</Button>
        <Button className="not_selected_ladies">Blogs</Button>
        <Button className="not_selected_ladies">Booking</Button>
      </Box>
      <Typography sx={{ color: "#212A41", fontWeight: "600", my: "20px" }}>
        Banner Section
      </Typography>
      <Box sx={{}}>
        {placeHolders.map((p) => (
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <TextField
                placeholder={`${p.english}`}
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
            <Grid item xs={4}>
              <TextField
                placeholder={`${p.bangla}`}
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "20px",
                ml: "20px",
              }}
            >
              <Button className="selected_ladies">Add</Button>
              <Button className="not_selected_ladies">View</Button>
            </Box>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default FlyFarLadies;
