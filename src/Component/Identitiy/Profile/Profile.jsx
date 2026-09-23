import React from 'react'
import classes from './Profile.module.css'

function Profile() {
    
    const currentUser = {
        name: 'Anas Mohammed',
        email: 'anas@compileerror.dev',
        role: 'Team Lead',
        department: 'Checkout',
        isOnDuty: true,
        joinedAt: 'Mar 2025'
    }

    const ownedServices = [
        { name: 'payments-api', status: 'healthy' },
        { name: 'billing-worker', status: 'degraded' }
    ]

    const initials = currentUser.name
        .split(' ')
        .map(w => w[0])
        .join('')
        .toUpperCase()

    return (
        <div className={classes['container']}>
            <div className={classes['header']}>
                <div className={classes['avatar']}>{initials}</div>
                <div>
                    <div className={classes['name']}>{currentUser.name}</div>
                    <div className={classes['email']}>{currentUser.email}</div>
                    <div className={classes['tags']}>
                        <span className={classes['tag']} data-variant="info">{currentUser.role}</span>
                        <span className={classes['tag']} data-variant="muted">{currentUser.department}</span>
                        {currentUser.isOnDuty && (
                            <span className={classes['tag']} data-variant="success">● On duty</span>
                        )}
                    </div>
                </div>
            </div>

            <div className={classes['stats']}>
                <div className={classes['stat-card']}>
                    <div className={classes['stat-label']}>Services owned</div>
                    <div className={classes['stat-value']}>{ownedServices.length}</div>
                </div>
                <div className={classes['stat-card']}>
                    <div className={classes['stat-label']}>Docs uploaded</div>
                    <div className={classes['stat-value']}>7</div>
                </div>
                <div className={classes['stat-card']}>
                    <div className={classes['stat-label']}>Member since</div>
                    <div className={classes['stat-value']}>{currentUser.joinedAt}</div>
                </div>
            </div>

            <div className={classes['section-title']}>Owned services</div>
            <div className={classes['service-list']}>
                {ownedServices.map(service => (
                    <div key={service.name} className={classes['service-row']}>
                        <span>{service.name}</span>
                        <span className={classes['status-dot']} data-status={service.status}></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Profile