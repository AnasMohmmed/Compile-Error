import React, { useState } from 'react'
import ServiceCard from '../../Component/DisoverCard/ServiceCard'
import SearchBar from '../../Component/SearchBar/SearchBar'
import Dropdown from '../../Component/DisoverCard/Dropdownlist/Dropdown'
import classes from './Discover.module.css'
import SModal from '../../Component/DisoverCard/SModal'
import DeptModal from '../../Component/DisoverCard/DeptModal'
function Discover() {
    let Services = [
        { name: 'payments-api', team: 'Checkout', tech: '.NET', status: 'healthy', sloScore: 99.9 },
        { name: 'notifiaction-svc', team: 'Platform', tech: 'Node', status: 'degraded', sloScore: 97.91 },
        { name: 'catalog-ap', team: 'Checkout', tech: '.NET', status: 'down', sloScore: 91.2 },
        { name: 'search-index', team: 'Checkout', tech: 'Paython', status: 'healthy', sloScore: 99.8 },
        { name: 'auth-service', team: 'Checkout', tech: '.NET', status: 'down', sloScore: 92.4 },
        { name: 'billing-worker', team: 'Checkout', tech: 'React', status: 'degraded', sloScore: 96.9 },
    ]
    const [team, setTeam] = useState('All')
    const [status, setStatus] = useState('All')
    const [language, setLanguage] = useState('All')
    const [searchText, setSearchText] = useState('')
    const [deptisopen, setDeptIsopen] = useState(false)
    const [addisopen, setAddIsopen] = useState(false)
    function ChabgeSearchTxt(e) {
        setSearchText(e.target.value);
    }
    function ClearSearchTxt(e) {
        setSearchText('')
    }
    return (
        <>
            <div className={classes["container"]}>
                <div className={classes["discover-head"]}>
                    <h1>Discover</h1>
                    <p>Browse every service across all teams</p>
                </div>
                <div className={classes['search-container']}>
                    <div className={classes['searchbtn']}>
                        <SearchBar searchText={searchText} _placeholder={'Search SLO'} onwrite={ChabgeSearchTxt} onClear={ClearSearchTxt} />
                        <button onClick={() => { setAddIsopen(true) }} className={classes['add-btn']}>Add Service</button>
                        <button onClick={() => { setDeptIsopen(true) }} className={classes['add-btn']}>Add department</button>
                    </div>
                    <div className={classes["dropdowns"]}>
                        <Dropdown label="Team" options={['All', 'Checkout', 'Platform', 'Identity', 'Storefront']} selected={team} onSelect={setTeam} />
                        <Dropdown label="Status" options={['All', 'healthy', 'degraded', 'down']} selected={status} onSelect={setStatus} />
                        <Dropdown label="Language" options={['All', '.NET', 'Node', 'Python']} selected={language} onSelect={setLanguage} />
                    </div>
                </div>
                <div className={classes["service-cards"]}>
                    {
                        Services.map((card) => (
                            <ServiceCard
                                name={card.name}
                                sloScore={card.sloScore}
                                status={card.status}
                                team={card.team}
                                tech={card.tech}
                            />
                        ))
                    }
                </div>

            </div>
            <SModal isOpen={addisopen} onClose={() => { setAddIsopen(false) }} />
            <DeptModal isOpen={deptisopen} onClose={() => { setDeptIsopen(false) }} />
        </>
    )
}

export default Discover