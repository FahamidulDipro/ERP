import React, { useContext } from "react";
import {
  BarChart,
  Cell,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import { DarkmodeEnable } from "../../App";
import "./ProductivityChart.css";
const ProductivityChart = () => {
  const { isDark } = useContext(DarkmodeEnable);

  const data = [
    {
      name: "Thursday",
      figma: 1,
      VSCode: 1,
      Youtube: 2,
      flyfarint: 2,
      Nutral: 1,
    },
    {
      name: "Wednesday",
      figma: 3,
      VSCode: 1,
      Youtube: 2,
      flyfarint: 2,
      Nutral: 1,
    },
    {
      name: "Tuesday",
      figma: 1,
      VSCode: 1,
      Youtube: 2,
      flyfarint: 3,
      Nutral: 2,
    },
    {
      name: "Monday",
      figma: 2,
      VSCode: 2,
      Youtube: 2,
      flyfarint: 1,
      Nutral: 1,
    },
    {
      name: "Sunday",
      figma: 1,
      VSCode: 6,
      Youtube: 2,
      flyfarint: 1,
      Nutral: 2,
    },
    {
      name: "Saturday",
      figma: 3,
      VSCode: 1,
      Youtube: 3,
      flyfarint: 1,
      Nutral: 1,
    },
  ];
  return (
    <ComposedChart
      layout="vertical"
      width={1200}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 50,
      }}
    >
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" />
      <Bar dataKey="figma" stackId="a" fill="#FCCC54" barSize={15} />

      <Bar dataKey="VSCode" stackId="a" fill="#74B18C" />

      <Bar dataKey="flyfarint" stackId="a" fill="#78B3FE" />
      <Bar dataKey="Youtube" stackId="a" fill="#C44B4B" />
      <Bar dataKey="Nutral" stackId="a" fill="#D9D9D9" />
      <Line dataKey="uv" stroke="#ff7300" />
      <Tooltip />
    </ComposedChart>
  );
};

export default ProductivityChart;
