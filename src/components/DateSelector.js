import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

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

export default function DateSelector(props) {
    const classes = useStyles()
    const [selectedDate, setSelectedDate] = React.useState(new Date())

    const handleDateChange = function (date) {
        setSelectedDate(date)
    }

    return (
        <div className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker className={classes.picker}
                    margin="normal"
                    id="date-picker-dialog"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </div>
    )
}