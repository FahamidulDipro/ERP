import { Tooltip } from "@mui/material";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Cell,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Sat",
    pv: 50,
    pvPercentage: "50%",
  },
  {
    name: "Sun",
    pv: 80,
    pvPercentage: "80%",
  },
  {
    name: "Mon",
    pv: 70,
    pvPercentage: "70%",
  },
  {
    name: "Tue",
    pv: 55,
    pvPercentage: "55%",
  },
  {
    name: "Wed",
    pv: 95,
    pvPercentage: "95%",
  },
  {
    name: "Thu",
    pv: 75,
    pvPercentage: "75%",
  },
  {
    name: "Sat",
    pv: 65,
    pvPercentage: "65%",
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props;
  const radius = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - radius}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split("")[1]}
      </text>
    </g>
  );
};
export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-bar-chart-35meb";

  render() {
    return (
      <ResponsiveContainer width="100%" height="150%">
        <BarChart
          width={600}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#EF8646" barSize={20}>
            <LabelList dataKey="pvPercentage" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
