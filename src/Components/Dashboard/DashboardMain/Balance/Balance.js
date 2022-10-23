import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { IoIosSquare } from "react-icons/io";
import { DarkmodeEnable } from "../../../../App";
import Chart from "../Chart/Chart";

const Balance = () => {
  const { isDark } = useContext(DarkmodeEnable);

  return (
    <div style={{ width: "60%" }}>
      <Box
        sx={{
          p: 2,
          fontFamily: "Poppins",
          height: "400px",

          marginTop: "24px",
          marginLeft: "19px",
          background: `${isDark ? "#313341" : "white"}`,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.24)",

          borderRadius: "7px",
          textAlign: "left",
          color: "#003566",
        }}
      >
        {" "}
        {/*  Title Starts*/}
        <span
          style={{
            color: `${isDark ? "white" : "#003566"}`,

            fontWeight: "600",
          }}
        >
          Balance
        </span>
        {/*  Title Ends*/}
        <section style={{ marginTop: "10px" }}>
          {/* Info Graph Starts */}
          <Grid container spacing={1}>
            <Grid item xs={7} style={{ marginTop: "20px" }}>
              {/* Chart */}
              <Box height={"232px"} width={"232px"}>
                <Chart></Chart>
              </Box>
            </Grid>
            <Grid item xs={5} style={{ fontSize: "17px" }}>
              <p
                style={{
                  fontWeight: "600",
                  display: "flex",
                }}
              >
                <IoIosSquare
                  style={{
                    fontSize: "25px",
                    color: "#F8BA50",
                  }}
                ></IoIosSquare>
                <span
                  style={{
                    marginLeft: "8px",
                    color: `${isDark ? "white" : "#003566"}`,
                  }}
                >
                  {" "}
                  Bank : ৳ 75,000
                </span>{" "}
              </p>
              <p
                style={{
                  fontWeight: "600",
                  display: "flex",
                }}
              >
                <IoIosSquare
                  style={{
                    fontSize: "25px",
                    color: "#74B18C",
                  }}
                ></IoIosSquare>
                <span
                  style={{
                    marginLeft: "8px",
                    color: `${isDark ? "white" : "#003566"}`,
                  }}
                >
                  {" "}
                  Cash : ৳ 55,000{" "}
                </span>{" "}
              </p>
              <p
                style={{
                  fontWeight: "600",
                  display: "flex",
                }}
              >
                <IoIosSquare
                  style={{
                    fontSize: "25px",
                    color: "#A25E91",
                  }}
                ></IoIosSquare>
                <span
                  style={{
                    marginLeft: "8px",
                    color: `${isDark ? "white" : "#003566"}`,
                  }}
                >
                  Mobile Bank : ৳ 15,000{" "}
                </span>{" "}
              </p>
            </Grid>
          </Grid>
          {/* Info Graph Ends */}

          {/*Total Balance Section Starts  */}
          <p
            style={{
              textAlign: "right",
              fontWeight: "600",
              fontSize: "20px",
              marginTop: "60px",
              color: `${isDark ? "white" : "#003566"}`,
            }}
          >
            Total Balance : ৳ 14,54,512
          </p>
          {/*Total Balance Section Ends  */}
        </section>
      </Box>
    </div>
  );
};

export default Balance;
