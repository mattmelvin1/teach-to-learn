import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';

const data = [
    {
        name: '1',
        correct: 18,
        incorrect: 2,
        amt: 20
    }, {
        name: '2',
        correct: 15,
        incorrect: 5,
        amt: 20
    }, {
        name: '3',
        correct: 19,
        incorrect: 1,
        amt: 20
    }, {
        name: '4',
        correct: 20,
        incorrect: 0,
        amt: 20
    }, {
        name: '5',
        correct: 4,
        incorrect: 16,
        amt: 20
    }, {
        name: '6',
        correct: 5,
        incorrect: 15,
        amt: 20
    }, {
        name: '7',
        correct: 20,
        incorrect: 0,
        amt: 20
    }, {
        name: '8',
        correct: 20,
        incorrect: 0,
        amt: 20
    }, {
        name: '9',
        correct: 20,
        incorrect: 0,
        amt: 20
    }, {
        name: '10',
        correct: 20,
        incorrect: 0,
        amt: 20
    }
];

export default class ClassTrends extends React.Component {

    // constructor(props) {
    //     super(props);

    // }

    render() {
        return (

            <ResponsiveContainer width="95%" height={400}>
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="incorrect" fill="#E6B0AA" />
                    <Bar dataKey="correct" fill="#D5F5E3" />
                </BarChart>
            </ResponsiveContainer>

        );

    }
}