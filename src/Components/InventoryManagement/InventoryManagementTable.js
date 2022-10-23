import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { DarkmodeEnable } from "../../App";
import { NavLink } from "react-router-dom";
const InventoryManagementTable = () => {
  const { isDark } = useContext(DarkmodeEnable);
  function createData(id, name, dept, des) {
    return { id, name, dept, des };
  }

  const rows = [
    createData("001", "Kayes Fahim", "Fly far Tech", "CTO"),
    createData("001", "Kayes Fahim", "Fly far Tech", "CTO"),
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
              Name
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Department
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Designation
            </TableCell>
            <TableCell align="center" sx={{ color: "white", p: "10px" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={`${isDark ? "table_body_dark" : "table_body"}`}>
          {rows.map((row) => (
            <TableRow
              key={row.id}
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
                {row.id}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
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
                  background: ``,
                }}
              >
                {row.dept}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                }}
              >
                {row.des}
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

export default InventoryManagementTable;
