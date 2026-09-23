import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import ServSidebar from '../../Component/Services/Sidebar/ServSidebar'
import Services from '../../Component/Services/Service/Service'
import classes from './Folders.module.css'
import { Outlet } from 'react-router-dom'
import Service from '../../Component/Services/Service/Service'
function Folders() {
    let sideCards = [
        { ServiceName: 'payments-api' },
        { ServiceName: 'notifications-svc' },
        { ServiceName: 'auth-service' },
        { ServiceName: 'catalog-api' },
    ]
    let [service, setService] = useState('');
    return (
        <>
            <div className={classes["container"]}>

                <ServSidebar sideCards={sideCards} />

                <div className={classes['services']} >

                    <Services />
                </div>

            </div >
        </>
    )
}

export default Folders