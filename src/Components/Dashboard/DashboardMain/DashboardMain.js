import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import LogoLight from "../../../Assets/logo/Logo.png";
import LogoDark from "../../../Assets/logo/LogoBlack.png";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

import "./DashboardMain.css";
import { Link, NavLink, Outlet } from "react-router-dom";

import { Grid } from "@mui/material";

import SharedTopbarComponent from "../../SharedComponents/TopBar/SharedTopbarComponent/SharedTopbarComponent";
import { DarkmodeEnable } from "../../../App";

const drawerWidth = 240;
let activeStyle = {
  color: "red",
  textDecoration: "none",
};

const useStyles = makeStyles({
  navbarLight: {
    background: "#282A36",
    color: "#282A36",
    fontSize: "14px",
    color: "#fff",
  },
  navbarDark: {
    background: "#282A36",
    color: "#fff",
    fontSize: "14px",
    color: "#fff",
  },
  leftSideLight: {
    background: "white",
    color: "#282A36",
    fontSize: "14px",
    color: "#fff",
  },
  leftSideDark: {
    background: "#282A36",
    color: "white",
    fontSize: "14px",
    color: "#fff",
  },

  selectTabDark: {
    background:
      "linear-gradient(90.07deg, rgba(26, 27, 36, 0.35) 0.57%, #000000 99.94%)",
    backdropFilter: "blur(100px)",
    borderRadius: "7px",
  },
  selectTabLight: {
    background:
      "linear-gradient(90.07deg, rgba(224, 236, 251, 0.35) 0.57%, #E0ECFB 99.94%)",

    borderRadius: "7px",
    color: "#003566",
  },
});
const DashboardMain = () => {
  const styles = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const refunds = ["Vendor Refund", "Client Refund", "Unsettled Transaction"];
  const { isDark } = React.useContext(DarkmodeEnable);
  //For Nested List
  const [open, setOpen] = React.useState(false);
  const [setup, setSetup] = useState(false);
  const [quotation, setQuotation] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleSetup = () => {
    setSetup(!setup);
  };
  const handleQuotation = () => {
    setQuotation(!quotation);
  };
  return (
    <Box
      sx={{ display: "flex", background: `${isDark ? "#282A36" : "white"}` }}
      className={styles.paperDark}
    >
      <CssBaseline />

      <SharedTopbarComponent></SharedTopbarComponent>
      <Grid container>
        <Grid>
          {" "}
          <Box
            component="nav"
            sx={{
              width: { sm: drawerWidth },
              flexShrink: { sm: 0 },
            }}
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
              <Box className={styles.paperDark}>
                <img
                  src={`${isDark ? LogoDark : LogoLight}`}
                  atl="Flyfar international"
                />
                <Divider />
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
                className={`${
                  isDark ? styles.leftSideDark : styles.leftSideLight
                }`}
              >
                <Link to="/">
                  {" "}
                  <Box textAlign={"center"} mb={2}>
                    <img
                      src={`${isDark ? LogoLight : LogoDark}`}
                      atl="Flyfar international"
                      width="130px"
                    />
                  </Box>
                </Link>

                <Divider />
                <NavLink
                  to="/dashboard"
                  className={`${
                    isDark ? "link_style_dark" : "link_style_light"
                  }`}
                >
                  {" "}
                  <Box
                    mb={1}
                    className={`${
                      isDark ? styles.selectTabDark : styles.selectTabLight
                    }`}
                  >
                    <ListItemButton>
                      <Typography> Dashboard</Typography>
                    </ListItemButton>
                  </Box>
                </NavLink>
                <NavLink
                  to="/manageWebsite"
                  className={`${
                    isDark ? "link_style_dark" : "link_style_light"
                  }`}
                >
                  {" "}
                  <Box
                    mb={1}
                    className={`${
                      isDark ? styles.selectTabDark : styles.selectTabLight
                    }`}
                  >
                    <ListItemButton>
                      <Typography>Manage Website</Typography>
                    </ListItemButton>
                  </Box>
                </NavLink>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Inquiry Management</Typography>
                  </ListItemButton>
                </Box>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Task Management</Typography>
                  </ListItemButton>
                </Box>
                <NavLink
                  to="/inventoryManagement"
                  className={`${
                    isDark ? "link_style_dark" : "link_style_light"
                  }`}
                >
                  {" "}
                  <Box
                    mb={1}
                    className={`${
                      isDark ? styles.selectTabDark : styles.selectTabLight
                    }`}
                  >
                    <ListItemButton>
                      <Typography> Inventory Management</Typography>
                    </ListItemButton>
                  </Box>
                </NavLink>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Operation</Typography>
                  </ListItemButton>
                </Box>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Invoice</Typography>
                  </ListItemButton>
                </Box>
                <Box
                  mb={1}
                  p={1}
                  sx={{
                    fontSize: "16px",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={handleQuotation}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                    ></ListSubheader>
                  }
                >
                  &nbsp; Quotation{" "}
                  <>
                    <Collapse in={quotation} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 1, mt: 2 }}>
                          <Link
                            to="/quotation"
                            className={`${
                              isDark ? "link_style_dark" : "link_style_light"
                            }`}
                          >
                            {" "}
                            Air Ticket Quotation
                          </Link>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 1 }}>
                          <Link
                            to="/salesQuotation"
                            className={`${
                              isDark ? "link_style_dark" : "link_style_light"
                            }`}
                          >
                            {" "}
                            Sales Quotation
                          </Link>
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </>
                </Box>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Money Receipt</Typography>
                  </ListItemButton>
                </Box>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Expense</Typography>
                  </ListItemButton>
                </Box>
                <Box
                  mb={1}
                  p={1}
                  sx={{
                    fontSize: "16px",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={handleSetup}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                    ></ListSubheader>
                  }
                >
                  &nbsp; Setup{" "}
                  <>
                    <Collapse in={setup} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 1, mt: 2 }}>
                          <Link
                            to="/manageWebsite"
                            className={`${
                              isDark ? "link_style_dark" : "link_style_light"
                            }`}
                          >
                            {" "}
                            Manage Website
                          </Link>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 1 }}>
                          <Link
                            to="/salesQuotation"
                            className={`${
                              isDark ? "link_style_dark" : "link_style_light"
                            }`}
                          >
                            {" "}
                            Sales Quotation
                          </Link>
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </>
                </Box>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  {" "}
                  <Box
                    mb={1}
                    className={`${
                      isDark ? styles.selectTabDark : styles.selectTabLight
                    }`}
                  >
                    <Link
                      to="/chartOfAccount"
                      className={`${
                        isDark ? "link_style_dark" : "link_style_light"
                      }`}
                    >
                      {" "}
                      <ListItemButton>
                        <Typography> Chart of Account</Typography>
                      </ListItemButton>
                    </Link>
                  </Box>
                </Box>

                <Box
                  mb={1}
                  p={1}
                  sx={{
                    fontSize: "16px",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={handleClick}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader
                      component="div"
                      id="nested-list-subheader"
                    ></ListSubheader>
                  }
                >
                  &nbsp; Employee{" "}
                  <>
                    {/* {" "}
                    {open ? (
                      <ExpandLess
                        sx={{ marginLeft: "30px" }}
                        className={`${
                          isDark ? "link_style_dark" : "link_style_light"
                        }`}
                      />
                    ) : (
                      <ExpandMore
                        sx={{ marginLeft: "30px" }}
                        className={`${
                          isDark ? "link_style_dark" : "link_style_light"
                        }`}
                      />
                    )} */}
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 1, mt: 2 }}>
                          <Link
                            to="/employees"
                            className={`${
                              isDark ? "link_style_dark" : "link_style_light"
                            }`}
                          >
                            {" "}
                            Employee Details
                          </Link>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 1 }}>
                          <Link
                            to="/attandanceDetails"
                            className={`${
                              isDark ? "link_style_dark" : "link_style_light"
                            }`}
                          >
                            {" "}
                            Attendance
                          </Link>
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 1 }}>
                          <Link
                            to="/salary-details"
                            className={`${
                              isDark ? "link_style_dark" : "link_style_light"
                            }`}
                          >
                            {" "}
                            Salary Details
                          </Link>
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </>
                </Box>

                {/* Nested List Ends */}

                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <Link
                    to="/vendor"
                    className={`${
                      isDark ? "link_style_dark" : "link_style_light"
                    }`}
                  >
                    {" "}
                    <ListItemButton>
                      <Typography> Vendor</Typography>
                    </ListItemButton>
                  </Link>
                </Box>

                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <Link
                    to="/customer"
                    className={`${
                      isDark ? "link_style_dark" : "link_style_light"
                    }`}
                  >
                    {" "}
                    <ListItemButton>
                      <Typography> Customer</Typography>
                    </ListItemButton>
                  </Link>
                </Box>

                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Report</Typography>
                  </ListItemButton>
                </Box>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Reconcile</Typography>
                  </ListItemButton>
                </Box>
                <Box
                  mb={1}
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> Log</Typography>
                  </ListItemButton>
                </Box>
                <Box
                  className={`${
                    isDark ? styles.selectTabDark : styles.selectTabLight
                  }`}
                >
                  <ListItemButton>
                    <Typography> My Productivity Report</Typography>
                  </ListItemButton>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Grid>

        <Outlet />
      </Grid>
    </Box>
  );
};

export default DashboardMain;
