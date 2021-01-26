import { createMuiTheme } from "@material-ui/core";

export const materialTheme = createMuiTheme({
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
        //   dialogAction: {
        //       color: '#34495e',
        //   },
      },
  },
})