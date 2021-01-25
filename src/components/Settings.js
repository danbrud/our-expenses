import React, { useState } from 'react'
import './../styles/Settings.css'
import ChipsArray from './ChipsArray'
import { API_URL } from '../utils/utils'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentAccount, updateAccount } from '../state/slices/accountSlice'
import Loader from './Loader'


function Settings() {
    const dispatch = useDispatch()

    const currentAccount = useSelector(selectCurrentAccount)

    const [inputs, setInputs] = useState({ users: '', categories: '' })

    const handleDelete = chipToDelete => async () => {
        const fieldToUpdate = currentAccount.users.includes(chipToDelete) ? 'users' : 'categories'
        dispatch(updateAccount({ fieldToUpdate, data: chipToDelete, operation: 'remove' }))
    }

    const handleInputs = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const handleAdd = async fieldToUpdate => {
        dispatch(updateAccount({ fieldToUpdate, data: inputs[fieldToUpdate], operation: 'add' }))
        setInputs({ ...inputs, [fieldToUpdate]: '' })
    }

    return (
        !currentAccount._id
            ? <Loader />
            : (
                <div id="settings-container">
                    <div>
                        <div className="type-container">
                            <p className="data-title">משתמשים</p>
                            <input
                                className="add-data-input"
                                dir="rtl"
                                placeholder="הוסף משתמש"
                                name="users"
                                type="text"
                                value={inputs.users}
                                onChange={handleInputs}
                            />
                            <div className="add-button" onClick={() => handleAdd('users')}>הוסף</div>
                        </div>
                        <ChipsArray chipData={currentAccount.users} handleDelete={handleDelete} />
                    </div>
                    <div>
                        <div className="type-container">
                            <p className="data-title">קטגוריות</p>
                            <input
                                className="add-data-input"
                                dir="rtl"
                                placeholder="הוסף קטגוריה"
                                name="categories"
                                type="text"
                                value={inputs.categories}
                                onChange={handleInputs}
                            />
                            <div className="add-button" onClick={() => handleAdd('categories')}>הוסף</div>
                        </div>
                        <ChipsArray chipData={currentAccount.categories} handleDelete={handleDelete} />
                    </div>
                </div>
            )
    )
}

export default Settings