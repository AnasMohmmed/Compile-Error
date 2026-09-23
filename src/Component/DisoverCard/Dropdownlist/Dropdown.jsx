import React, { useState, useRef, useEffect } from 'react'
import { FiChevronDown } from "react-icons/fi"
import classes from './Dropdown.module.css'

function Dropdown({ label, options, selected, onSelect }) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div className={classes['dropdown']} ref={dropdownRef}>
            <button
                className={classes['dropdown-btn']}
                onClick={() => setIsOpen(!isOpen)}
            >
                {label}: {selected}
                <FiChevronDown className={isOpen ? classes['rotated'] : ''} />
            </button>

            {isOpen && (
                <ul className={classes['dropdown-menu']}>
                    {options.map(option => (
                        <li
                            key={option}
                            className={option === selected ? classes['active'] : ''}
                            onClick={() => {
                                onSelect(option)
                                setIsOpen(false)
                            }}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown