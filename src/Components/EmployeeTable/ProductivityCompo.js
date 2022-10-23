import { LinearProgress, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

import HighchartsReact from "highcharts-react-official";
import React, { useContext } from "react";
import { DarkmodeEnable } from "../../App";
import ProductivityChart from "./ProductivityChart";

const ProductivityCompo = () => {
  const { isDark } = useContext(DarkmodeEnable);

  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };
  return (
    <Box>
      <p
        className="info"
        style={{
          color: `${isDark ? "white" : "#003566"}`,
          fontWeight: "600",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        Productivity{" "}
      </p>

      <div
        style={{
          padding: "30px",
          width: "95%",
          boxShadow: "0px 0px 11px rgba(112, 165, 216, 0.84)",
        }}
      >
        <ProductivityChart></ProductivityChart>
      </div>
    </Box>
  );
};

export default ProductivityCompo;
