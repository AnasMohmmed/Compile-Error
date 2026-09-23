import React from 'react'
import classes from './Dev.module.css'
function DevCard({ devname, role, status, circleColor = 'info' }) {
    let GetAcroName = (name) => {
        let acro = name.split(' ')
            .slice(0, 2)
            .map((m) => m[0])

        return acro
    }
    return (
        <>
            <div className={classes["container"]} >
                <div className={classes["dev-name-img"]} style={{ backgroundColor: `var(--${circleColor})` }}>
                    <span>{GetAcroName(devname)}</span>
                </div>
                <div className={classes["dev-details"]}>
                    <span className={classes.devname}>{devname}</span>
                    <span className={classes.role}>{role}</span>
                </div>
                <div className={classes["dot-status"]}>
                    <span className={classes['status-dot']} status={status == 'available' ? 'available' : ''}></span>
                </div>
            </div >
        </>
    )
}

export default DevCard