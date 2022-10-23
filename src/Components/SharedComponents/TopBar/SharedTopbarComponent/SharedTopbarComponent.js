import React, { useContext } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Topbar from "../Topbar";
import { DarkmodeEnable } from "../../../../App";

const SharedTopbarComponent = () => {
  const drawerWidth = 240;
  const { isDark } = useContext(DarkmodeEnable);
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      {" "}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
        }}
      >
        <Toolbar
          style={{
            background: "white",
            color: "black",
            backgroundColor: `${isDark ? "#282A36" : "white"}`,
          }}
        >
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Topbar></Topbar>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SharedTopbarComponent;
