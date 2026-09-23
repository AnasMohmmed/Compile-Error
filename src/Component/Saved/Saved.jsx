import React, { useState } from 'react'
import { FiServer, FiStar } from 'react-icons/fi'
import classes from './Saved.module.css'

function Saved() {
  
    const allServices = [
        { id: 1, name: 'payments-api', status: 'healthy', sloScore: 99.9 },
        { id: 2, name: 'notifications-svc', status: 'degraded', sloScore: 97.1 },
        { id: 3, name: 'auth-service', status: 'down', sloScore: 92.4 },
        { id: 4, name: 'billing-worker', status: 'degraded', sloScore: 96.9 }
    ]

    const [savedIds, setSavedIds] = useState([1, 3, 4])

    const savedServices = allServices.filter(service => savedIds.includes(service.id))

    const unsave = (id) => {
        setSavedIds(prev => prev.filter(savedId => savedId !== id))
    }

    return (
        <div className={classes['container']}>
            <div className={classes['head-title']}>Saved</div>
            <div className={classes['head-subtitle']}>Services you're keeping an eye on</div>

            {savedServices.length === 0 ? (
                <div className={classes['empty']}>No saved services yet</div>
            ) : (
                <div className={classes['list']}>
                    {savedServices.map(service => (
                        <div key={service.id} className={classes['row']}>
                            <div className={classes['row-left']}>
                                <FiServer size={16} className={classes['icon']} />
                                <span>{service.name}</span>
                            </div>
                            <div className={classes['row-right']}>
                                <span className={classes['pill']} data-status={service.status}>
                                    SLO {service.sloScore}%
                                </span>
                                <FiStar
                                    size={16}
                                    className={classes['star']}
                                    fill="var(--warning)"
                                    onClick={() => unsave(service.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Saved