import { Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { IoMdArrowDropup, IoIosSquare } from "react-icons/io";

import { DarkmodeEnable } from "../../../../App";
const DailySalesPurchaseReport = () => {
  const { isDark } = useContext(DarkmodeEnable);

  //Showing the graph
  var firstGraph = [];
  for (var i = 1; i <= 10; i++) {
    firstGraph.push(i);
  }
  var secondGraph = [];
  for (var i = 1; i <= 5; i++) {
    secondGraph.push(i);
  }
  var thirdGraph = [];
  for (var i = 1; i <= 8; i++) {
    thirdGraph.push(i);
  }
  return (
    <div style={{ fontFamily: "Poppins", width: "30%" }}>
      <Box
        sx={{
          p: 2,
          height: "400px",
          marginTop: "24px",

          background: `${isDark ? "#313341" : "white"}`,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.24)",

          borderRadius: "7px",
          textAlign: "left",
        }}
      >
        {" "}
        {/* Title Starts */}
        <span
          style={{
            color: `${isDark ? "white" : "#003566"}`,

            fontWeight: "700",

            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          Daily Sales & Purchase Report
        </span>
        {/* Title Ends */}
        {/* Sales Purchase Earning section starts */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <p
              style={{
                marginBlockEnd: "-.2em",
                fontWeight: "bold",
                color: `${isDark ? "white" : "#212A41"}`,
              }}
            >
              582041
            </p>
            <small
              style={{
                color: "#A5A5A5",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillCaretDown
                style={{ fontSize: "15px", color: "#74B18C" }}
              ></AiFillCaretDown>{" "}
              <span>Sale</span>
            </small>
          </Grid>
          <Grid item xs={4}>
            <p
              style={{
                marginBlockEnd: "-.2em",
                fontWeight: "bold",
                color: `${isDark ? "white" : "#212A41"}`,
              }}
            >
              582041
            </p>
            <small
              style={{
                color: "#A5A5A5",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoMdArrowDropup
                style={{ fontSize: "20px", color: "#A25E91" }}
              ></IoMdArrowDropup>
              <span>Purchase</span>
            </small>
          </Grid>
          <Grid item xs={4}>
            <p
              style={{
                marginBlockEnd: "-.2em",
                fontWeight: "bold",
                color: `${isDark ? "white" : "#212A41"}`,
              }}
            >
              582041
            </p>
            <small
              style={{
                color: "#A5A5A5",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoIosSquare
                style={{ fontSize: "15px", color: "#F8BA50" }}
              ></IoIosSquare>
              <span>Earning</span>
            </small>
          </Grid>
        </Grid>
        {/* Sales Purchase Earning section ends */}
        {/* Graph Section Starts */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "20px",
          }}
        >
          <section style={{ marginTop: "10px" }}>
            {firstGraph.map((graph) => {
              return (
                <div
                  style={{
                    background: "#74B18C",
                    borderRadius: "5px",
                    height: "4px",
                    width: "71px",
                    marginTop: "18px",
                  }}
                ></div>
              );
            })}
          </section>
          <section style={{ marginTop: "10px" }}>
            {secondGraph.map((graph) => {
              return (
                <div
                  style={{
                    background: "#A25E91",
                    borderRadius: "5px",
                    height: "4px",
                    width: "71px",
                    marginTop: "18px",
                  }}
                ></div>
              );
            })}
          </section>
          <section style={{ marginTop: "10px" }}>
            {thirdGraph.map((graph) => {
              return (
                <div
                  style={{
                    background: "#F8BA50",
                    borderRadius: "5px",
                    height: "4px",
                    width: "71px",
                    marginTop: "18px",
                  }}
                ></div>
              );
            })}
          </section>
        </div>
        {/* Graph Section Ends */}
        {/* Date Section Starts*/}
        <hr></hr>
        <p style={{ color: "#A5A5A5", fontWeight: "bold", fontSize: "15px" }}>
          22 APR 2022{" "}
        </p>
        {/* Date Section Ends*/}
      </Box>
    </div>
  );
};

export default DailySalesPurchaseReport;
