import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpensePanels from './ExpensePanels'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        direction: 'rtl',
        padding: '0',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '65%',
        flexShrink: 0,
        padding: '0 8px',
        // textAlign: 'center',
    },
    expanded: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyItems: 'center',
    },
}))

export default function CategoryPanels(props) {
    const classes = useStyles()

    const handleChange = panel => (event, isExpanded) => {
        props.setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel style={{ backgroundColor: props.color }} expanded={props.expanded === props.category.name} onChange={handleChange(props.category.name)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>{props.category.name}</Typography>
                    <Typography className={classes.heading}>{props.category.total} ₪</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <ExpensePanels expenses={props.category.expenses}/>
                    {/* <div className={classes.expanded}>
                        <p><span>קטגוריה: </span><span>{e.category}</span></p>
                        <p><span>תאריך: </span><span>{moment(e.date).format("D/M/YYYY")}</span></p>
                    </div> */}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}