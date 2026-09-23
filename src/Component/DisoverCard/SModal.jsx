import React, { useState } from 'react'
import Dropdown from '../../Component/DisoverCard/Dropdownlist/Dropdown'
import classes from './SModal.module.css'

function SModal({ isOpen, onClose, onAdd }) {
    const [title, setTitle] = useState('')
    const [role, setRole] = useState('Developer')
    const [department, setDepartment] = useState('Checkout')

    if (!isOpen) return null

    
    return (
        <div className={classes['overlay']} onClick={onClose}>
            <div className={classes['modal']} onClick={(e) => e.stopPropagation()}>
                <div className={classes['modal-header']}>
                    <h3>Add Service</h3>
                    <span className={classes['close-btn']} onClick={onClose}>✕</span>
                </div>

                <div className={classes['modal-body']}>
                    <label className={classes['field-label']}>Title</label>
                    <input
                        className={classes['text-input']}
                        type="text"
                        placeholder="example : service-api"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label className={classes['field-label']}>Onduty</label>
                    <Dropdown
                        label="Onduty"
                        options={['Anas Mohmmed', 'Nour Adel', 'Me']}
                        selected={role}
                        onSelect={setRole}
                    />

                    <label className={classes['field-label']}>Team</label>
                    <Dropdown
                        label="Team"
                        options={['Checkout', 'Platform', 'Identity']}
                        selected={department}
                        onSelect={setDepartment}
                    />
                </div>

                <div className={classes['modal-footer']}>
                    <button className={classes['cancel-btn']} onClick={onClose}>Cancel</button>
                    <button className={classes['submit-btn']}>Add Service</button>
                </div>
            </div>
        </div>
    )
}

export default SModal