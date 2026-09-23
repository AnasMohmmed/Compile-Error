import React, { useState } from 'react'
import Dropdown from '../../Component/DisoverCard/Dropdownlist/Dropdown'
import classes from './Invite.module.css'

function InviteModal({ isOpen, onClose, onInvite }) {
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('Developer')
    const [department, setDepartment] = useState('Checkout')

    if (!isOpen) return null

    const handleSubmit = () => {
        if (!email.trim()) return

        onInvite({
            id: Date.now(),
            name: null,
            email,
            role,
            department,
            status: 'Invited',
            isOnDuty: false,
            invitedAt: new Date(),
            joinedAt: null
        })

        setEmail('')
        setRole('Developer')
        setDepartment('Checkout')
        onClose()
    }

    return (
        <div className={classes['overlay']} onClick={onClose}>
            <div className={classes['modal']} onClick={(e) => e.stopPropagation()}>
                <div className={classes['modal-header']}>
                    <h3>Invite User</h3>
                    <span className={classes['close-btn']} onClick={onClose}>✕</span>
                </div>

                <div className={classes['modal-body']}>
                    <label className={classes['field-label']}>Email</label>
                    <input
                        className={classes['text-input']}
                        type="email"
                        placeholder="name@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className={classes['field-label']}>Role</label>
                    <Dropdown
                        label="Role"
                        options={['Developer', 'Team Lead', 'Admin']}
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
                    <button className={classes['submit-btn']} onClick={handleSubmit}>Send Invite</button>
                </div>
            </div>
        </div>
    )
}

export default InviteModal