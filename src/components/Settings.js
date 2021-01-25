import React, { useState } from 'react'
import './../styles/Settings.css'
import ChipsArray from './ChipsArray'
import { API_URL } from '../utils/utils'
import axios from 'axios'


function Settings({ currentAccount, setCurrentAccount }) {
    const [inputs, setInputs] = useState({ users: '', categories: '' })

    const handleDelete = chipToDelete => async () => {
        const fieldToUpdate = currentAccount.users.includes(chipToDelete) ? 'users' : 'categories'
        const account = await axios.put(`${API_URL}/api/accounts`, {
            fieldToUpdate, accountId: currentAccount._id, data: chipToDelete, operation: 'remove'
        })

        setCurrentAccount(account.data)
    }

    const handleInputs = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleAdd = async fieldToUpdate => {
        const account = await axios.put(`${API_URL}/api/accounts`, {
            fieldToUpdate, accountId: currentAccount._id, data: inputs[fieldToUpdate], operation: 'add'
        })

        setCurrentAccount(account.data)
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
                <ChipsArray chipData={currentAccount.users} handleDelete={handleDelete} />
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
                <ChipsArray chipData={currentAccount.categories} handleDelete={handleDelete} />
            </div>
        </div>
    )
}

export default Settings