import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import ErrorIcon from '@material-ui/icons/Error'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: '#a01e1e',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginLeft: '10px',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    direction: 'rtl'
  }
}))

function SnackbarContentWrapper({ className, message, variant }) {
  const classes = useStyles()

  return (
    <SnackbarContent
      className={`${clsx(classes[variant], className)} ${classes.container}`}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      />
  )
}


export default SnackbarContentWrapper