import React, { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { DarkmodeEnable } from "../../App";
import "./TableCompoWithOperation.css";
import Loader from "../Loader/Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

function Row({ row, arr }) {
  const { isDark } = useContext(DarkmodeEnable);
  const properties = Object.keys(row);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <TableRow className={`${isDark ? "t_body_dark" : "t_body"}`}>



        <TableCell component="th"
          scope="row"
          align="center"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}>

          {row.agentId}
        </TableCell>
        <TableCell component="th"
          scope="row"
          align="center"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}>

          {row.name}
        </TableCell>
        <TableCell component="th"
          scope="row"
          align="center"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}>

          {row.email}
        </TableCell>
        <TableCell component="th"
          scope="row"
          align="center"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}>

          {row.phone}
        </TableCell>
        <TableCell component="th"
          scope="row"
          align="center"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}>

          {row.status}
        </TableCell>
        <TableCell component="th"
          scope="row"
          align="center"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}>
          {row.company}
        </TableCell>
        <TableCell component="th"
          scope="row"
          align="center"
          sx={{
            color: `${isDark ? "white" : "#003566"}`,
          }}>
          50000
        </TableCell>

        <TableCell align="center">
          {/* Modal Section Starts */}
          <div >
            <Button
              onClick={handleOpen}
              sx={{ color:`${isDark?"white":"#003566"}`, fontWeight: "600" }}
            >
              Details
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"

            >
              <Box sx={style}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ width: "100%" }}>
                    {" "}
                    <Typography sx={{ color: "#70A5D8", fontSize: "17px" }}>
                      Agent ID: &nbsp;&nbsp;&nbsp;#{row.agentId}
                    </Typography>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                      sx={{ fontSize: "25px", color: "#003566",fontWeight:"bold" }}
                    >
                      Fly Far International
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{
                        mt: 2,
                        width: "70%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span sx={{ width: "40%" }}>Agent Name: </span>{" "}
                      <span
                        style={{
                          width: "60%",
                          textAlign: "left",
                          marginLeft: "10%"

                        }}
                      >
                        {row.name}
                      </span>
                
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{
                        mt: 2,
                        width: "70%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ width: "30%", }}>
                        Email:{" "}
                      </span>{" "}
                      <span
                        style={{
                          width: "60%",
                          textAlign: "left",
                          marginLeft: "10%"

                        }}
                      >
                        {row.email}
                      </span>
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{
                        mt: 2,
                        width: "70%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span sx={{ width: "40%" }}>Phone Number : </span>{" "}
                      <span
                        style={{
                          width: "60%",
                          textAlign: "left",

                        }}
                      >
                        {row.phone}
                      </span>
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{
                        mt: 2,
                        width: "70%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span sx={{ width: "40%" }}>Company Address: </span>{" "}
                      <span
                        style={{
                          width: "60%",
                          textAlign: "left",
                         
                        }}
                      >
                        {row.companyadd}
                      </span>
                    </Typography>
                  </Box>
                  <Box  sx={{marginTop:"-15px"}}>
                    <img src={row.companyImage} width="171px"  />
                  </Box>
                </Box>
                <Box sx={{ float: "right" }} >

                  <Button sx={{
                    background: "#003566", color: "white", marginRight: "10px", borderRadius: "0", "&:hover": {
                      background: "#003566"
                    }
                  }}>Hold</Button>
                  <Button sx={{
                    background: "#DC143C", color: "white", borderRadius: "0", "&:hover": {
                      background: "#DC143C"
                    }
                  }}>Delete</Button>

                </Box>
              </Box>
            </Modal>
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const TableCompoWithOperation = ({ rows, arr,isLoading }) => {
 

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative"
      }}
    >
      {/* Loading Spinner */}
      {
        isLoading && <Box sx={{ display: "flex", justifyContent: "center", padding: "20px", position: "absolute", top: "20%", width: "100%" }} spacing={2} direction="row">
          <Loader></Loader>

        </Box>
      }
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
            {/* {console.log("All Rows ", allRows)}
            {console.log(" Rows ", rows)} */}
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <Row key={row.id} row={row} arr={arr} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default TableCompoWithOperation;
