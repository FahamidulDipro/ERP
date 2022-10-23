import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { IoIosSquare } from "react-icons/io";
import "./MonthlySales.css";
import { AiFillCaretDown } from "react-icons/ai";
import { DarkmodeEnable } from "../../../App";

const MonthlySales = () => {
  const { isDark } = useContext(DarkmodeEnable);
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
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.24)",
          padding: "10px 20px",
          marginTop: "10px",
          borderRadius: "7px",
          height: "420px",
          background: `${isDark ? "#313341" : "white"}`,
        }}
      >
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              fontSize: "16px",
              color: `${isDark ? "white" : "#003566"}`,
              fontWeight: "bold",
            }}
          >
            Mounthly Sales & Purchase Report
          </p>
          <Box sx={{ fontSize: "12px", display: "flex", gap: "10px" }}>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#212A41",
                fontWeight: "600",
              }}
            >
              {" "}
              <p
                style={{
                  textAlign: "right",
                  width: "100%",
                  margin: "0",
                  color: `${isDark ? "white" : "#003566"}`,
                }}
              >
                Sales
              </p>{" "}
              <IoIosSquare
                style={{ fontSize: "30px", color: "#74B18C" }}
              ></IoIosSquare>
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#212A41",
                fontWeight: "600",
              }}
            >
              {" "}
              <span
                style={{
                  textAlign: "right",
                  width: "100%",
                  color: `${isDark ? "white" : "#003566"}`,
                }}
              >
                Purchase
              </span>{" "}
              <IoIosSquare
                style={{ fontSize: "30px", color: "#A25E91" }}
              ></IoIosSquare>
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: `${isDark ? "white" : "#003566"}`,
                fontWeight: "600",
              }}
            >
              {" "}
              <span
                style={{
                  textAlign: "right",
                  width: "100%",
                }}
              >
                Earning
              </span>{" "}
              <IoIosSquare
                style={{ fontSize: "30px", color: "#F8BA50" }}
              ></IoIosSquare>
            </p>
          </Box>
        </section>
        <Button
          variant="contained"
          style={{
            background: `${!isDark ? "#282A36" : "white"}`,
            color: `${!isDark ? "white" : "#003566"}`,
            borderRadius: 0,
            position: "relative",
            boxShadow: "none",
          }}
        >
          58204
          <AiFillCaretDown
            className="down_icon"
            style={{ color: `${isDark ? "white" : "#282A36"}` }}
          ></AiFillCaretDown>
        </Button>

        <section
          style={{
            display: "flex",

            justifyContent: "space-between",
          }}
        >
          <Box>
            {" "}
            {/* Graph Section Starts */}
            <div
              className="monthly_graphs"
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
                        width: "58px",
                        marginTop: "18px",
                        marginRight: "30px",
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
                        width: "58px",
                        marginTop: "18px",
                        marginRight: "30px",
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
                        width: "58px",
                        marginTop: "18px",
                      }}
                    ></div>
                  );
                })}
              </section>
            </div>
            {/* Date Section Starts*/}
            <hr style={{ width: "200%" }}></hr>
            <p
              style={{
                color: "#A5A5A5",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              APR
            </p>
            {/* Date Section Ends*/}
          </Box>
          <Box>
            {" "}
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
                        width: "58px",
                        marginTop: "18px",
                        marginRight: "30px",
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
                        width: "58px",
                        marginTop: "18px",
                        marginRight: "30px",
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
                        width: "58px",
                        marginTop: "18px",
                      }}
                    ></div>
                  );
                })}
              </section>
            </div>
            {/* Date Section Starts*/}
            <hr></hr>
            <p
              style={{
                color: "#A5A5A5",
                fontWeight: "bold",
                fontSize: "15px",
                textAlign: "center",
              }}
            >
              MAR
            </p>
            {/* Date Section Ends*/}
          </Box>
        </section>
      </Box>
    </div>
  );
};

export default MonthlySales;
