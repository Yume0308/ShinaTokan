"use client";

import { Ellipsis } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dataMonth = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
]

const dataWeek = [
  {
    name: "Mon",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Tue",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Wed",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Thu",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Fri",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Sat",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Sun",
    income: 3490,
    expense: 4300,
  },
]

const RevenueChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Revenue</h1>
        <Ellipsis className="w-5 h-5" />
      </div>
      <ResponsiveContainer width='100%' height='90%'>
        <LineChart
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          data={dataMonth}
          width={500}
          height={300}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill: '#d112CA' }} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{fill: '#ddd'}} tickLine={false} tickMargin={10} />
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="center"
            iconType="circle"
            wrapperStyle={{
              paddingTop: '15px',
              paddingBottom: '15px',
            }}
          />
          <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>

  )
}

export default RevenueChart;
