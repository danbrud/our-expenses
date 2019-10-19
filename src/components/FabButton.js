import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../styles/FabButton.css'

 function FabButton() {

    return (
        <div className="fab">
            <Fab color="primary" href='/add-expense'>
                <AddIcon />
            </Fab>
        </div>
    )
}

export default FabButton