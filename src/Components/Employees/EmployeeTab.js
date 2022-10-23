import { Button } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Stack, Tab, TableHead, TableRow } from "@mui/material";
import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { DarkmodeEnable } from "../../App";
import EmployeeTable from "../EmployeeTable/EmployeeTable";
import TableCompo from "../TableCompo/TableCompo";
import "./EmployeeTab.css";
const EmployeeTab = () => {
  const [value, setValue] = useState("1");
  const { isDark } = useContext(DarkmodeEnable);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const handleEmployeeDetails = () => {
    navigate("/employeeDetailsForm");
  };

  const flyfarintArr = [
    "Employee ID",
    "Employee Name",
    "Department",
    "Designation",
    "Joining Date",
    "Email",
    "Phone",
    "Action",
  ];
  function createData(id, name, dept, des, join, email, phone) {
    return { id, name, dept, des, join, email, phone };
  }

  const rows = [
    createData(
      "001",
      "Kayes Fuad",
      "Tech",
      "Chief Technical Officer",
      "21/12/2022",
      "kayes@flyfarint.com",
      "+880 18455455"
    ),
    createData(
      "001",
      "Kayes Fuad",
      "Tech",
      "Chief Technical Officer",
      "21/12/2022",
      "kayes@flyfarint.com",
      "+880 18455455"
    ),
    createData(
      "001",
      "Kayes Fuad",
      "Tech",
      "Chief Technical Officer",
      "21/12/2022",
      "kayes@flyfarint.com",
      "+880 18455455"
    ),
    createData(
      "001",
      "Kayes Fuad",
      "Tech",
      "Chief Technical Officer",
      "21/12/2022",
      "kayes@flyfarint.com",
      "+880 18455455"
    ),
  ];
  return (
    <Box sx={{ typography: "body1", width: "100%" }}>
      <TabContext value={value}>
        <Stack spacing={4} direction="row">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Fly Far International"
              value="1"
              sx={{
                opacity: `${value == 1 ? "1" : "1"}`,
                background: `${value == 1 ? "#E0ECFB" : "#003566"}`,
                color: `${value == 1 ? "#003566" : "white"}`,
              }}
            />
            <Tab
              label="Fly Far Ladies"
              value="2"
              sx={{
                opacity: `${value == 1 ? "1" : "1"}`,
                background: `${value == 2 ? "#E0ECFB" : "#003566"}`,
                color: `${value == 2 ? "#003566" : "white"}`,
              }}
            />
            <Tab
              label="Fly Far Trips"
              value="3"
              sx={{
                opacity: `${value == 1 ? "1" : "1"}`,
                background: `${value == 3 ? "#E0ECFB" : "#003566"}`,
                color: `${value == 3 ? "#003566" : "white"}`,
              }}
            />
            <Tab
              label="Fly Far Tech"
              value="4"
              sx={{
                opacity: `${value == 1 ? "1" : "1"}`,
                background: `${value == 4 ? "#E0ECFB" : "#003566"}`,
                color: `${value == 4 ? "#003566" : "white"}`,
              }}
            />
            <Tab
              label="Fly Far Education"
              value="5"
              sx={{
                opacity: `${value == 1 ? "1" : "1"}`,
                background: `${value == 5 ? "#E0ECFB" : "#003566"}`,
                color: `${value == 5 ? "#003566" : "white"}`,
              }}
            />
          </TabList>
          <Box>
            <form className={`${isDark ? "form_dark" : "form"}`}>
              <button type="submit">
                {" "}
                <BsSearch
                  className={`${isDark ? "search_icon_dark" : "search_icon"}`}
                ></BsSearch>
              </button>

              <input
                type="search"
                placeholder="Search"
                style={{ borderRadius: "none" }}
              />
            </form>
          </Box>

          <button
            style={{
              background: "#70A5D8",
              color: "white",
              border: "none",
              width: "15%",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={handleEmployeeDetails}
          >
            Add Employee
          </button>
        </Stack>
        <TabPanel value="1">
          <TableCompo
            arr={flyfarintArr}
            rows={rows}
            details="details"
          ></TableCompo>
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "100px" }}>
          <TableCompo arr={flyfarintArr} rows={rows}></TableCompo>
        </TabPanel>
        <TabPanel value="3">
          <TableCompo arr={flyfarintArr} rows={rows}></TableCompo>
        </TabPanel>
        <TabPanel value="4">
          <TableCompo arr={flyfarintArr} rows={rows}></TableCompo>
        </TabPanel>
        <TabPanel value="5">
          <TableCompo arr={flyfarintArr} rows={rows}></TableCompo>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default EmployeeTab;
