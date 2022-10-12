import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip} from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    return (
            <div className='mt-[100px] md:mt-0'>
            <LineChart className='md:mx-auto md:pt-28' width={500} height={300} data={data.data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Statistics;