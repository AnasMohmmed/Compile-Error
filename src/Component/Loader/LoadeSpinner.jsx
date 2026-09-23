import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'
import classes from './Loader.module.css'
function LoadeSpinner() {
    return (
        <div className={classes.loader}>
            <CirclesWithBar
                height="100"
                width="100"
                color="#4d69a9"
                outerCircleColor="#4d69a9"
                innerCircleColor="#4d69a9"
                barColor="#4d69a9"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default LoadeSpinner