import React from 'react'
import { makeStyles } from '@material-ui/core'
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  expanded: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    fontSize: '14px'
  }
}))

function DataPanelDetails(props) {
  const { category, date, id, deleteData } = props
  const classes = useStyles()

  return (
    <div className={classes.expanded}>
      <p>{category ? <span><span>קטגוריה: </span><span>{category}</span></span> : null}</p>
      <p><span>תאריך: </span><span>{moment(date).format("D/M/YYYY")}</span></p>
      <div className='circle-btn edt-btn'><i className="far fa-edit mod-icon edt-icon"></i></div>
      <div className='circle-btn dlt-btn' onClick={() => deleteData(id)}><i className="far fa-trash-alt mod-icon dlt-icon"></i></div>
    </div>
  )
}

export default DataPanelDetails