import React from 'react'
import CategoryPanels from './CategoryPanels'
import { colors } from '../../utils/utils'


function Categories(props) {
    const { expenses, setExpenses } = props
    const [expanded, setExpanded] = React.useState(false)

    const createCategoryObj = expenses => {
        const dataObj = {}
        expenses.forEach(e => {
            if (dataObj[e.category]) {
                dataObj[e.category].expenses.push(e)
                dataObj[e.category].total += e.amount
            } else {
                dataObj[e.category] = { name: e.category, expenses: [e], total: e.amount || 0 }
            }
        })

        return dataObj
    }

    const mapData = expenses => {
        const dataObj = createCategoryObj(expenses)

        const dataArr = []
        for (let data in dataObj) {
            dataArr.push(dataObj[data])
        }

        return dataArr
    }

    return (
        <div>
            {mapData(expenses)
                .map((c, i) => <CategoryPanels expanded={expanded} setExpenses={setExpenses} setExpanded={setExpanded} key={c.name} category={c} color={colors[i]} />)}
        </div>
    )
}

export default Categories