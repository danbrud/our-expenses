import React from 'react'

function NoData(props) {
  const { type } = props

  return <div className="no-data-msg">אין {type} לחודש זה</div>
}

export default NoData