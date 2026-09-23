import React, { useState, useContext } from 'react'
import classes from './ServSidebar.module.css'
import { Link } from 'react-router-dom'
import { FiServer } from 'react-icons/fi'
import { ThemeContext } from '../../../Context/ThemeContext'
function ServSidebar({ sideCards }) {
    const [activepage, setActivePage] = useState(`${sideCards[0].ServiceName}`);
    let { serviceactive, setServiceactive } = useContext(ThemeContext)
    console.log(serviceactive)
    return (
        <>
            <div className={classes["container"]}>
                <span className={classes['service-head']}>Services</span>
                <div className={classes["services-menu"]}>
                    <ul className={classes['services-ulist']}>
                        {
                            sideCards.map((c) =>
                                <li data-active={c.ServiceName == activepage} className={classes['service-card']}
                                    onClick={() => { setActivePage(c.ServiceName) }}>
                                    <div onClick={() => c.ServiceName == activepage ? setServiceactive(c.ServiceName) : ''} className={classes['side-link']}>
                                        <FiServer /><span>{c.ServiceName}</span>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ServSidebar