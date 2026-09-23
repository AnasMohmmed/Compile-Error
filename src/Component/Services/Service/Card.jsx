import React, { useContext } from 'react'
import { FiCode, FiBookOpen, FiGitBranch, FiTriangle } from "react-icons/fi";
import classes from './Service.module.css'
import { ThemeContext } from '../../../Context/ThemeContext';
function Card({ icon = <FiGitBranch />, serviceTitle, servname, updated, devname }) {
    return (
        <>
            <div className={classes["container"]} >
                <div className={classes["icon"]}>
                    {icon}
                </div>
                <div className={classes["details"]}>
                    <span>{serviceTitle}</span>
                    <span>Updated {updated} ago · {devname}</span>
                </div>
                <div className={classes["serv-name"]}>
                    <span >{servname}</span>
                </div>
            </div>
        </>
    )
}

export default Card