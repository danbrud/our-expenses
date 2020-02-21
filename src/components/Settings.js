import React from 'react'
import './../styles/Settings.css'
import ChipsArray from './ChipsArray'
import { API_URL } from '../utils/utils'
import axios from 'axios'


function Settings(props) {
    const [inputs, setInputs] = React.useState({ users: '', categories: '' })

    const handleDelete = chipToDelete => async () => {
        const fieldToUpdate = props.currentAccount.users.includes(chipToDelete) ? 'users' : 'categories'
        const account = await axios.put(`${API_URL}/api/accounts`, {
            fieldToUpdate, accountId: props.currentAccount._id, data: chipToDelete, operation: 'remove'
        })
        
        props.setCurrentAccount(account.data)
    }

    const handleInputs = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleAdd = async fieldToUpdate => {
        const account = await axios.put(`${API_URL}/api/accounts`, {
            fieldToUpdate, accountId: props.currentAccount._id, data: inputs[fieldToUpdate], operation: 'add'
        })

        props.setCurrentAccount(account.data)
        setInputs({ ...inputs, [fieldToUpdate]: '' })
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
                        name="users"
                        type="text"
                        value={inputs.users}
                        onChange={handleInputs}
                    />
                    <div class="add-button" onClick={() => handleAdd('users')}>הוסף</div>
                </div>
                <ChipsArray chipData={props.currentAccount.users} handleDelete={handleDelete} />
            </div>
            <div>
                <div class="type-container">
                    <p class="data-title">קטגוריות</p>
                    <input
                        class="add-data-input"
                        dir="rtl"
                        placeholder="הוסף קטגוריה"
                        name="categories"
                        type="text"
                        value={inputs.categories}
                        onChange={handleInputs}
                    />
                    <div class="add-button" onClick={() => handleAdd('categories')}>הוסף</div>
                </div>
                <ChipsArray chipData={props.currentAccount.categories} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

export default Settings