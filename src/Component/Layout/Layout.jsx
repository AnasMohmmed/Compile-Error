import React, { useContext, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import classes from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'
function Layout() {
    const [isopen, setIsopen] = useState(true);
    const { theme, setTheme } = useContext(ThemeContext);
    let themeToggle = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark')
    }
    return (
        <>
            <div className={`${classes['container']}`}>
                <div className={`${classes['side-bar']}`}>
                    <Sidebar isopen={isopen} setIsopen={setIsopen} />
                </div>

                <div className={`${classes['nav-bar']} ${isopen ? classes['nav-bar'] : classes['nav-grow']}`}>
                    <Navbar theme={theme} onclickTheme={themeToggle} />
                </div>
                <div className={`${classes['render-comp']} ${isopen ? classes['render-open'] : classes['render-close']}`}>
                    <Outlet>

                    </Outlet>
                </div>
            </div>
        </>
    )
}

export default Layout