import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import Expense from './Category';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import Category from './Category';

@inject('expensesStore')
@observer
class Categories extends Component {

    componentDidMount = () => this.props.expensesStore.getExpenses()


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
        const categories = this.mapData(this.props.expensesStore.expenses)
        const colors = scaleOrdinal(schemeCategory10).range();

        return(
            <div>
                {categories.map((c, i) => <Category key={c.name} category={c} color={colors[i % 20]}/>)}       
            </div>
        )
    }
}

export default Categories