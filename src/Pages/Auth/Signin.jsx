import React, { useState } from 'react'
import SignIn from '../../Component/Identitiy/SignInComp'
import classes from './Auth.module.css'
import darkpattern from '../../assets/bg/darkpattern.jpg'
import { useNavigate } from 'react-router-dom'
function Signin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

        <div className={classes['container']}>

            <div className={classes["dark-pattern"]}>
                <h1 className={classes['sign-text']}>Sign <br></br>in</h1>
                <img src={darkpattern} width={500} height={500} alt="" />
            </div>
            <SignIn
                onchangeEmail={(e) => { setEmail(e.target.value) }}
                onchangePassword={(e) => { setPassword(e.target.value) }}
                email={email}
                password={password}

            />
        </div>

    )
}

export default Signin