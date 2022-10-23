import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { DarkmodeEnable } from "../../App";
import { useNavigate } from "react-router-dom";
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

const attTableHeading = [
  "Date",
  "Day",
  "Time In",
  "Time Out",
  "Location",
  "Hours Spent",
  "Status",
  "Reason",
];
const rows = [
  createData(
    "10 July",
    "Monday",
    "09:10 am",
    "12:00 pm",
    "Home",
    "09 hrs",
    "On Time",
    "---------------"
  ),
  createData(
    "10 July",
    "Monday",
    "09:10 am",
    "12:00 pm",
    "Home",
    "09 hrs",
    "Late",
    "Tech Team"
  ),
];

const Attendance = () => {
  const navigate = useNavigate();
  const { isDark } = React.useContext(DarkmodeEnable);
  const handleAttDetails = () => {
    navigate("/attandanceDetails");
  };
  return (
    <Box>
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
            cursor: "pointer",
          }}
          onClick={handleAttDetails}
        >
          Attandance{" "}
        </p>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <div>
            {" "}
            <label
              for="cars"
              style={{
                color: `${isDark ? "white" : "#003566"}`,
                fontWeight: "600",

                marginRight: "20px",
              }}
            >
              {" "}
              Download July Attandance Report{" "}
            </label>
            <select
              id="cars"
              style={{ border: "1px solid #70A5D8", padding: "5px" }}
            >
              <option value="volvo">July 2020</option>
              <option value="volvo">August 2020</option>
              <option value="volvo">September 2020</option>
            </select>
          </div>
        </Box>
      </Box>

      <TableCompoWithoutAction
        arr={attTableHeading}
        rows={rows}
      ></TableCompoWithoutAction>
    </Box>
  );
};

export default Attendance;
