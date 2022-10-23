import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./EmployeeTable.css";
import { DarkmodeEnable } from "../../App";
import { NavLink } from "react-router-dom";
const EmployeeTable = () => {
  const { isDark } = useContext(DarkmodeEnable);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
    createData("Gingerbread2", 356, 16.0, 49, 3.9),
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#70A5D8" }}>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Employee ID
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Employee Name
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Department
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Designation
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Joining Date
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Email
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Phone
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              View Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={`${isDark ? "table_body_dark" : "table_body"}`}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: "none" } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "#003566"}`,
                }}
              >
                {row.name}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                }}
              >
                {row.calories}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                  background: ``,
                }}
              >
                {row.fat}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                }}
              >
                {row.carbs}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                }}
              >
                {row.protein}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                }}
              >
                {row.protein}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                }}
              >
                {row.protein}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                }}
              >
                <NavLink
                  to="/details"
                  style={{ color: `${isDark ? "white" : "#003566"}` }}
                >
                  View Details
                </NavLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeTable;
