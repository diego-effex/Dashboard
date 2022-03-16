import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import {useJsonStore} from 'pxp-jsonstore';


const PieCharts = () => {
  const dataStore = useJsonStore({
    doRequest: {
      method: 'get',
      url: `${process.env.REACT_APP_REQUEST_PXP_ND}hq-nd/Dashboard/pie`,
      typeData: 'QUERY_STRING',
      withCredentials: true,
      data: {
        start:0, limit:20, sort:'name', dir: 'asc'
      },
      headers: {
        'Authorization': process.env.REACT_APP_TOKEN_PXP_ND,
        'Content-Type': 'application/json',
      }
    },
    load: true,
  });

  const data = dataStore.getData()


  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <PieChart width={500} height={400}>
      <Legend />
      <Pie
        data={data}
        cx={240}
        cy={200}
        innerRadius={70}
        outerRadius={110}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data && data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}


export default PieCharts;
