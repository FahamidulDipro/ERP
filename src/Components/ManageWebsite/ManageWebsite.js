import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkmodeEnable } from "../../App";

const ManageWebsite = () => {
  const { isDark } = useContext(DarkmodeEnable);

  const websites = [
    { id: "001", name: "Fly Far Org", website: "www.flyfar.org" },
    {
      id: "002",
      name: "Fly Far International",
      website: "www.flyfarint.com",
    },
    {
      id: "003",
      name: "Fly Far Ladies",
      website: "www.flyfarladies.com",
    },
    {
      id: "004",
      name: "Fly Far Trips",
      website: "www.flyfartrips.com",
    },
    {
      id: "005",
      name: "Fly Far Tech",
      website: "www.flyfartech.com",
    },
    {
      id: "006",
      name: "Fly Far Education",
      website: "www.flyfareducation.com",
    },
  ];
  return (
    <Box
      sx={{
        marginTop: "120px",
        fontWeight: "600",
        marginLeft: "270px",
        width: "80%",
        height: "100vh",
      }}
    >
      <Typography
        sx={{ fontSize: "23px" }}
        color={`${isDark ? "white" : "black"}`}
      >
        {" "}
        Manage Website
      </Typography>
      <Typography color="#9C9C9C">
        You can manage booking your all website from here
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "30%",
          marginTop: "4%",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "600",
            textAlign: "left",
          }}
          color={`${isDark ? "white" : "black"}`}
        >
          Name
        </Typography>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "600",
            textAlign: "left",
          }}
          color={`${isDark ? "white" : "black"}`}
        >
          Address
        </Typography>
      </Box>
      {websites.map((w) => (
        <Box
          sx={{
            background: `${isDark ? "#313341" : "#E0ECFB"}`,
            "&:hover": {
              background: `${isDark ? "gray" : "#70A5D8"}`,
            },
            display: "flex",
            padding: "15px",
            my: "20px",
            color: `${isDark ? "white" : "#003566"}`,
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              width: "15%",
              cursor: "pointer",
            }}
          >
            {w.name}
          </Typography>
          <Link to={`/manageWebsite/${w.website}/home`}>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "600",
                marginLeft: "10%",
                textAlign: "left",
                cursor: "pointer",
              }}
            >
              {w.website}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default ManageWebsite;
