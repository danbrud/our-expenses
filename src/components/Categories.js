import React from 'react'
import CategoryPanels from './CategoryPanels'
import Category from './Category';
import { colors } from '../utils'


function Categories(props) {
    const [expanded, setExpanded] = React.useState(false)

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
        console.log(dataArr)
        return dataArr
    }

    return (
        <div>
            {mapData(props.expenses)
                .map((c, i) => <CategoryPanels expanded={expanded} setExpanded={setExpanded} key={c.name} category={c} color={colors[i]} />)}
        </div>
    )
}

export default Categories