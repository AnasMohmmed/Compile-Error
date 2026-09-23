import React, { useContext, useEffect, useRef, useState } from 'react'
import classes from './Nav.module.css'
import { FiSearch, FiBell, FiBookmark, FiUser, FiSun, FiMoon } from "react-icons/fi";
import SearchBar from '../SearchBar/SearchBar'
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import { Button } from 'bootstrap';
function Navbar({ onclickTheme, theme }) {
    let [searchtxt, setSerchText] = useState('');
    let [bellisopen, setBellisopen] = useState(false);
    const notificationPopupRef = useRef(null);
    const { islogined } = useContext(ThemeContext)

    useEffect(() => {
        const notificationPopup = notificationPopupRef.current;

        if (!notificationPopup) return;

        if (bellisopen) {
            notificationPopup.showPopover();
        } else {
            notificationPopup.hidePopover();
        }
    }, [bellisopen]);
    function SetChange(e) {
        setSerchText(e.target.value)
    }
    console.log(bellisopen)
    function ClearTxt(e) {
        setSerchText(e.target.value)
    }
    let navigate = useNavigate();
    return (
        <>
            <div className={`${classes.container}`}>
                <div className={classes['left-side']}>
                    <span className={`${classes.hello}`}>{islogined ? 'Hello Anas Mohmmed🤖' : <div className={classes['sign-container']}> <Link className={classes['sign-link']} to={'/signin'}>Login</Link></div>}</span>
                </div>

                {
                    islogined &&
                    <div className={classes['right-side']}>
                        <div className={classes['Search-bar']}>
                            <SearchBar
                                _placeholder={'Search'}
                                onwrite={SetChange}
                                searchText={searchtxt}
                                onClear={ClearTxt}
                            />
                        </div>

                        <div className={classes.icons}>
                            <ul className={classes['nav-icons']}>
                                <li className={classes['li-icon']} onClick={() => setBellisopen(!bellisopen)} > <FiBell /> </li>
                                <li className={classes['li-icon']} onClick={() => { navigate('/saved') }}> <FiBookmark /> </li>
                                <li className={classes['li-icon']} onClick={() => { navigate('/profile') }}> <FiUser /> </li>
                                <li className={classes['li-icon']} onClick={() => { onclickTheme() }} > {theme == 'dark' ? <FiSun /> : <FiMoon />} </li>
                            </ul>
                        </div>
                        <div ref={notificationPopupRef} id="notif-popup" className="notif-popup" popover="auto">
                                <div className="notif-popup__head">
                                    <h2>Notifications</h2>
                                    <a href="#" className="notif-popup__link">Mark all as read</a>
                                </div>

                                <ul className="notif-popup__list">
                                    <li>
                                        <a href="#" className="notif-popup__item notif-popup__item--unread">
                                            <span className="notif-popup__avatar">S</span>
                                            <span className="notif-popup__content">
                                                <p><strong>Sara</strong> commented on your pull request</p>
                                                <time>2 min ago</time>
                                            </span>
                                            <span className="notif-popup__dot"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="notif-popup__item notif-popup__item--unread">
                                            <span className="notif-popup__avatar">M</span>
                                            <span className="notif-popup__content">
                                                <p><strong>Mohamed</strong> started following you</p>
                                                <time>1 hour ago</time>
                                            </span>
                                            <span className="notif-popup__dot"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="notif-popup__item">
                                            <span className="notif-popup__avatar">A</span>
                                            <span className="notif-popup__content">
                                                <p><strong>Ahmed</strong> mentioned you in a comment</p>
                                                <time>2 days ago</time>
                                            </span>
                                            <span className="notif-popup__dot"></span>
                                        </a>
                                    </li>
                                </ul>

                                <div className="notif-popup__foot">
                                    <a href="#" className="notif-popup__link">View all notifications</a>
                                </div>
                        </div>

                    </div>
                }
            </div >
        </>
    )
}

export default Navbar