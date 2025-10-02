import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromise}) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    const chartData = marksData.map(data => {
        const student = {
            id : data.student_id,
            name : data.name,
            physics : data.marks.physics,
            chemistry : data.marks.chemistry,
            math : data.marks.math
        }
        return student;
    });

    console.log(chartData);

    return (
        <div>
            <BarChart width={500} height={300} data={chartData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'physics'} barSize={30} fill='salmon'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;