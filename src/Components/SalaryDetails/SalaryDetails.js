import { Button } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Stack, Tab, TableHead, TableRow } from "@mui/material";
import React, { useContext, useState } from "react";
import { DarkmodeEnable } from "../../App";
import TableCompo from "../TableCompo/TableCompo";
import SalaryDetailsCards from "./SalaryDetailsCards";

const SalaryDetails = () => {
  const [value, setValue] = useState("1");
  const { isDark } = useContext(DarkmodeEnable);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const empDoc = [
    "Employee ID",
    "Name",
    "Email",
    "Salary",
    "Status",
    "Paid Date",
    "Paid Amount",
    "Action",
  ];
  const salaryClaculationArr = [
    "Salary",
    "Overtime",
    "Diduction",
    "Total Salary",
    "Advanced",
    "Due",
    "Total Paid",
    "Paid Date",
    "Action",
  ];

  const flyFarLadiesArr = [
    "Client ID",
    "Name",
    "NID Number",
    "Passport Number",
    "Action",
  ];
  const flyFarTripsArr = [
    "Equipment ID",
    "Name",
    "Quantity",
    "Used",
    "Unused",
    "Action",
  ];
  const flyFarTechArr = [
    "Stationary ID",
    "Name",
    "Quantity",
    "Used",
    "Unused",
    "Action",
  ];
  const flyFarEduArr = [
    "Stationary ID",
    "Name",
    "Quantity",
    "Used",
    "Unused",
    "Action",
  ];
  //For creating table data
  function createDataEmpDoc(
    id,
    name,
    email,
    salary,
    status,
    paidDate,
    paidAmount
  ) {
    return { id, name, email, salary, status, paidDate, paidAmount };
  }
  function createDataSalary(
    salary,
    overtime,
    diduction,
    totalSalary,
    advanced,
    due,
    totalPaid,
    paidDate
  ) {
    return {
      salary,
      overtime,
      diduction,
      totalSalary,
      advanced,
      due,
      totalPaid,
      paidDate,
    };
  }

  function createDataElectricComponents(id, name, quantity, used, unused) {
    return { id, name, quantity, used, unused };
  }
  function createStationaryComponents(id, name, quantity, used, unused) {
    return { id, name, quantity, used, unused };
  }

  const rowsEmpDoc = [
    createDataEmpDoc(
      "001",
      "Syed Afridi",
      "afridi@flyfarint.com",
      "15,000",
      "Paid",
      "21/12/2000",
      "10000"
    ),
    createDataEmpDoc(
      "002",
      "Syed Afridi",
      "afridi@flyfarint.com",
      "15,000",
      "Paid",
      "21/12/2000",
      "10000"
    ),
    createDataEmpDoc(
      "003",
      "Syed Afridi",
      "afridi@flyfarint.com",
      "15,000",
      "Paid",
      "21/12/2000",
      "10000"
    ),
    createDataEmpDoc(
      "004",
      "Syed Afridi",
      "afridi@flyfarint.com",
      "15,000",
      "Paid",
      "21/12/2000",
      "10000"
    ),
  ];
  const rowsSalary = [
    createDataSalary(
      "15000",
      "15000",
      "update",
      "15000",
      "15000",
      "12/05/2022",
      "update_advance",
      "15000",
      "15000",
      "12/05/2022"
    ),
  ];
  const rowsElectricCompo = [
    createDataElectricComponents("001", "Laptop", "20", "15", "5"),
    createDataElectricComponents("001", "Mobile", "20", "16", "3"),
    createDataElectricComponents("001", "Monitor", "20", "17", "2"),
    createDataElectricComponents("001", "PC", "20", "18", "4"),
  ];
  const rowsStationaryCompo = [
    createStationaryComponents("001", "Sticky Notes", "1000", "780", "220"),
    createStationaryComponents("001", "Pen", "1000", "800", "200"),
  ];

  return (
    <div style={{ width: "81%", marginLeft: "30px", height: "100vh" }}>
      <h1
        className="heading"
        style={{
          textAlign: "left",
          fontSize: "23px",
          color: `${isDark ? "white" : "#003566"}`,
          marginTop: "120px",
          marginBottom: "50px",
          textDecoration: "underline",
        }}
      >
        Salary Details
      </h1>
      <SalaryDetailsCards></SalaryDetailsCards>
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
                  textTransform: "capitalize",
                }}
              />
              <Tab
                label="Fly Far Ladies"
                value="2"
                sx={{
                  opacity: `${value == 1 ? "1" : "1"}`,
                  background: `${value == 2 ? "#E0ECFB" : "#003566"}`,
                  color: `${value == 2 ? "#003566" : "white"}`,
                  textTransform: "capitalize",
                }}
              />
              <Tab
                label="Fly Far Trips"
                value="3"
                sx={{
                  opacity: `${value == 1 ? "1" : "1"}`,
                  background: `${value == 3 ? "#E0ECFB" : "#003566"}`,
                  color: `${value == 3 ? "#003566" : "white"}`,
                  textTransform: "capitalize",
                }}
              />
              <Tab
                label="Fly Far Tech"
                value="4"
                sx={{
                  opacity: `${value == 1 ? "1" : "1"}`,
                  background: `${value == 4 ? "#E0ECFB" : "#003566"}`,
                  color: `${value == 4 ? "#003566" : "white"}`,
                  textTransform: "capitalize",
                }}
              />
              <Tab
                label="Fly Far Education"
                value="5"
                sx={{
                  opacity: `${value == 1 ? "1" : "1"}`,
                  background: `${value == 4 ? "#E0ECFB" : "#003566"}`,
                  color: `${value == 4 ? "#003566" : "white"}`,
                  textTransform: "capitalize",
                }}
              />
            </TabList>
          </Stack>
          <TabPanel value="1">
            <TableCompo
              arr={empDoc}
              rows={rowsEmpDoc}
              otherHeadingArr={salaryClaculationArr}
              otherRows={rowsSalary}
              details="salary-details"
            ></TableCompo>
          </TabPanel>
          <TabPanel value="2" sx={{ padding: "100px" }}>
            <TableCompo
              arr={empDoc}
              rows={rowsEmpDoc}
              details="clientPassportDetails"
            ></TableCompo>
          </TabPanel>
          <TabPanel value="3">
            <TableCompo
              arr={empDoc}
              rows={rowsEmpDoc}
              details="electronicComponentDetails"
            ></TableCompo>
          </TabPanel>
          <TabPanel value="4">
            <TableCompo
              arr={empDoc}
              rows={rowsEmpDoc}
              details="SalaryDetails"
            ></TableCompo>
          </TabPanel>
          <TabPanel value="5">
            <TableCompo
              arr={empDoc}
              rows={rowsEmpDoc}
              details="SalaryDetails"
            ></TableCompo>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default SalaryDetails;
