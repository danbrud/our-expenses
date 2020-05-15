import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '29%',
    flexShrink: 0,
    padding: '0 8px'
  }
}))

function DataPanelSummary(props) {
  const { user, name, amount } = props
  const classes = useStyles()

  return (
    <Fragment>
      <Typography className={classes.heading}>{user}</Typography>
      <Typography className={classes.heading}>{name}</Typography>
      <Typography className={classes.heading}>{amount} ₪</Typography>
    </Fragment>
  )
}

export default DataPanelSummary