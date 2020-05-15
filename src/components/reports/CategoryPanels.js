import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DataPanels from '../data/DataPanels'
import { CONSTS } from '../../utils/consts';
import { formatAmount } from '../../utils/utils';

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
    const { setExpenses, category, color, expanded } = props
    const classes = useStyles()

    const handleChange = panel => (event, isExpanded) => {
        props.setExpanded(isExpanded ? panel : false)
    }

    return (
        <div className={classes.root}>
            <ExpansionPanel style={{ backgroundColor: color }} expanded={expanded === category.name} onChange={handleChange(category.name)}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>{category.name}</Typography>
                    <Typography className={classes.heading}>{formatAmount(category.total)} ₪</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <DataPanels data={category.expenses} setData={setExpenses} type={CONSTS.pluralExpense}/>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}