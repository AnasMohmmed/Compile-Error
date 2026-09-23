import React from 'react'
import classes from './Identity.module.css'
import { MdMarkEmailRead } from "react-icons/md";

function Invitation({ onchangeEmail, onchangeFullname, onchangePassword, onchangePConfpassword, onCliclActivate }) {
    return (
        <div className={classes["container"]}>

            <div className={classes["sign-head"]}>
                <div className={classes['logo-txt']}>
                    <span>Compile Error</span>
                </div>
                <span>Complete your account setup</span>
            </div>

            <div className={classes['info-text']}>
                <MdMarkEmailRead /> <span>You were invited as Developer on team Checkout</span>
            </div>

            <div className={classes["sign-form"]}>
                <form action="">
                    <label htmlFor="">Email</label>           <input className={classes['log-input']} placeholder='name@company.com' type="email" onChange={onchangeEmail} />
                    <label htmlFor="">Full name</label>       <input className={classes['log-input']} placeholder='name@company.com' type="text" onChange={onchangeEmail} />
                    <label htmlFor="">Create password</label> <input className={classes['log-input']} type="password" placeholder='@#123md' onChange={onchangePassword} />
                    <label htmlFor="">Confirm password</label><input className={classes['log-input']} type="password" placeholder='@#123md' onChange={onchangePConfpassword} />
                    <button className={classes['activate-btn']} type='button' onClick={onCliclActivate}>Activate account</button>
                </form>

            </div>

        </div>
    )
}

export default Invitation