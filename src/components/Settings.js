import React from 'react'
import './../styles/Reports.css'
import ChipsArray from './ChipsArray'
import { users, expenseCategories } from '../utils'

function Settings(props) {
    const [userData, setUserData] = React.useState(users)
    const [categoriesData, setCategoriesData] = React.useState(expenseCategories)


    const handleDelete = chipToDelete => () => {
        userData.includes(chipToDelete) 
            ? setUserData(chips => chips.filter(chip => chip !== chipToDelete))
            : setCategoriesData(chips => chips.filter(chip => chip !== chipToDelete))
    }

    return (
        <div id="reports-container">
            <div>Users: <button>Edit</button>
                <ChipsArray chipData={userData} handleDelete={handleDelete} />
            </div>
            <div>Categories: <button>Edit</button>
                <ChipsArray chipData={categoriesData} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

export default Settings