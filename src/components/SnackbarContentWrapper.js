import React from 'react'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ErrorIcon from '@material-ui/icons/Error';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { makeStyles } from '@material-ui/core/styles';

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

function SnackbarContentWrapper(props) {
  const classes = useStyles()
  const { className, message, variant } = props
  const Icon = ErrorIcon

  return (
    <SnackbarContent
      className={`${clsx(classes[variant], className)} ${classes.container}`}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      />
  );
}

SnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default SnackbarContentWrapper