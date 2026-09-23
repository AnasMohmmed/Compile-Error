import React, { useState } from 'react'
import Dropdown from '../../Component/DisoverCard/Dropdownlist/Dropdown'
import classes from './SModal.module.css'

function DeptModal({ isOpen, onClose, onAdd }) {
    const [name, setName] = useState('')
    const [tech, setTech] = useState('')
    const [onduty, setOnduty] = useState('Me')

    if (!isOpen) return null


    return (
        <div className={classes['overlay']} onClick={onClose}>
            <div className={classes['modal']} onClick={(e) => e.stopPropagation()}>
                <div className={classes['modal-header']}>
                    <h3>Add Department</h3>
                    <span className={classes['close-btn']} onClick={onClose}>✕</span>
                </div>

                <div className={classes['modal-body']}>
                    <label className={classes['field-label']}>Department name</label>
                    <input
                        className={classes['text-input']}
                        type="text"
                        placeholder="example : checkout"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label className={classes['field-label']}>Onduty</label>
                    <Dropdown
                        label="Onduty"
                        options={['Anas Mohmmed', 'Nour Adel', 'Me']}
                        selected={onduty}
                        onSelect={setOnduty}
                    />
                    <label className={classes['field-label']}>Technology</label>
                    <input
                        className={classes['text-input']}
                        type="text"
                        placeholder="example : checkout"
                        value={tech}
                        onChange={(e) => setTech(e.target.value)}
                    />


                </div>

                <div className={classes['modal-footer']}>
                    <button className={classes['cancel-btn']} onClick={onClose}>Cancel</button>
                    <button className={classes['submit-btn']}>Add Department</button>
                </div>
            </div>
        </div>
    )
}

export default DeptModal