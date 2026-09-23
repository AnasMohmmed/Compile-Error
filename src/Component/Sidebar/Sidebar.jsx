import React, { useContext, useState } from 'react'
import classes from './Sidebar.module.css'
import { ThemeContext } from '../../Context/ThemeContext'

import {
    FiActivity,
    FiCompass,
    FiUsers,
    FiFolder,
    FiStar,
    FiBell,
    FiMessageSquare,
    FiSettings,
    FiUser,
    FiLogOut,
    FiMenu
} from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
function Sidebar({ isopen, setIsopen }) {
    let navigate = useNavigate();
    const { theme } = useContext(ThemeContext)
    console.log(theme)
    let [open, setOpen] = useState(true)
    return (
        <>

            {

                < div className={`${classes.container} ${open ? classes.isopen : classes.isclose}`}>
                    <div className={`${classes['logo-txt']} d-flex justify-content-around`}>
                        <span className={`${classes['error-txt']} ${open ? '' : classes['logo-hide']}`}> Compile Error</span>
                        <button
                            className={classes['menu-btn']}
                            onClick={() => {
                                setOpen(!open)
                                setIsopen(!open)
                            }}
                        >
                            <FiMenu />
                        </button>
                    </div>
                    {
                        <div className={`${classes.icons} `}>
                            <div className={`${classes['side-bar']}  ${open ? '' : classes['hide']}`}>
                                <ul className={classes['side-menu']}>

                                    <li className={classes['side-card']}>
                                        <Link className={classes['side-link']} to={''}>
                                            <FiActivity />
                                            <span  >Home</span>
                                        </Link>
                                    </li>

                                    <li className={classes['side-card']}>
                                        <Link className={classes['side-link']} to={'/discover'}>
                                            <FiCompass />
                                            <span  >Discover</span>
                                        </Link>
                                    </li>
                                    <li className={classes['side-card']}>
                                        <Link className={classes['side-link']} to={'/developers'}>
                                            <FiUsers />
                                            <span  >Developers</span>
                                        </Link>
                                    </li>
                                    <li className={classes['side-card']}>
                                        <Link className={classes['side-link']} to={'/users'}>
                                            <FiUsers />
                                            <span  >Users</span>
                                        </Link>
                                    </li>
                                    <li className={classes['side-card']}>
                                        <Link className={classes['side-link']} to={'/folders'}>
                                            <FiFolder />
                                            <span  >Folders</span>
                                        </Link>
                                    </li>



                                </ul>


                                <ul className={classes['info-menu']}>
                                    <li className={classes['side-card']}>
                                        <Link className={classes['side-link']} to={'/settings'}>
                                            <FiSettings />
                                            <span className={`${open ? '' : classes['hied-tex']}`}>Settings</span>
                                        </Link>
                                    </li>
                                    <li className={classes['side-card']}>
                                        <Link className={classes['side-link']} to={'/profile'}>
                                            <FiUser />
                                            <span className={`${open ? '' : classes['hied-tex']}`}>Profile</span>
                                        </Link>
                                    </li>
                                    <li className={classes['side-card']}>
                                        <Link className={classes['side-link']} onClick={() => { navigate('/signin') }}>
                                            <FiLogOut />
                                            <span className={`${open ? '' : classes['hied-tex']}`}>Logout</span>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    }

                </div >
            }
        </>
    )
}

export default Sidebar