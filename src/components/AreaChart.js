import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const areaChart = (props) => {


    
      
    return (
        <>
        <ResponsiveContainer height={"100%"} width={"100%"}>
        <AreaChart

        data={props.datas}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="ux" stackId="1" stroke="#EC9A29" fill="#EC9A29" />
        <Area type="monotone" dataKey="front" stackId="1" stroke="#A8201A" fill="#A8201A" />
        <Area type="monotone" dataKey="back" stackId="1" stroke="#0F8B8D" fill="#0F8B8D" />
      </AreaChart>
      </ResponsiveContainer>
      </>
    )
}

export default areaChart
