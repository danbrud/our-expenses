import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment'
import axios from 'axios';
import { API_URL } from '../utils/utils';
import { CONSTS } from '../utils/consts';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        direction: 'rtl',
        padding: '0',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '29%',
        flexShrink: 0,
        padding: '0 8px',
        // textAlign: 'center',
    },
    expanded: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyItems: 'center',
        fontSize: '14px'
    },
    paper: {
        backgroundColor: '#EAF2EF',
    },
}))

function DataPanels(props) {
    const { data, setData, type } = props
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const deleteDataInState = (id) => {
        const updatedData = [...data]
        const index = updatedData.findIndex(e => e._id === id)
        updatedData.splice(index, 1)
        setData(updatedData)
    }

    const deleteData = async (id) => {
        const confirmed = window.confirm('בטוח למחוק?')
        if (!confirmed) { return }

        if (type === CONSTS.pluralExpense) {
            await axios.delete(`${API_URL}/api/expenses/${id}`)
        } else {
            await axios.delete(`${API_URL}/api/income/${id}`)
        }
        deleteDataInState(id)
    }

    return (
        <div className={classes.root}>
            {data.map(e => {
                return (
                    <ExpansionPanel key={e._id} className={classes.paper} expanded={expanded === e._id} onChange={handleChange(e._id)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{e.user}</Typography>
                            <Typography className={classes.heading}>{e.expense}</Typography>
                            <Typography className={classes.heading}>{e.amount} ₪</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <div className={classes.expanded}>
                                <p><span>קטגוריה: </span><span>{e.category}</span></p>
                                <p><span>תאריך: </span><span>{moment(e.date).format("D/M/YYYY")}</span></p>
                                <div className='circle-btn edt-btn'><i className="far fa-edit mod-icon edt-icon"></i></div>
                                <div className='circle-btn dlt-btn' onClick={() => deleteData(e._id)}><i className="far fa-trash-alt mod-icon dlt-icon"></i></div>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })}
        </div>
    )
}

export default DataPanels