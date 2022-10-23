import { Box } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Control = () => {
  return (
    <Box>
      {" "}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        <Box
          sx={{
            display: "block",
            alignItems: "center",
            mt: "20px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <NavLink
            to="/manageWebsite/www.flyfarint.com/control/apipage"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            {" "}
            API
          </NavLink>

          <NavLink
            to="/manageWebsite/www.flyfarint.com/control/airlinepage"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Airlines
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/control/currencypage"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Currency
          </NavLink>
        </Box>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Control;
