import { Box } from "@mui/material";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Agent = () => {
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
            to="/manageWebsite/www.flyfarint.com/agent/all"
            className={({ isActive }) =>
              isActive ? "selected_tab" : "not_selected_tab"
            }
          >
            {" "}
            ALL
          </NavLink>

          <NavLink
            to="/manageWebsite/www.flyfarint.com/agent/pending"
            className={({ isActive }) =>
              isActive ? "selected_tab" : "not_selected_tab"
            }
          >
            Pending
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/agent/active"
            className={({ isActive }) =>
              isActive ? "selected_tab" : "not_selected_tab"
            }
          >
            Active
          </NavLink>

          <NavLink
            to="/manageWebsite/www.flyfarint.com/agent/reject"
            className={({ isActive }) =>
              isActive ? "selected_tab" : "not_selected_tab"
            }
          >
            Reject
          </NavLink>
          <NavLink
            to="/manageWebsite/www.flyfarint.com/agent/deactivate"
            className={({ isActive }) =>
              isActive ? "selected_tab" : "not_selected_tab"
            }
          >
            Deactivate
          </NavLink>
        </Box>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};

export default Agent;
