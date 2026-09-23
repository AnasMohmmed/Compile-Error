import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import classes from './Dashboard.module.css'
function DashCard(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`${classes.DashCard}`}>
            {
                props.children
            }
        </div>
    )
}

export default DashCard