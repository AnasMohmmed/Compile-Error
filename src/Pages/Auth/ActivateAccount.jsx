import React from 'react'
import Inv from '../../Component/Identitiy/Invitation'
import activImg from '../../assets/bg/activate-img.png'
import classes from './Auth.module.css'
function ActivateAccount() {
    return (
        <div className={classes['container']}>
            <div className={classes["activat-img"]}>
                <img src={activImg} width={500} height={500} alt="" />
            </div>
            <Inv />
        </div>
    )
}

export default ActivateAccount