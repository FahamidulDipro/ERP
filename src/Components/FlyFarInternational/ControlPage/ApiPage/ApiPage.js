import { Box, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./ApiPage.css";

const ApiPage = () => {
  const [active, setActive] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleBtnActive = async (value) => {
    let url = "https://api.flyfarint.com/v.1.0.0/Admin/Control/edit.php";
    let body = JSON.stringify({
      key: value,
      value: active[value] === "1" ? 0 : 1,
    });

    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          setIsLoading((prev) => !prev);
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Updated Successfully",
            confirmButtonText: "ok",
          });
        }
      });
  };

  useEffect(() => {
    fetch("https://api.flyfarint.com/v.1.0.0/Admin/Control/all.php?all")
      .then((res) => res.json())
      .then((data) => setActive(data[0]));
  }, [isLoading]);

  return (
    <Box style={{ width: "97%" }}>
      <Box mt={3}>
        <Typography
          style={{ color: "#000000", fontSize: "20px", fontWeight: "500" }}
        >
          Manage API
        </Typography>
      </Box>

      <Box
        style={{
          backgroundColor: "#E0ECFB",
          display: "block !important",
          borderRadius: "8px",
        }}
        mt={3}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <Typography style={{ color: "#003566", fontSize: "16px" }}>
            Sabre
          </Typography>
          <Box className="apiBtn1">
            <button
              style={
                active?.sabre === "1"
                  ? {
                      cursor: "pointer",
                      fontSize: "15px",
                      border: "none",
                      height: "30px",
                      backgroundColor: "green",
                      color: "#fff",
                      padding: "0px 22px",
                      borderRadius: " 5px",
                    }
                  : {
                      cursor: "pointer",
                      fontSize: "15px",
                      border: "none",
                      height: "30px",
                      backgroundColor: "red",
                      color: "#fff",
                      padding: "0px 22px",
                      borderRadius: " 5px",
                    }
              }
              onClick={() => handleBtnActive("sabre")}
            >
              {active?.sabre === "1" ? (
                <span>Activate</span>
              ) : (
                <span>Deactivate</span>
              )}
            </button>
          </Box>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "#E0ECFB",
          display: "block !important",
          borderRadius: "8px",
        }}
        mt={2}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <Typography style={{ color: "#003566", fontSize: "16px" }}>
            Travel Port Galelio
          </Typography>
          <Box className="apiBtn2">
            <button
              style={
                active?.galileo === "1"
                  ? {
                      cursor: "pointer",
                      fontSize: "15px",
                      border: "none",
                      height: "30px",
                      backgroundColor: "green",
                      color: "#fff",
                      padding: "0px 22px",
                      borderRadius: " 5px",
                    }
                  : {
                      cursor: "pointer",
                      fontSize: "15px",
                      border: "none",
                      height: "30px",
                      backgroundColor: "red",
                      color: "#fff",
                      padding: "0px 22px",
                      borderRadius: " 5px",
                    }
              }
              onClick={() => handleBtnActive("galileo")}
            >
              {active?.galileo === "1" ? (
                <span>Activate</span>
              ) : (
                <span>Deactivate</span>
              )}
            </button>
          </Box>
        </Box>
      </Box>

      <Box
        style={{
          backgroundColor: "#E0ECFB",
          display: "block !important",
          borderRadius: "8px",
        }}
        mt={2}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
            alignItems: "center",
            padding: "0px 20px",
          }}
        >
          <Typography style={{ color: "#003566", fontSize: "16px" }}>
            Flyhub
          </Typography>
          <Box className="apiBtn2">
            <button
              style={
                active?.flyhub === "1"
                  ? {
                      cursor: "pointer",
                      fontSize: "15px",
                      border: "none",
                      height: "30px",
                      backgroundColor: "green",
                      color: "#fff",
                      padding: "0px 22px",
                      borderRadius: " 5px",
                    }
                  : {
                      cursor: "pointer",
                      fontSize: "15px",
                      border: "none",
                      height: "30px",
                      backgroundColor: "red",
                      color: "#fff",
                      padding: "0px 22px",
                      borderRadius: " 5px",
                    }
              }
              onClick={() => handleBtnActive("flyhub")}
            >
              {active?.flyhub === "1" ? (
                <span>Activate</span>
              ) : (
                <span>Deactivate</span>
              )}
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ApiPage;
