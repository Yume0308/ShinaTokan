"use client";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Wed",
    users: 13,
    books: 6,
  },
  {
    name: "Thu",
    users: 17,
    books: 9,
  },
  {
    name: "Fri",
    users: 20,
    books: 11,
  },
  {
    name: "Sat",
    users: 25,
    books: 14,
  },
  {
    name: "Sun",
    users: 30,
    books: 17,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg w-full h-full p-4">
      {/* title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Ellipsis className="w-5 h-5" />
      </div>
      {/* chart */}
      <ResponsiveContainer>
        <BarChart
          data={data}
          width={500}
          height={300}
          barSize={24}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tickLine={true} tick={{fill: '#ddd'}} />
          <YAxis axisLine={false} tickLine={true} tick={{fill: '#ddd'}} />
          <Tooltip contentStyle={
            {
              borderRadius: '10px',
            }
          } />
          <Legend
            align="left"
            verticalAlign="top"
            iconType="circle"
            wrapperStyle={{
              paddingTop: '24px',
              paddingBottom: '24px',
              paddingLeft: '24px',
              paddingRight: '24px',
            }}
          />
          <Bar dataKey="users" fill="#FFB0B0" legendType="circle" radius={[8,8,0,0]} />
          <Bar dataKey="books" fill="#FFECC8" legendType="circle" radius={[8,8,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
