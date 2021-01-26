import React from 'react'

function NoData({ type }) {

  return (
    <div className="no-data-msg">אין {type} לחודש זה</div>
  )
}

export default NoData