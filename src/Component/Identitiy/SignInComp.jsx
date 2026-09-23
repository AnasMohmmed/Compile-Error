import { AiFillGoogleSquare } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import classes from './Identity.module.css'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext'
function SignInComp({ onchangeEmail, email, onchangePassword, password, onclickGservice }) {
    const navigate = useNavigate()
    const { setIslogined } = useContext(ThemeContext)
    let [error_message, setError_Message] = useState('');
    let user = {
        email: 'a@gmail.com',
        password: '123'
    }
    let checkUser = () => {
        if (user.email === email && user.password === password) {
            setIslogined(true)
            navigate('/')
        }
        else if (email.length === 0 || password.length === 0) {
            setError_Message('You must fill all fields')
        }
        else if (user.email != email || password != user.password) {
            setError_Message('error in email or password')
        }
        else {
            setError_Message('unkown error')
        }

    }
    return (
        <div className={classes["container"]}>
            <div className={classes["sign-head"]}>
                <div className={classes['logo-txt']}>
                    <span>Compile Error</span>
                </div>
                <span>Sign in to your developer portal</span>
            </div>
            <div>
                {
                    error_message.length > 0 ? <span className={classes['error-text']}>* {error_message}*</span> : ''

                }
            </div>
            <div className={classes["sign-form"]}>
                <form action="">
                    <label htmlFor="">Email</label> <input className={classes['log-input']} placeholder='name@company.com' type="text" onChange={onchangeEmail} />
                    <div className={classes['password-txt']}><label htmlFor="">Password</label><a href='#'>Forgot?</a></div>
                    <input className={classes['log-input']} type="password" placeholder='@#123md' onChange={onchangePassword} />
                    <button className={classes['log-btn']} type='button' onClick={() => { checkUser() }}>Sign in</button>
                </form>
                <hr />
                <span className={classes['or']}>OR</span>
            </div>
            <div className={classes["signwith-otherservice"]}>
                <button className={classes['log-btn']}><AiFillGoogleSquare size={25} />Continue with Google</button>
                <span>No account? You need an invite from your Admin.</span>
            </div>
        </div>
    )
}

export default SignInComp