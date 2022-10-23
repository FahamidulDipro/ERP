import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./CurrencyPage.css";

const CurrencyPage = () => {
  const navigate = useNavigate();
  const [gdsPrice, setGdsPrice] = useState("");
  const [fareCost, setFareCost] = useState("");

  useEffect(() => {
    fetch("https://api.flyfarint.com/v.1.0.0/Admin/Control/all.php?all")
      .then((res) => res.json())
      .then((data) => {
        setGdsPrice(data[0]?.gdsPrice);
        setFareCost(data[0]?.farePrice);
      });
  }, []);

  // update gds and  fare price handle

  const updateHandle = () => {
    console.log(gdsPrice, fareCost);
    let url = `https://api.flyfarint.com/v.1.0.0/Admin/Control/edit.php?gdsPrice=${gdsPrice}&farePrice=${fareCost}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "Update Successfully",
            confirmButtonText: "ok",
          }).then(function () {
            navigate(0);
          });
        }
      });
  };

  return (
    <Box style={{ width: "97%" }}>
      <Box mt={3}>
        <Box>
          <Typography
            style={{
              color: "#000000",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Currency Converter
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Box className="currencyBtn1">
              <label>ERP GDS Converter</label>
              <input
                type="text"
                value={gdsPrice}
                onChange={(e) => {
                  setGdsPrice(e.target.value);
                }}
              />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box className="currencyBtn1">
              <label>Fare Converter</label>

              <input
                type="text"
                value={fareCost}
                onChange={(e) => {
                  setFareCost(e.target.value);
                }}
              />
            </Box>
          </Grid>

          <Grid item md={2} display={"flex"} alignItems="flex-end">
            <Box>
              <button
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                  border: "none",
                  height: "30px",
                  backgroundColor: "#70A5D8",
                  color: "#fff",
                  padding: "0px 30px",
                  marginRight: "10px",
                }}
                onClick={updateHandle}
              >
                Update
              </button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CurrencyPage;
