import React, { useContext, useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import classes from './Search.module.css'
import { ThemeContext } from '../../Context/ThemeContext'
function SearchBar({ searchText = '', onwrite, onClear, _placeholder }) {
    const [isFocus, setIsFocus] = useState(false);
    const { theme } = useContext(ThemeContext)
    console.log(theme)
    return (
        <div className={`${classes['search-box']} ${isFocus ? classes['focused'] : ''}`}>
            <FiSearch className={classes['search-icon']} size={16} />

            <input
                className={classes['search-input']}
                type="search"
                placeholder={_placeholder}
                value={searchText}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={onwrite}

            />

            {searchText.length > 0 && (
                <FiX
                    className={classes['clear-icon']}
                    size={16}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={onClear}
                />
            )}
        </div>
    )
}

export default SearchBar