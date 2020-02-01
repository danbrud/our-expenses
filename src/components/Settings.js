import React from 'react'
import './../styles/Settings.css'
import ChipsArray from './ChipsArray'
import { users, expenseCategories } from '../utils'

function Settings(props) {
    const [userData, setUserData] = React.useState(users)
    const [categoriesData, setCategoriesData] = React.useState(expenseCategories)
    const [inputs, setInputs] = React.useState({ user: '', category: '' })


    const handleDelete = chipToDelete => () => {
        userData.includes(chipToDelete)
            ? setUserData(chips => chips.filter(chip => chip !== chipToDelete))
            : setCategoriesData(chips => chips.filter(chip => chip !== chipToDelete))
    }

    const handleInputs = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleAdd = type => {

    }

    return (
        <div id="settings-container">
            <div>
                <div class="type-container">
                    <p class="data-title">משתמשים</p>
                    <input
                        class="add-data-input"
                        dir="rtl"
                        placeholder="הוסף משתמש"
                        name="user"
                        type="text"
                        value={inputs.user}
                        onChange={handleInputs}
                    />
                    <div class="add-button" onClick={() => handleAdd('user')}>הוסף</div>
                </div>
                <ChipsArray chipData={userData} handleDelete={handleDelete} />
            </div>
            <div>
                <div class="type-container">
                    <p class="data-title">קטגוריות</p>
                    <input
                        class="add-data-input"
                        dir="rtl"
                        placeholder="הוסף קטגוריה"
                        name="category"
                        type="text"
                        value={inputs.category}
                        onChange={handleInputs}
                    />
                    <div class="add-button" onClick={() => handleAdd('category')}>הוסף</div>
                </div>
                <ChipsArray chipData={categoriesData} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

export default Settings