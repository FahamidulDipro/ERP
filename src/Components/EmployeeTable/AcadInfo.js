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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Grid, TextField } from "@mui/material";
import { DarkmodeEnable } from "../../App";

function createData(certName, instName, passYear, result, academicSession) {
  return {
    certName,
    instName,
    passYear,
    result,
    academicSession,
  };
}
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const { isDark } = React.useContext(DarkmodeEnable);

  return (
    <React.Fragment>
      <TableRow className={`${isDark ? "t_body_dark" : "t_body"}`}>
        <TableCell></TableCell>

        <TableCell
          component="th"
          scope="row"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}
        >
          {row.certName}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.instName}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.passYear}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.result}
        </TableCell>
        <TableCell
          align="left"
          sx={{ color: `${isDark ? "white" : "#003566"}` }}
        >
          {row.academicSession}
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
          colSpan={7}
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
                    value={row.certName}
                    id="outlined-basic"
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
                    value={row.instName}
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
                    value={row.passYear}
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
                    value={row.result}
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
                    value={row.academicSession}
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
    "School Secondary Certificate",
    "BCIC School",
    "2013",
    "5.00",
    "2013"
  ),
  createData(
    "Heigher Secondary Certificate",
    "BCIC School",
    "2013",
    "5.00",
    "2013"
  ),
  createData(
    "B.sc In Computer Science and Engineering",
    "North South University",
    "2013",
    "5.00",
    "2013"
  ),
  createData(
    "M.sc In Computer Science and Engineering",
    "North South University",
    "2013",
    "5.00",
    "2013"
  ),
];

const AcadInfo = () => {
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
        Academic Information
      </p>
      <TableContainer
        component={Paper}
        sx={{
          width: "95%",
          marginTop: "30px",
          boxShadow: "none",
        }}
      >
        <Table aria-label="collapsible table">
          <TableHead sx={{ background: "#70A5D8" }}>
            <TableRow>
              <TableCell />
              <TableCell sx={{ color: "white" }}>Name of Certificate</TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Name of Institute
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Passing Year
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Result
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Academic Session
              </TableCell>
              <TableCell sx={{ color: "white" }}>Change</TableCell>
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

export default AcadInfo;
