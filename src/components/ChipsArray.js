import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}))

export default function ChipsArray(props) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {props.chipData.map(data => {

        return (
          <Chip
            key={data}
            label={data}
            onDelete={props.handleDelete(data)}
            className={classes.chip}
          />
        )
      })}
    </div>
  )
}