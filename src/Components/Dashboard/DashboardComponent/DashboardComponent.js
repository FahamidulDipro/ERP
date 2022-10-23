import { Box, Grid, Toolbar } from "@mui/material";
import React, { useContext, useState } from "react";
import { DarkmodeEnable } from "../../../App";
import AssetAndLiabilities from "../Asset and Liablities/AssetAndLiabilities";
import Balance from "../DashboardMain/Balance/Balance";
import DailySalesPurchaseReport from "../DashboardMain/DailySalesPurchaseReport.js/DailySalesPurchaseReport";
import ManageSetup from "../DashboardMain/Setup/ManageSetup/ManageSetup";
import VisaQuerySetup from "../DashboardMain/Setup/VisaQuerySetup/VisaQuerySetup";
import MonthlySales from "../MonthlySales/MonthlySales";
import RefundComponent from "../RefundComponent/RefundComponent";

const DashboardComponent = () => {
  const drawerWidth = 240;
  const refunds = ["Vendor Refund", "Client Refund", "Unsettled Transaction"];
  const [manageSetup, setManageSetup] = useState(false);
  const [visQuery, setVisQuery] = useState(false);
  const { isDark } = useContext(DarkmodeEnable);
  return (
    <div style={{ width: "84.8%", marginTop: "50px" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        {/* Top Card section Starts  */}
        <Grid container columnSpacing={2} sx={{ marginTop: "56px" }}>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                p: 1,
                height: "127px",

                color: "white",
                background:
                  "linear-gradient(to right bottom, #EF8646, #FCCC54)",
                borderRadius: "7px",
                textAlign: "center",
              }}
            >
              {" "}
              <div>
                <p
                  style={{
                    marginBlockEnd: "-1em",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Payable
                </p>
                <p
                  style={{
                    color: "#212A41",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  ৳ 87,54,156
                </p>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                p: 1,
                height: "127px",

                color: "white",
                background:
                  "linear-gradient(to right bottom, #80C9E0, #70A5D8)",
                borderRadius: "7px",
                textAlign: "center",
              }}
            >
              {" "}
              <div>
                <p
                  style={{
                    marginBlockEnd: "-1em",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Unearned
                </p>
                <p
                  style={{
                    color: "#212A41",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  ৳ 87,54,156
                </p>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                p: 1,
                height: "127px",

                color: "white",
                background:
                  "linear-gradient(to right bottom, #62B780, #76C3A7)",
                borderRadius: "7px",
                textAlign: "center",
                boxShadow: 3,
              }}
            >
              {" "}
              <div>
                <p
                  style={{
                    marginBlockEnd: "-1em",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Recivable
                </p>
                <p
                  style={{
                    color: "#212A41",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  ৳ 87,54,156
                </p>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              sx={{
                p: 1,
                height: "127px",

                color: "white",
                background:
                  "linear-gradient(to right bottom, #7C65A8, #B25AA2)",
                borderRadius: "7px",
                textAlign: "center",
              }}
            >
              {" "}
              <div>
                <p
                  style={{
                    marginBlockEnd: "-1em",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Prepaid
                </p>
                <p
                  style={{
                    color: "#212A41",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  ৳ 87,54,156
                </p>
              </div>
            </Box>
          </Grid>
        </Grid>

        <section
          style={{
            display: "flex",
            width: "100%",

            justifyContent: "space-between",
          }}
        >
          {" "}
          {/* Daily Sales and Purchase Report Starts */}
          <DailySalesPurchaseReport></DailySalesPurchaseReport>
          {/* Daily Sales and Purchase Report Ends */}
          <Balance></Balance>
          <AssetAndLiabilities></AssetAndLiabilities>
        </section>

        <Grid container justifyContent="space-between" columnSpacing={2}>
          <Grid item md={6}>
            {refunds.map((refund) => (
              <RefundComponent refund={refund}></RefundComponent>
            ))}
          </Grid>
          <Grid item md={6}>
            <MonthlySales />
          </Grid>
        </Grid>

        {manageSetup && <ManageSetup />}
        {visQuery && <VisaQuerySetup />}
      </Box>
    </div>
  );
};

export default DashboardComponent;
