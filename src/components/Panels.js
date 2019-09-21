import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        direction: 'rtl',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
        textAlign: 'center',
    },
    expanded: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        justifyItems: 'center',
    },
    // secondaryHeading: {
    //     fontSize: theme.typography.pxToRem(15),
    //     color: theme.palette.text.secondary,
    //     flexBasis: '33.33%',
    //     flexShrink: 0,
    // },
}))

export default function Panels(props) {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(false)

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className={classes.root}>
            {props.expenses.map(e => {
                return (
                    <ExpansionPanel expanded={expanded === e._id} onChange={handleChange(e._id)}>
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
                                <p><span>תאריך: </span><span>{moment(e.   date).format("l")}</span></p>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })}
        </div>
    )
}