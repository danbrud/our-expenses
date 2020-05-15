import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import { ThemeProvider } from "@material-ui/styles";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import 'moment/locale/he';
import '../../styles/Expense.css'
import { makeStyles } from '@material-ui/core/styles';
import { materialTheme } from '../../themes/DatePicker'

moment.locale('he')

const useStyles = makeStyles(theme => ({
    root: {
        width: '98%',
        direction: 'rtl',
        position: 'relative',
        display: 'grid',
        justifySelf: 'center',
        alignItems: 'center',
        margin: '3px',
        height: '50px'
    },
    picker: {
        paddingRight: '5px',
        fontSize: '1.5rem',
    },
}))




function MonthSelector(props) {
    const classes = useStyles()
    const { currentDate, changeCurrentDate } = props
    const [selectedDate, handleDateChange] = useState(currentDate)

    const handleChange = date => {
        handleDateChange(date)

        const formattedDate = new Date(date)
        changeCurrentDate(formattedDate)
    }

    return (
        <div className={classes.root}>
        <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                <DatePicker
                    views={["year", "month"]}
                    maxDate={new Date()}
                    value={selectedDate}
                    onChange={handleChange}
                    okLabel="בחר"
                    cancelLabel="בטל"
                    autoOk={true}
                />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
        </div>
    )
}

export default MonthSelector