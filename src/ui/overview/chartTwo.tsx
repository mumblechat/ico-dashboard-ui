
import { Box } from "@mui/material";
import React from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";


const data02 = [
  { name: "Founding Allocation ", value: 40, fill: "#02CACA" },
  { name: "Founding Allocation ", value: 35, fill: "#116262" },
  { name: "Founding Allocation ", value: 15, fill: "#136F84" },
  { name: "Founding Allocation ", value: 5, fill: "#00A3FF" },
  { name: "Founding Allocation ", value: 2.5, fill: "#033356" },
  { name: "Founding Allocation ", value: 2.5, fill: "#55558A" }
];

export default function ChartTwo() {
  return (
   <Box style={{ width: '100%', height: 300}}>
     <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey="value"
          data={data02}
          innerRadius={40}
          outerRadius={80}
          fill="#3DC1F2"
        />
        <Tooltip
          cursor={{ fill: 'none' }}
          contentStyle={{
            borderRadius: '4px'
          }} />
      </PieChart>
    </ResponsiveContainer>
   </Box>
  );
}
