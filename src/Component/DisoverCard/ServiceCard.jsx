import React from 'react'
import { FiServer } from "react-icons/fi";
import classes from './ServCard.module.css'
function ServiceCard({ name, team, tech, status, sloScore }) {
    return (
        <>
            <div className={classes["container"]}>
                <div className={classes["card-head"]}>
                    <FiServer />
                    <span>{name}</span>
                    <span className={classes['status-dot']} data-status={status}></span>
                </div>
                <div className={classes["card-body"]}>
                    <span>Team: {team}</span>
                </div>
                <div className={classes['card-status']}>
                    <div className={classes["tech"]}>
                        <span>{tech}</span>
                    </div>
                    <div className={(sloScore >= 90 && sloScore <= 95) ? `status-danger ${classes['percent']}` : (sloScore >= 96 && sloScore <= 98) ? `status-warning ${classes['percent']}` : `status-good ${classes['percent']}`}>
                        <span>SLO {sloScore}%</span>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ServiceCard