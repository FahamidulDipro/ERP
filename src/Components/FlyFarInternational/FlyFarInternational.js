import {
 
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { DarkmodeEnable } from "../../App";
import "./FlyFarInternational.css";
const FlyFarInternational = () => {
  const { isDark } = React.useContext(DarkmodeEnable);

  return (
    <Box
      sx={{
        marginTop: "100px",
        width: "90%",
        marginLeft: "270px",
        minHeight: "100vh",
      }}
    >
      <Typography
        sx={{
          color: `${isDark ? "white" : "#003566"}`,
          fontWeight: "600",
          fontSize: "23px",
          lineHeight: "10px",
        }}
      >
        Fly Far International
      </Typography>
      <Box sx={{ display: "block", flexWrap: "wrap" }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "15px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <NavLink
            to="/manageWebsite/www.flyfarint.com/home"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            style={{fontSize:'14px'}}
          >
            {" "}
            Home
          </NavLink>
          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/control/apipage"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Control
          </NavLink>

          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/agent/all"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Agent
          </NavLink>
          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/booking/all"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Booking
          </NavLink>
          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/payment/all"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Payment
          </NavLink>
          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/ticketing"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Ticketing
          </NavLink>

          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/groupFare"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Group Fare
          </NavLink>
          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/tourPackage"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Tour Package
          </NavLink>
          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/searchList"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Search List
          </NavLink>
          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/activityLog"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Activity Log
          </NavLink>
          <NavLink
           style={{ fontSize: "14px" }}
            to="/manageWebsite/www.flyfarint.com/notifications"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            Notifications
          </NavLink>
        </Box>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default FlyFarInternational;
