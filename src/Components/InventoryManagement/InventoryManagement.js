import { Button } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Box, Stack, Tab, TableHead, TableRow } from "@mui/material";
import React, { useContext, useState } from "react";
import { DarkmodeEnable } from "../../App";
import TableCompo from "../TableCompo/TableCompo";
import "./InventoryManagement.css";
import InventoryManagementTable from "./InventoryManagementTable";
const InventoryManagement = () => {
  const [value, setValue] = useState("1");
  const { isDark } = useContext(DarkmodeEnable);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const empDoc = ["Employee ID", "Name", "Department", "Designation", "Action"];
  const clientPassportArr = [
    "Client ID",
    "Name",
    "NID Number",
    "Passport Number",
    "Action",
  ];
  const electronicCompoArr = [
    "Equipment ID",
    "Name",
    "Quantity",
    "Used",
    "Unused",
    "Action",
  ];
  const stationaryCompoArr = [
    "Stationary ID",
    "Name",
    "Quantity",
    "Used",
    "Unused",
    "Action",
  ];
  //For creating table data
  function createDataEmpDoc(id, name, dept, des) {
    return { id, name, dept, des };
  }
  function createDataPassport(id, name, dept, des) {
    return { id, name, dept, des };
  }

  function createDataElectricComponents(id, name, quantity, used, unused) {
    return { id, name, quantity, used, unused };
  }
  function createStationaryComponents(id, name, quantity, used, unused) {
    return { id, name, quantity, used, unused };
  }

  const rowsEmpDoc = [
    createDataEmpDoc("001", "Kayes Fahim", "Fly far Tech", "CTO"),
    createDataEmpDoc("002", "James Bond", "Fly far Tech", "CTO"),
  ];
  const rowsPassport = [
    createDataPassport("7", "Kayes Fahim", "Fly far Tech", "CTO"),
    createDataPassport("007", "James Bond", "Fly far Tech", "CTO"),
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
        Inventory Management
      </h1>
      <Box sx={{ typography: "body1", width: "95%" }}>
        <TabContext value={value}>
          <Stack spacing={4} direction="row">
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="Employee Document"
                value="1"
                sx={{
                  opacity: `${value == 1 ? "1" : "1"}`,
                  background: `${value == 1 ? "#E0ECFB" : "#003566"}`,
                  color: `${value == 1 ? "#003566" : "white"}`,
                }}
              />
              <Tab
                label="Client Passport"
                value="2"
                sx={{
                  opacity: `${value == 1 ? "1" : "1"}`,
                  background: `${value == 2 ? "#E0ECFB" : "#003566"}`,
                  color: `${value == 2 ? "#003566" : "white"}`,
                }}
              />
              <Tab
                label="Electronic Comonents"
                value="3"
                sx={{
                  opacity: `${value == 1 ? "1" : "1"}`,
                  background: `${value == 3 ? "#E0ECFB" : "#003566"}`,
                  color: `${value == 3 ? "#003566" : "white"}`,
                }}
              />
              <Tab
                label="Stationary"
                value="4"
                sx={{
                  opacity: `${value == 1 ? "1" : "1"}`,
                  background: `${value == 4 ? "#E0ECFB" : "#003566"}`,
                  color: `${value == 4 ? "#003566" : "white"}`,
                }}
              />
            </TabList>
          </Stack>
          <TabPanel value="1">
            <TableCompo
              arr={empDoc}
              rows={rowsEmpDoc}
              details="employeeDoc"
            ></TableCompo>
          </TabPanel>
          <TabPanel value="2" sx={{ padding: "100px" }}>
            <TableCompo
              arr={clientPassportArr}
              rows={rowsPassport}
              details="clientPassportDetails"
            ></TableCompo>
          </TabPanel>
          <TabPanel value="3">
            <TableCompo
              arr={electronicCompoArr}
              rows={rowsElectricCompo}
              details="electronicComponentDetails"
            ></TableCompo>
          </TabPanel>
          <TabPanel value="4">
            <TableCompo
              arr={stationaryCompoArr}
              rows={rowsStationaryCompo}
              details="StationaryDetails"
            ></TableCompo>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default InventoryManagement;
