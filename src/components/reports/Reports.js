import React from 'react'
import MonthSelector from '../general/MonthSelector'
import FabButton from '../FabButton'
import Loader from '../Loader'
import Categories from './Categories'
import './../../styles/Reports.css'
import TableHeader from '../general/TableHeader'
import NoData from '../general/NoData'
import { CONSTS } from '../../utils/consts'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}))

function Reports(props) {
    const { currentDate, changeCurrentDate, expenses, setExpenses } = props
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div id="reports-container">
            <MonthSelector currentDate={currentDate} changeCurrentDate={changeCurrentDate} />
            {/* <div className={classes.root}>
                <AppBar position="static" color='primary'>
                    <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    Item One
      </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
      </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
      </TabPanel>
            </div> */}

            <TableHeader />
            {
                expenses.length
                    ? <Categories expenses={expenses} setExpenses={setExpenses} />
                    : props.isLoading
                        ? < Loader />
                        : <NoData type={CONSTS.pluralExpense} />
            }
            <FabButton />
        </div>
    )
}

export default Reports




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}