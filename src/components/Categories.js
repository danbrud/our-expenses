import React from 'react'
import Category from './Category';
import { colors } from '../utils'


function Categories(props) {

    const mapData = expenses => {
        const dataObj = {}

        expenses.forEach(e => {
            const categoryExists = dataObj[e.category] ? true : false
            dataObj[e.category] = categoryExists ? dataObj[e.category] + e.amount : e.amount || 0
        })

        const dataArr = []
        for (let data in dataObj) {
            dataArr.push({ name: data, amount: dataObj[data] })
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