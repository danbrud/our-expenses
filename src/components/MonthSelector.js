import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import 'moment/locale/he';
import '../styles/Expense.css'
import lightBlue from "@material-ui/core/colors/lightBlue";
import { makeStyles } from '@material-ui/core/styles';

moment.locale('he')

const useStyles = makeStyles(theme => ({
    root: {
        width: '98%',
        direction: 'rtl',
        position: 'relative',
        display: 'grid',
        justifySelf: 'center',
        margin: '3px'
    },
    picker: {
        paddingRight: '5px',
        fontSize: '1.5rem',
    },
}))


const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#34495e',
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                // backgroundColor: lightBlue.A200,
                // color: "white",
            },
        },
        MuiPickersDay: {
            day: {
                color: lightBlue.A700,
            },
            monthSelected: {
                backgroundColor: '#34495e',
            },
            dayDisabled: {
                color: lightBlue["100"],
            },
            current: {
                color: lightBlue["900"],
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#34495e',
            },
        },
    },
})

function MonthSelector(props) {
    const classes = useStyles()
    const [selectedDate, handleDateChange] = useState(new Date())

    const handleChange = date => {
        handleDateChange(date)

        const formattedDate = new Date(date)
        props.changeCurrentDate(formattedDate)
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