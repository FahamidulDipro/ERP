import React, { useState, useContext } from "react";
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
import { Button, Grid, TextField, Typography } from "@mui/material";
import { DarkmodeEnable } from "../../App";
import AlertDialog from "../AlertDialogue/AlertDialogue";

function Row({ row, arr }) {
  const [open, setOpen] = useState(false);
  const [debitOpen, setDebitOpen] = useState(false);
  const { isDark } = useContext(DarkmodeEnable);
  const properties = Object.keys(row);
  return (
    <React.Fragment>
      <TableRow className={`${isDark ? "t_body_dark" : "t_body"}`}>
        {properties.map((property, index) => (
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
        ))}
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              setDebitOpen(false);
              setOpen(!open);
            }}
            sx={{ color: `${isDark ? "white" : "#003566"}` }}
          >
            {open ? (
              <p
                style={{
                  padding: "5px",
                  fontWeight: "600",
                  textAlign: "center",
                  width: "100px",
                  fontSize: "15px",
                  background: "#003566",
                  color: `${isDark || open ? "white" : "#003566"}`,
                }}
              >
                Edit
              </p>
            ) : (
              <p
                style={{
                  padding: "5px",
                  textAlign: "center",
                  width: "100px",
                  fontSize: "15px",
                  background: "#D9D9D9",
                  fontWeight: "600",
                  color: "#003566",
                }}
              >
                Edit
              </p>
            )}
          </IconButton>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {}}
            sx={{ color: `${isDark ? "white" : "#003566"}` }}
          >
            <AlertDialog></AlertDialog>
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
            in={open || debitOpen}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%", marginBottom: "30px" }}
          >
            {/* Collapsed Detail section with input textfields */}
            <Box sx={{ margin: 3 }}>
              <Typography
                sx={{
                  color: `${isDark ? "white" : "#003566"}`,
                  marginBottom: "10px",
                  fontWeight: "600",
                }}
              >
                Edit Balance
              </Typography>

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
const TableCompoWithEditDelete = ({ rows, arr }) => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "100vh",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: "100%",
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
            {rows.map((row) => (
              <Row key={row.id} row={row} arr={arr} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default TableCompoWithEditDelete;
