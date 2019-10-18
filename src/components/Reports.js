import React, { Component } from 'react'
import MonthSelector from './MonthSelector'
import { inject, observer } from 'mobx-react'
import FabButton from './FabButton'
import Report from './Report'
import Loader from './Loader'
import './../styles/Reports.css'
import Categories from './Categories'

@inject('expensesStore')
@observer
class Reports extends Component {

    constructor() {
        super()
        this.state = {
            showLoader: true
        }
    }

    componentDidMount = async () => {
        if(!this.isExpensesCurrent()) { 
            await this.props.expensesStore.getExpenses()
        }

        this.state.showLoader = false
    }

    isExpensesCurrent = () => {
        if(this.props.expensesStore.expenses.length) {
            return this.props.expensesStore.currentMonth === new Date(this.props.expensesStore.expenses[0].date).getMonth() 
                        ? true : false
        }
        // return false
    }

    render() {
        return(
            <div>
                <h1>סיכום הוצאות</h1>
                <MonthSelector />
                {/* {this.state.showLoader ? <Loader /> : <Report expenses={this.props.expensesStore.expenses}/>} */}
                <Categories expenses={this.props.expensesStore.expenses}/>
                <FabButton />
            </div>
        )
    }
}

export default Reports