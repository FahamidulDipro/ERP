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
const TableCompo = ({ arr, rows, details, otherHeadingArr, otherRows }) => {
  const { isDark } = useContext(DarkmodeEnable);
  const valuesArray = rows.map((r) => Object.values(r));
  const ind = valuesArray[0];

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
      }}
    >
      {console.log(otherHeadingArr)}
      {console.log(otherRows)}
      <Table aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#70A5D8" }}>
            {arr.map((tc) => (
              <TableCell align="center" sx={{ color: "white", p: "10px" }}>
                {tc}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className={`${isDark ? "table_body_dark" : "table_body"}`}>
          {valuesArray.map((row, i) => (
            <TableRow
              key={row[0]}
              sx={{ "&:last-child td, &:last-child th": { border: "none" } }}
            >
              {ind.map((e, index) => (
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
                  {row[index]}
                </TableCell>
              ))}

              <TableCell
                sx={{
                  textAlign: "center",
                  border: "none",
                  p: "10px",
                  color: `${isDark ? "white" : "003566"}`,
                }}
              >
                <NavLink
                  to={{
                    pathname: `/${details}/${row[0]}`,
                  }}
                  state={{
                    rows: rows,
                    arr: arr,
                    otherHeadingArr: otherHeadingArr,
                    otherRows: otherRows,
                    
                  }}
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

export default TableCompo;
