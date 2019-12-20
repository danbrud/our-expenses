import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import 'moment/locale/he';
import '../styles/Expense.css'
import lightBlue from "@material-ui/core/colors/lightBlue";

moment.locale('he')

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
            daySelected: {
                backgroundColor: lightBlue["400"],
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
                color: '#1e1e1e',
            },
        },
    },
})

function MonthSelector(props) {
    const [selectedDate, handleDateChange] = useState(new Date())

    const handleChange = date => {
        console.log(date)
        handleDateChange(date)
        // props.changeCurrentMonth(date)
    }

    return (
        <ThemeProvider theme={materialTheme}>
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                <DatePicker
                    views={["year", "month"]}
                    maxDate={new Date()}
                    value={selectedDate}
                    onChange={handleChange}
                    okLabel="בחר"
                    cancelLabel="בטל"
                />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    )
}

export default MonthSelector
    // <select
    //     id='month-selector'
    //     dir='rtl'
    //     value={props.currentMonth}
    //     onChange={(e) => props.changeCurrentMonth(e.target.value)}
    // >
    //     {months.map((m, i) => <option key={i} value={i}>{m}</option>)}
    // </select>