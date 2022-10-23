import { Box, Drawer, makeStyles, Typography } from "@mui/material";

import React, { useContext, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import LogoLight from "../../../src/Assets/logo/Logo.png";
import Logo from "../../../src/Assets/logo/LogoBlack.png";

import { DarkmodeEnable } from "../../App";
const Sidebar = () => {
  let activeStyle = {
    color: "red",
    textDecoration: "none",
  };

  const [setup, setSetup] = useState(false);
  const [manageSetup, setManageSetup] = useState(false);
  const [visQuery, setVisQuery] = useState(false);
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { isDark } = useContext(DarkmodeEnable);

  return (
    <div>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* for mobile  */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box>
            <List>
              <ListItem color="red">
                <ListItemButton>
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText color="red"> name</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        {/* for tob to Desktop  */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
            },
          }}
          open
        >
          <Box
            id="leftNavDark"
            sx={{
              height: "100vh",
              overflow: "scroll",
              background: `${isDark ? "#282A36" : "white"}`,
            }}
            p={2}
          >
            <NavLink to="/">
              <Box textAlign={"center"} mb={1.7}>
                <img
                  src={`${isDark ? LogoLight : Logo}`}
                  atl="Flyfar international"
                  width="130px"
                />
              </Box>
            </NavLink>

            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <NavLink
                to="/dashboard"
                className={`${isDark ? "darkLink" : "lightLink"}`}
              >
                <ListItemButton>
                  {" "}
                  <Typography fontSize="15px" fontWeight="500">
                    {" "}
                    Dashboard
                  </Typography>
                </ListItemButton>
              </NavLink>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Inquiry Management
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Task Management
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Operation
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Invoice
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Money Receipt
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Expense
                </Typography>
              </ListItemButton>
            </Box>
            <Box>
              <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
                <ListItemButton onClick={() => setSetup(!setup)}>
                  <Typography> Setup</Typography>
                </ListItemButton>
              </Box>
              {setup && (
                <>
                  <Box
                    mb={1}
                    ml={3}
                    className={`${isDark ? "darkTab" : "lightTab"}`}
                  >
                    <ListItemButton>
                      <Typography fontSize="15px" fontWeight="500">
                        {" "}
                        Account Setup
                      </Typography>
                    </ListItemButton>
                    <ListItemButton>
                      <Typography fontSize="15px" fontWeight="500">
                        {" "}
                        Admin Setup
                      </Typography>
                    </ListItemButton>
                    <ListItemButton>
                      <NavLink
                        onClick={() => setVisQuery(!visQuery)}
                        to={"/visaquerysetup"}
                        className={`${isDark ? "darkTab" : "lightTab"}`}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Visa Query Setup
                      </NavLink>
                    </ListItemButton>
                    <ListItemButton>
                      <NavLink
                        onClick={() => setManageSetup(!manageSetup)}
                        to={"/managesetup"}
                        // className={styles.navlinkColor}
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >
                        Website Setup
                      </NavLink>
                    </ListItemButton>
                  </Box>
                </>
              )}
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Chart of Account
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <NavLink
                to="/employees"
                className={`${isDark ? "darkLink" : "lightLink"}`}
              >
                <ListItemButton>
                  {" "}
                  <Typography
                    fontSize="15px"
                    fontWeight="500"
                    sx={{ textDecoration: "none" }}
                  >
                    Employees{" "}
                  </Typography>
                </ListItemButton>
              </NavLink>{" "}
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  Vendor
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  Customer
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  Inventory Management
                </Typography>
              </ListItemButton>
            </Box>

            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Report
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Reconcile
                </Typography>
              </ListItemButton>
            </Box>
            <Box mb={1} className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  Log
                </Typography>
              </ListItemButton>
            </Box>
            <Box className={`${isDark ? "darkTab" : "lightTab"}`}>
              <ListItemButton>
                <Typography fontSize="15px" fontWeight="500">
                  {" "}
                  My Productivity Report
                </Typography>
              </ListItemButton>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
};

export default Sidebar;
