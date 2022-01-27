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
      url: 'http://localhost:3200/api/dashboard/dashboards/chart',
      typeData: 'QUERY_STRING',
      withCredentials: true,
      data: {
        start:0, limit:20, sort:'name', dir: 'asc'
      },
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY0MzI4ODc0MDkwMSwiZXhwIjoxNjQzNjA0MTAwOTAxfQ.7GdJJIvCq9MFKn30VpzhzTltaodRAVDSF_9_NNRkEKc',
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