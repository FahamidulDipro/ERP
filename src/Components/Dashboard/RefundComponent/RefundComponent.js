import { Box } from "@mui/material";
import React, { useContext } from "react";
import { DarkmodeEnable } from "../../../App";

const RefundComponent = ({ refund }) => {
  const { isDark } = useContext(DarkmodeEnable);
  return (
    <Box
      sx={{
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.24)",
        padding: "0px 14px 7px 14px",
        marginTop: "10px",
        borderRadius: "7px",
        background: `${isDark ? "#313341" : "white"}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {" "}
        <p
          style={{
            color: `${isDark ? "white" : "#003566"}`,
            fontWeight: "600",
            flex: "80%",
          }}
        >
          {refund}
        </p>
        <p
          style={{
            color: "#212A41",
            fontWeight: "600",
            fontSize: "22px",
            color: `${isDark ? "white" : "#212A41"}`,
          }}
        >
          ৳ 9,9900
        </p>
      </div>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "13.5px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#A25E91",
            color: "white",
            width: "123px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            marginRight: "10px",
          }}
        >
          <span>Process</span>
          <span>64</span>
        </Box>
        <Box
          sx={{
            backgroundColor: "#74B18C",
            color: "white",
            width: "123px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            marginRight: "10px",
          }}
        >
          <span>Unsettled</span>
          <span>64</span>
        </Box>
        <Box
          sx={{
            backgroundColor: "#F8BA50",
            color: "white",
            width: "123px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            marginRight: "10px",
          }}
        >
          <span>Settled</span>
          <span>64</span>
        </Box>
        <Box
          sx={{
            backgroundColor: "#7FC6DF",
            color: "white",
            width: "153px",
            height: "30px",
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            marginRight: "10px",
          }}
        >
          <span>Not Process</span>
          <span>&nbsp;64</span>
        </Box>
      </section>
    </Box>
  );
};

export default RefundComponent;
