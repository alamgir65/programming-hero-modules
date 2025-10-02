import React from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis,CartesianGrid } from 'recharts';

const studentMarks = [
  {
    id: 1,
    name: "Alice",
    physics: 85,
    chemistry: 78,
    math: 92
  },
  {
    id: 2,
    name: "Bob",
    physics: 74,
    chemistry: 81,
    math: 69
  },
  {
    id: 3,
    name: "Charlie",
    physics: 91,
    chemistry: 89,
    math: 95
  },
  {
    id: 4,
    name: "David",
    physics: 66,
    chemistry: 72,
    math: 58
  },
  {
    id: 5,
    name: "Eva",
    physics: 88,
    chemistry: 94,
    math: 90
  }
];

console.log(studentMarks);


const Charts = () => {
    return (
        <div>
            <h1>Chart..</h1>
            <LineChart width={500} height={300} data={studentMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'physics'}></Line>
                <Line dataKey={'math'} stroke='blue'></Line>
                <Line dataKey={'chemistry'} stroke='green'></Line>
            </LineChart>

            <BarChart width={500} height={300} data={studentMarks}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Bar dataKey={'physics'} barSize={30} fill='blue'></Bar>
                <Bar dataKey={'chemistry'} barSize={30} fill='red'></Bar>
                <Bar dataKey={'math'} barSize={30} fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default Charts;