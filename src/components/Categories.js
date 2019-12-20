import React from 'react'
import Category from './Category';
import { colors } from '../utils'


function Categories(props) {

    const mapData = expenses => {
        const dataObj = {}

        expenses.forEach(e => {
            const categoryExists = dataObj[e.category] ? true : false
            if (categoryExists) {
                dataObj[e.category].expenses.push(e)
                dataObj[e.category].total += e.amount
            } else {
                dataObj[e.category] = { name: e.category, expenses: [e], total: e.amount || 0 }
            }
        })

        const dataArr = []
        for (let data in dataObj) {
            dataArr.push(dataObj[data])
        }

        return dataArr
    }

    return (
        <div>
            {mapData(props.expenses).map((c, i) => <Category key={c.name} category={c} color={colors[i]} />)}
        </div>
    )
}

export default Categories