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
import { Button, Typography } from "@mui/material";
import { DarkmodeEnable } from "../../App";
import AlertDialogueForNotification from "../AlertDialogue/AlertDialogueForNotification";

function Row({ row, arr }) {
    const [open, setOpen] = useState(false);
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
                                Cancel
                            </p>
                        ) : (
                            <p
                                style={{
                                    padding: "5px",
                                    textAlign: "center",
                                    width: "100px",
                                    fontSize: "15px",
                                    background: "#003566",
                                    fontWeight: "600",
                                    color: "white",
                                }}
                            >
                                Update
                            </p>
                        )}
                    </IconButton>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => { }}
                        sx={{ color: `${isDark ? "white" : "#003566"}` }}
                    >
                        <AlertDialogueForNotification />
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


                            <Box>
                                <Typography sx={{ fontSize: "12px", color: "#03566", border: "1px solid #003566", my: "20px", width: "15%", p: "10px" }}>Dubai Visa is now open</Typography>
                                <Typography sx={{ fontSize: "12px", color: "#03566", border: "1px solid #003566", my: "20px", p: "10px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vulputate pharetra, diam ornare ornare. Eu aenean massa viverra cras eget integer lobortis mauris. Fermentum convallis cursus ante nulla senectus erat varius. Ac mauris mattis risus vitae malesuada sit purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vulputate pharetra, diam ornare ornare. Eu aenean massa viverra cras eget integer lobortis mauris. Fermentum convallis cursus ante nulla senectus erat varius. Ac mauris mattis risus vitae malesuada sit purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vulputate pharetra, diam ornare ornare. Eu aenean massa viverra cras eget integer lobortis mauris. Fermentum convallis cursus ante nulla senectus erat varius. Ac mauris mattis risus vitae malesuada sit purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam vulputate pharetra, diam ornare ornare. Eu aenean massa viverra cras eget integer lobortis mauris. Fermentum convallis cursus ante nulla senectus erat varius. Ac mauris mattis risus vitae malesuada sit purus.Lorem ipsum dolor sit amet, </Typography>
                            </Box>
                            <Box

                            >
                                <Button
                                    sx={{
                                        width: "10%",
                                        color: "white",
                                        borderRadius: "0",
                                        backgroundColor: "#003566",
                                        "&:hover": {
                                            backgroundColor: "#003566",
                                        },
                                        float: "right"

                                    }}
                                >
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
const TableNotification = ({ rows, arr }) => {
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
export default TableNotification;
