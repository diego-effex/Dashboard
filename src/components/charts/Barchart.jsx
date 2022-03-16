import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import {useJsonStore} from 'pxp-jsonstore';

const Barcharts = () => {
  const dataStore = useJsonStore({
    doRequest: {
      method: 'get',
      url: `${process.env.REACT_APP_REQUEST_PXP_ND}hq-nd/Dashboard/chart`,
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


  return (
    <BarChart
      width={500}
      height={350}
      data={data}
      margin={{
        top: 25,
        right: 60,
        left: 60,
        bottom: -5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <Bar dataKey="pv" fill="#3f51b5" background={{ fill: "#eee" }} />
      <Bar dataKey="uv" fill="#adb5bd" />
    {/* <Legend /> */}
    </BarChart>

  );
}

export default Barcharts;
