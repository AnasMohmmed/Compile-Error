import React, { useState } from 'react'

import Dashboard from '../../Component/Dashboard/Dashboard'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()

    return (
        <>
            <Dashboard />
        </>
    )

}

export default Home