import {
  Avatar,
  Collapse,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsSunFill, BsBell, BsSearch, BsMoon } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DarkmodeEnable } from "../../../App";
import "./Topbar.css";
const Topbar = () => {
  const [setup, setSetup] = useState(false);

  const handleSetup = () => {
    setSetup(!setup);
  };
  const { isDark, handleDarkMode, handleLightMode } =
    useContext(DarkmodeEnable);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        color: "#003566",
        padding: "15px 0",
        background: `${isDark ? "#282A36" : "white"}`,
      }}
    >
      <form className={`${isDark ? "form_dark" : "form"}`}>
        <button type="submit">
          {" "}
          <BsSearch
            className={`${isDark ? "search_icon_dark" : "search_icon"}`}
          ></BsSearch>
        </button>

        <input type="search" placeholder="Search" style={{}} />
      </form>

      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "20%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <select
              name="languages"
              id="languages"
              className={`${isDark ? "select_input_dark" : "select_input"}`}
            >
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
            </select>
            <AiOutlinePrinter
              className={`${isDark ? "topbar_icons_dark" : "topbar_icons"}`}
            ></AiOutlinePrinter>
            {!isDark ? (
              <BsMoon
                className={`${isDark ? "topbar_icons_dark" : "topbar_icons"}`}
                onClick={handleDarkMode}
              ></BsMoon>
            ) : (
              <BsSunFill
                className={`${isDark ? "topbar_icons_dark" : "topbar_icons"}`}
                onClick={handleLightMode}
              ></BsSunFill>
            )}

            <BsBell
              className={`${isDark ? "topbar_icons_dark" : "topbar_icons"}`}
            ></BsBell>
          </Box>
        </section>

        <Box
          mb={1}
          p={1}
          sx={{
            fontSize: "16px",
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",

            right: "0",
          }}
          onClick={handleSetup}
          // className={`${isDark ? styles.selectTabDark : styles.selectTabLight}`}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            ></ListSubheader>
          }
        >
          <div style={{ display: "flex", alignItem: "center" }}>
            <span
              style={{
                fontSize: "20px",
                marginRight: "10px",
                marginTop: "6px",
                color: `${isDark ? "white" : "#003566"}`,
                fontWeight: "bold",
              }}
            >
              Kayes Fahim
            </span>
            <Avatar
              alt="Remy Sharp"
              variant="rounded"
              src="https://billiardport.com/assets/pages/media/profile/profile_user.jpg"
            />
          </div>
          <>
            <Collapse
              in={setup}
              timeout="auto"
              unmountOnExit
              sx={{ position: "absolute", top: "30px", width: "10%" }}
            >
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{
                    mt: 5,
                    border: "1px solid #003566",
                  }}
                >
                  <Link
                    to="/login"
                    className={`${
                      isDark ? "link_style_dark" : "link_style_light"
                    }`}
                  >
                    {" "}
                    Login
                  </Link>
                </ListItemButton>
              </List>
            </Collapse>
          </>
        </Box>
      </section>
    </div>
  );
};

export default Topbar;
