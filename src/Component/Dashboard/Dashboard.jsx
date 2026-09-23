import React, { useContext, useState } from 'react'
import DashCard from './DashCard'
import SearchBar from '../SearchBar/SearchBar'
import classes from './Dashboard.module.css'
import DashStatusCard from './Cards/DashStatusCard'
import SLOTrendChart from '../Charts/SLOTrendChart'
import { ThemeContext } from '../../Context/ThemeContext'
function Dashboard() {
    let [searchtxt, setSearchtxt] = useState('');
    const { theme, islogined } = useContext(ThemeContext);
    function onWrite(e) {
        setSearchtxt(e.target.value)
    }
    function onClear(e) {
        setSearchtxt('')
    }
    return (

        <>
            {islogined ?
                <div className={classes.container}>

                    <div className={classes["dash-head"]}>
                        <h1>Dashboard</h1>
                        <p>Summary of your codebase and team applictions</p>
                    </div>

                    <div className={classes.cards}>
                        <DashCard>
                            <h2>Services healthy</h2>
                            <h2 className={classes.good}>24/26</h2>
                        </DashCard>

                        <DashCard>
                            <h2>Deployments today</h2>
                            <h1>7</h1>
                        </DashCard>

                        <DashCard>
                            <h2>Open incident</h2>
                            <h2 className={classes.danger}>1</h2>
                        </DashCard>
                        <DashCard>
                            <h2>Avg SLO score</h2>
                            <h2 className={classes.warning}>98.4%</h2>
                        </DashCard>
                    </div>

                    <div className={classes['search-container']}>
                        <div>
                            <h1>Webapps</h1>
                        </div>
                        <div className={classes['search-inputs']}>
                            <SearchBar _placeholder={'Search SOL'} onClear={onClear} onwrite={onWrite} searchText={searchtxt} />
                        </div>

                    </div>
                    <div className={`${classes['DashStatusCard']}`}>
                        <div className={classes['slo-cards']}>
                            <DashStatusCard onduty={'Anas .M'} sloperc={99.8} servicetitle={'payments-api'} />
                            <DashStatusCard onduty={'Nour .A'} sloperc={96.2} servicetitle={'auth-service'} />
                            <DashStatusCard onduty={'Anas .M'} sloperc={98.5} servicetitle={'notifiaction-svc'} />
                            <DashStatusCard onduty={'Nour .A'} sloperc={93.2} servicetitle={'catalog-ap'} />
                            <DashStatusCard onduty={'Anas .M'} sloperc={99.2} servicetitle={'search-index'} />
                            <DashStatusCard onduty={'Nour .A'} sloperc={93.2} servicetitle={'billing-worker'} />
                        </div>
                        <div>
                            <SLOTrendChart />
                        </div>
                    </div>
                </div>
                :
                <div>
                    <h1>Please Login first , then you can see dashboard</h1>
                </div>
            }
        </>
    )
}

export default Dashboard