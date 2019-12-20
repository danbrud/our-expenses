import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import lightBlue from "@material-ui/core/colors/lightBlue";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import 'moment/locale/he';

moment.locale('he')

const useStyles = makeStyles(theme => ({
    root: {
        width: '98%',
        direction: 'rtl',
        position: 'relative',
        display: 'grid',
        justifySelf: 'center',
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
                color: '#34495e',
            },
            monthSelected: {
                backgroundColor: '#34495e',
            },
            dayDisabled: {
                color: '#34495e',
            },
            current: {
                color: '#34495e',
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#34495e',
            },
        },
    },
})

export default function DateSelector(props) {
    const classes = useStyles()

    const handleDateChange = date => props.changeDate(new Date(date))

    return (
        <div className={classes.root}>
            <ThemeProvider theme={materialTheme}>
                <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                    <KeyboardDatePicker className={classes.picker}
                        margin="normal"
                        id="date-picker-dialog"
                        format="L"
                        value={props.date}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        okLabel="בחר"
                        cancelLabel="בטל"
                    />
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </div>
    )
}