import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../styles/FabButton.css'
import { Link } from 'react-router-dom';

 function FabButton() {

    return (
        <div className="fab">
            <Link to='/add-expense'>
                <AddIcon />
            </Link>
        </div>
    )
}

export default FabButton