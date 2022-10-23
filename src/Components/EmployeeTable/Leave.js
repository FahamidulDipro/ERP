import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { DarkmodeEnable } from "../../App";
import TableCompo from "../TableCompo/TableCompo";
import TableCompoWithoutAction from "../TableCompo/TableCompoWithoutAction";

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

const leaveTableHeading = [
  "Request Date",
  "Reason",
  "Type",
  "Start Date",
  "End date",
  "Leave Count",
  "Status",
];
const rows = [
  createData(
    "10 July",
    "View",
    "Annual",
    "21/12/2000",
    "21/12/2000",
    "1",
    "Accept"
  ),
  createData(
    "11 July",
    "View",
    "Annual",
    "21/12/2000",
    "21/12/2000",
    "1",
    "Accept"
  ),
  createData(
    "12 July",
    "View",
    "Annual",
    "21/12/2000",
    "21/12/2000",
    "3",
    "Rejected"
  ),
];

const Leave = () => {
  const { isDark } = React.useContext(DarkmodeEnable);

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          alignContent: "center",
        }}
      >
        <p
          className="info"
          style={{
            color: `${isDark ? "white" : "#003566"}`,
            fontWeight: "600",
            marginTop: "50px",
          }}
        >
          Leave{" "}
        </p>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <p
            className="info"
            style={{
              color: `${isDark ? "white" : "#003566"}`,
              fontWeight: "600",
              marginTop: "50px",
            }}
          >
            Leave Count 02/10
          </p>
        </Box>
      </Box>

      <TableCompoWithoutAction
        arr={leaveTableHeading}
        rows={rows}
      ></TableCompoWithoutAction>
    </Box>
  );
};

export default Leave;
