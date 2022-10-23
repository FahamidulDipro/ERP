import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { DarkmodeEnable } from "../../App";

const Pax = ({ index }) => {
  const { isDark } = React.useContext(DarkmodeEnable);

  return (
    <Box mt={5}>
      <Typography
        mb={3}
        color={`${isDark ? "white" : "#003566"}`}
        sx={{ fontSize: "17px", fontWeight: "600" }}
      >
        Pax {index}
      </Typography>
      <Grid container spacing={4} mb={3}>
        <Grid item xs={3}>
          <TextField
            placeholder="Pax Name"
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
            placeholder="Service Type"
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
            placeholder="Amount"
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
      <Typography color={`${isDark ? "white" : "#003566"}`} mt={3}>
        Service Details
      </Typography>
      <Box mt={2}>
        {" "}
        <FormControlLabel
          control={
            <Checkbox
              className={`${isDark ? "checkbox_dark" : "checkbox_light"}`}
            />
          }
          label="Air Ticket"
          className={`${isDark ? "label_dark" : "label_light"}`}
        />
        <FormControlLabel
          control={
            <Checkbox
              className={`${isDark ? "checkbox_dark" : "checkbox_light"}`}
            />
          }
          label="Visa Processing"
          className={`${isDark ? "label_dark" : "label_light"}`}
        />
        <FormControlLabel
          control={
            <Checkbox
              className={`${isDark ? "checkbox_dark" : "checkbox_light"}`}
            />
          }
          label="Travel Assistancy"
          className={`${isDark ? "label_dark" : "label_light"}`}
        />
        <FormControlLabel
          control={
            <Checkbox
              className={`${isDark ? "checkbox_dark" : "checkbox_light"}`}
            />
          }
          label="Covid Test"
          className={`${isDark ? "label_dark" : "label_light"}`}
        />
        <FormControlLabel
          control={
            <Checkbox
              className={`${isDark ? "checkbox_dark" : "checkbox_light"}`}
            />
          }
          label="Transportation"
          className={`${isDark ? "label_dark" : "label_light"}`}
        />
        <FormControlLabel
          control={
            <Checkbox
              className={`${isDark ? "checkbox_dark" : "checkbox_light"}`}
            />
          }
          label="Document Assistancy"
          className={`${isDark ? "label_dark" : "label_light"}`}
        />
      </Box>
    </Box>
  );
};

export default Pax;
