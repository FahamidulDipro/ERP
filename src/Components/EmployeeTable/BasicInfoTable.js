import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button, Grid, TextField } from "@mui/material";
import { DarkmodeEnable } from "../../App";

function createData(
  birthDate,
  bloodGrp,
  nid,
  passport,
  religion,
  maritalStatus,
  email,
  phone
) {
  return {
    birthDate,
    bloodGrp,
    nid,
    passport,
    religion,
    maritalStatus,
    email,
    phone,
  };
}
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const { isDark } = React.useContext(DarkmodeEnable);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "none" } }}
        className={`${isDark ? "t_body_dark" : "t_body"}`}
      >
        <TableCell></TableCell>

        <TableCell
          component="th"
          scope="row"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.birthDate}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.bloodGrp}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.nid}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.passport}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.religion}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.maritalStatus}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.email}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.phone}
        </TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            sx={{ color: `${isDark ? "white" : "#003566"}` }}
          >
            {open ? (
              <p
                style={{
                  padding: "5px",
                  border: `${isDark ? "1px solid white" : "1px solid #003566"}`,
                  textAlign: "center",
                  width: "100px",
                  fontSize: "15px",
                }}
              >
                Cancel
              </p>
            ) : (
              <p
                style={{
                  padding: "5px",
                  border: `${isDark ? "1px solid white" : "1px solid #003566"}`,
                  textAlign: "center",
                  width: "100px",
                  fontSize: "15px",
                }}
              >
                Edit
              </p>
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
          }}
          className={`${isDark ? "accordion_dark" : "accordion_light"}`}
          colSpan={10}
        >
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%", marginBottom: "30px" }}
          >
            {/* Collapsed Detail section with input textfields */}
            <Box sx={{ margin: 3 }}>
              <Grid container spacing={2.5}>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.birthDate}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.bloodGrp}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.birthDate}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.nid}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.passport}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.religion}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.maritalStatus}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.email}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
                <Grid item xs={2.4}>
                  <TextField
                    id="outlined-basic"
                    value={row.phone}
                    variant="outlined"
                    size="small"
                    className={`${isDark ? "input_dark" : "input_light"}`}
                    sx={{
                      "& fieldset": { border: "none" },
                    }}
                  />
                </Grid>
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
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
const rows = [
  createData(
    "21/12/1995",
    "AB+",
    "56951915955",
    "56951915955",
    "Islam",
    "Married",
    "kayes@flyfarint.com",
    "+894514156553"
  ),
];

const BasicInfoTable = () => {
  const { isDark } = React.useContext(DarkmodeEnable);

  return (
    <Box>
      <p
        className="info"
        style={{
          color: `${isDark ? "white" : "#003566"}`,
          fontWeight: "600",
          marginTop: "50px",
        }}
      >
        Basic Information
      </p>
      <TableContainer
        component={Paper}
        sx={{ width: "95%", marginTop: "30px", boxShadow: "none" }}
      >
        <Table aria-label="collapsible table">
          <TableHead sx={{ background: "#70A5D8" }}>
            <TableRow>
              <TableCell />
              <TableCell sx={{ color: "white" }}>Date Of Birth</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Blood Group
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                NID No
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Passport No
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Religion
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Martial Status
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Email
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                phone
              </TableCell>
              <TableCell sx={{ color: "white" }}>&nbsp;Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BasicInfoTable;
