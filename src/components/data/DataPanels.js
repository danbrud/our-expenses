import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { CONSTS } from '../../utils/consts'
import DataPanelSummary from './DataPanelSummary'
import DataPanelDetails from './DataPanelDetails'
import { useDispatch } from 'react-redux'
import { deleteExpense } from '../../state/slices/expensesSlice'
import { deleteIncome } from '../../state/slices/incomesSlice'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        direction: 'rtl',
        padding: '0',
    },
    paper: {
        backgroundColor: '#EAF2EF',
    },
}))

function DataPanels({ data, type }) {
    const dispatch = useDispatch()
    const classes = useStyles()

    const [expanded, setExpanded] = useState(false)

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const deleteData = async (id) => {
        const confirmed = window.confirm('בטוח למחוק?')
        if (!confirmed) { return }

        if (type === CONSTS.pluralExpense) {
            dispatch(deleteExpense(id))
        } else {
            dispatch(deleteIncome(id))
        }
    }

    return (
        <div className={classes.root}>
            {data.map(d => {
                return (
                    <ExpansionPanel key={d._id} className={classes.paper} expanded={expanded === d._id} onChange={handleChange(d._id)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1bh-content'
                            id='panel1bh-header'
                        >
                            <DataPanelSummary user={d.user} amount={d.amount} name={type === CONSTS.pluralExpense ? d.expense : d.name} />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <DataPanelDetails category={d.category} date={d.date} id={d._id} deleteData={deleteData} />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })}
        </div>
    )
}

export default DataPanels