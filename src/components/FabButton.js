import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import '../styles/FabButton.css'
import { Link } from 'react-router-dom'

 function FabButton() {

    return (
        <div className='fab'>
            <Link to='/add-expense'>
                <AddIcon />
            </Link>
        </div>
    )
}

export default FabButton