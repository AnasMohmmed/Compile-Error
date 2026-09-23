import React, { useState } from 'react'
import { FiLock } from 'react-icons/fi'
import classes from './Settings.module.css'

const TABS = ['Account', 'Notifications', 'Appearance', 'Workspace']

function Settings() {
    const [activeTab, setActiveTab] = useState('Account')
    const [isOnDuty, setIsOnDuty] = useState(true)
    const currentUser = { role: 'Admin' }
    const isAdmin = currentUser.role === 'Admin'

    return (
        <div className={classes['container']}>
            <div className={classes['sidebar']}>
                {TABS.map(tab => {
                    const isWorkspace = tab === 'Workspace'
                    const isLocked = isWorkspace && !isAdmin

                    return (
                        <div
                            key={tab}
                            className={classes['tab']}
                            data-active={tab === activeTab}
                            data-locked={isLocked}
                            onClick={() => !isLocked && setActiveTab(tab)}
                        >
                            {tab}
                            {isLocked && <FiLock size={11} />}
                        </div>
                    )
                })}
            </div>

            <div className={classes['content']}>
                {activeTab === 'Account' && (
                    <>
                        <div className={classes['title']}>Account settings</div>

                        <div className={classes['field']}>
                            <label>Full name</label>
                            <input type="text" defaultValue="Anas Mohammed" />
                        </div>

                        <div className={classes['field']}>
                            <label>Email</label>
                            <input type="email" defaultValue="anas@compileerror.dev" disabled />
                        </div>

                        <hr className={classes['divider']} />

                        <div className={classes['subtitle']}>Change password</div>

                        <div className={classes['field']}>
                            <label>Current password</label>
                            <input type="password" />
                        </div>

                        <div className={classes['field']}>
                            <label>New password</label>
                            <input type="password" />
                        </div>

                        <hr className={classes['divider']} />

                        <div className={classes['toggle-row']}>
                            <div>
                                <div className={classes['toggle-title']}>On-duty availability</div>
                                <div className={classes['toggle-desc']}>Show as available for incident response</div>
                            </div>
                            <div
                                className={classes['switch']}
                                data-on={isOnDuty}
                                onClick={() => setIsOnDuty(prev => !prev)}
                            >
                                <div className={classes['switch-knob']}></div>
                            </div>
                        </div>

                        <button className={classes['save-btn']}>Save changes</button>
                    </>
                )}

                {activeTab !== 'Account' && (
                    <div className={classes['placeholder']}>{activeTab} settings — coming soon</div>
                )}
            </div>
        </div>
    )
}

export default Settings