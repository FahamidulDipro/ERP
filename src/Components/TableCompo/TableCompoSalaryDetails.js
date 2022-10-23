import * as React from "react";
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
import { useLocation, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [deduction, setDeduction] = React.useState(false);
  const [advance, setAdvance] = React.useState(false);
  const { isDark } = React.useContext(DarkmodeEnable);
  const properties = Object.keys(row);
  return (
    <React.Fragment>
      <TableRow sx={{ background: "#70A5D8" }}>
        <TableCell align="center" colSpan={1}></TableCell>
        <TableCell
          align="center"
          colSpan={1}
          sx={{
            background: "#003566",
            borderRadius: "10px 0 0 0",
          }}
        >
          <span style={{ color: "white" }}>Amount</span>
        </TableCell>
        <TableCell
          align="center"
          colSpan={1}
          sx={{ background: "#003566", borderRadius: "0 10px 0 0" }}
        >
          <span style={{ color: "white" }}>Action</span>
        </TableCell>
        <TableCell align="center" colSpan={1}></TableCell>
        <TableCell
          align="center"
          colSpan={1}
          sx={{ background: "#003566", borderRadius: "10px 0 0 0" }}
        >
          <span style={{ color: "white" }}>Amount</span>
        </TableCell>
        <TableCell align="center" colSpan={1} sx={{ background: "#003566" }}>
          <span style={{ color: "white" }}>Date</span>
        </TableCell>
        <TableCell
          align="center"
          colSpan={1}
          sx={{ background: "#003566", borderRadius: "0 10px 0 0" }}
        >
          <span style={{ color: "white" }}>Action</span>
        </TableCell>
        <TableCell align="center" colSpan={1}></TableCell>
        <TableCell align="center" colSpan={1}></TableCell>
      </TableRow>
      <TableRow className={`${isDark ? "t_body_dark" : "t_body"}`}>
        {properties.map((property, index) =>
          row[properties[index]] === "update" ? (
            <TableCell align="center">
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setDeduction(!deduction)}
                sx={{ color: `${isDark ? "white" : "#003566"}` }}
              >
                {deduction ? (
                  <p
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      width: "100px",
                      fontSize: "15px",
                      textDecoration: "underline",
                    }}
                  >
                    Cancel
                  </p>
                ) : (
                  <p
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      width: "100px",
                      fontSize: "15px",
                      textDecoration: "underline",
                    }}
                  >
                    Update
                  </p>
                )}
              </IconButton>
            </TableCell>
          ) : row[properties[index]] === "update_advance" ? (
            <TableCell align="center">
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setAdvance(!advance)}
                sx={{ color: `${isDark ? "white" : "#003566"}` }}
              >
                {advance ? (
                  <p
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      width: "100px",
                      fontSize: "15px",
                      textDecoration: "underline",
                    }}
                  >
                    Cancel
                  </p>
                ) : (
                  <p
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      width: "100px",
                      fontSize: "15px",
                      textDecoration: "underline",
                    }}
                  >
                    Update
                  </p>
                )}
              </IconButton>
            </TableCell>
          ) : (
            <TableCell
              component="th"
              scope="row"
              align="center"
              sx={{
                color: `${isDark ? "white" : "#003566"}`,
              }}
            >
              {row[properties[index]]}
            </TableCell>
          )
        )}

        <TableCell align="center">
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
          colSpan={9}
        >
          <Collapse
            in={open || deduction || advance}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%", marginBottom: "30px" }}
          >
            {/* Collapsed Detail section with input textfields */}
            <Box sx={{ margin: 3 }}>
              <Grid container spacing={2.5}>
                {properties.map((p, index) => (
                  <Grid item xs={2.4}>
                    <TextField
                      placeholder={row[properties[index]]}
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      className={`${isDark ? "input_dark" : "input_light"}`}
                      sx={{
                        "& fieldset": { border: "none" },
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
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const TableCompoSalaryDetails = () => {
  const location = useLocation();
  const rows = location.state.otherRows;
  const arr = location.state.otherHeadingArr;
  const empRows = location.state.rows;
  const { isDark } = React.useContext(DarkmodeEnable);
  return (
    <Box sx={{ width: "100%", marginLeft: "270px", height: "100vh" }}>
      <p
        className="info"
        style={{
          color: `${isDark ? "white" : "#003566"}`,
          fontWeight: "600",
          marginTop: "100px",
          fontSize: "35px",
          textDecoration: "underline",
        }}
      >
        Salary Details{" "}
      </p>
      <p
        style={{
          color: `${isDark ? "white" : "#003566"}`,
          fontSize: "25px",
          fontWeight: "500",
        }}
      >
        {empRows[0].name}
      </p>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "15%" }}
      >
        <p style={{ color: "#70A5D8", fontSize: "15px", fontWeight: "500" }}>
          #{empRows[0].id}
        </p>
        <p style={{ color: "#70A5D8", fontSize: "15px", fontWeight: "500" }}>
          Fly Far Trips
        </p>
      </Box>
      <p
        style={{
          color: "#70A5D8",
          fontSize: "15px",
          fontWeight: "500",
          marginTop: "30px",
        }}
      >
        Salary Calculations{" "}
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
            <TableRow sx={{ backgroundColor: "#70A5D8" }}>
              {arr.map((tc) => (
                <TableCell
                  align="center"
                  sx={{ color: "white", p: "10px", textAlign: "center" }}
                >
                  {tc}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <Row row={rows[0]} />
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableCompoSalaryDetails;
