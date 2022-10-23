import { Box, Button, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { DarkmodeEnable } from "../../App";
import "./SalaryDetailsCards.css";
const SalaryDetailsCards = () => {
  const { isDark } = useContext(DarkmodeEnable);
  const [isPaid, setPaid] = useState(true);
  const [isUnpaid, setUnpaid] = useState(false);
  return (
    <Box mb={5}>
      {/* Top Card section Starts  */}
      <Grid container columnSpacing={2} sx={{ marginTop: "56px" }}>
        <Grid item xs={6} md={4}>
          <Box
            sx={{
              p: 1,
              height: "127px",
              color: "white",
              background: "linear-gradient(to right bottom, #EF8646, #EF8646)",
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
                Salary Inventory Balance
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                50,0000
              </p>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box
            sx={{
              p: 1,
              height: "127px",

              color: "white",
              background: "linear-gradient(to right bottom, #76C3A7, #76C3A7)",
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
                Payable Amount
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                50,0000
              </p>
            </div>
          </Box>
        </Grid>
        <Grid item xs={6} md={4}>
          <Box
            sx={{
              p: 1,
              height: "127px",

              color: "white",
              background: "linear-gradient(to right bottom, #9747FF, #9747FF)",
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
                Pay Amount
              </p>
              <p
                style={{
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                50,0000
              </p>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Button
        className={`${isPaid ? "selected" : "not_selected"}`}
        onClick={() => {
          setUnpaid(!isUnpaid);
          setPaid(true);
        }}
      >
        Paid
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button
        className={`${isUnpaid ? "selected" : "not_selected"}`}
        onClick={() => {
          setPaid(!isPaid);
          setUnpaid(true);
        }}
      >
        Unpaid
      </Button>
    </Box>
  );
};

export default SalaryDetailsCards;
