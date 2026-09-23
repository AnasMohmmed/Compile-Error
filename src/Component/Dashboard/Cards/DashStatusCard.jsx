import React, { useContext } from 'react'
import classes from './DashStatus.module.css'
import { FiServer } from "react-icons/fi";
import { ThemeContext } from '../../../Context/ThemeContext'
function DashStatusCard({ servicetitle, sloperc, onduty }) {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className={`${classes["card"]}`}>
                <div className={classes['server-text']}>
                    <FiServer />
                    <span>{servicetitle}</span>
                </div>
                <div className={classes.status}>

                    <div className={

                        sloperc > 90 && sloperc <= 94
                            ? `status-danger ${classes['percent']}`
                            : sloperc >= 95 && sloperc <= 97
                                ? `status-warning ${classes['percent']}`
                                : `status-good ${classes['percent']}`

                    }>
                        <span>SLO {sloperc}%</span>
                    </div>
                    <div className={classes["duty"]}>
                        <span>On duty : {onduty}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashStatusCard