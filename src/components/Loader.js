import React from 'react'
import './../styles/Loader.css'


function Loader() {

    return (
        <div id='loader-container'>
            <div className='lds-dual-ring'></div>
        </div>
    )
}

export default Loader