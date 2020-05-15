import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

class Chart extends PureComponent {

    mapData = (expenses) => {
        const dataObj = {}
        expenses.forEach(e => {
            if (dataObj[e.category]) {
                dataObj[e.category] += e.amount
            } else {
                dataObj[e.category] = e.amount || 0
            }
        })

        const dataArr = []
        for (let d in dataObj) {
            dataArr.push({ name: d, value: dataObj[d] })
        }

        return dataArr
    }

    render() {
        const data = this.mapData(this.props.expenses)

        return (
            <div style={{ width: '100vw', height: '100vh' }}>
                <ResponsiveContainer height='95%' width='95%'>
                    <BarChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{ top: 100 }}
                        layout='vertical'
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey='value' type='number' />
                        <YAxis dataKey="name" type='category'/>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" maxBarSize={70}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

export default Chart