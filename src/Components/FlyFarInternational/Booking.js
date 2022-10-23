import { Box } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Booking.css";
const Booking = () => {
  return (
    <Box>
      {" "}
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "20px",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/all"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            {" "}
            ALL
          </NavLink>

          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/hold"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Hold
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/issued"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Issued on process
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/ticketed"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Tickted
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/expired"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Expired{" "}
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/cancelled"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Cancelled
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/reissued"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Reissued
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/void"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Void
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/booking/refund"
            className={({ isActive }) =>
              isActive ? "active-booking-link" : "booking-link"
            }
          >
            Refund
          </NavLink>
        </Box>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Booking;
