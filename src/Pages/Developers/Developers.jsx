import React from 'react'
import classes from './Developers.module.css'
import DevCard from '../../Component/Devs/DevCard'
function Developers() {
    let Developers = [
        { name: 'Anas Mohmmed', role: 'Team Lead', status: 'available', department: 'Checkout' },
        { name: 'Mostafa Kamel', role: 'Developer', status: 'unavailable', department: 'Checkout' },
        { name: 'Salem Alkahtany', role: 'Developer', status: 'unavailable', department: 'Checkout' },
        { name: 'Ziad Hesham', role: 'Developer', status: 'unavailable', department: 'Platform' },
        { name: 'Nour Adel', role: 'Team Lead', status: 'available', department: 'Platform' },
        { name: 'Rana Fathy', role: 'Developer', status: 'unavailable', department: 'Identity' }
    ]
    let colors = ['info', 'warning', 'success']

    let CountCheckout = Developers.filter((e) => e.department == 'Checkout').length
    let CountPlatform = Developers.filter((e) => e.department == 'Platform').length
    let CountIdentity = Developers.filter((e) => e.department == 'Identity').length
    let Checkout = Developers.filter((e) => e.department == 'Checkout')
    let Platform = Developers.filter((e) => e.department == 'Platform')
    let Identity = Developers.filter((e) => e.department == 'Identity')
    return (
        <>
            <div className={classes["container"]}>

                <div className={classes['Dev-head']}>
                    <h1>Developers</h1>
                    <p>Who owns what, grouped by team</p>
                </div>
                <div className={classes['dev-body']}>
                    <div>
                        <span className={classes.department}>Checkout : </span>
                        <span className={classes.count}>{CountCheckout} members</span>
                    </div>
                    <div className={classes['cards']}>
                        {
                            Checkout.map((d) => (
                                <DevCard key={d.name} devname={d.name} role={d.role} status={d.status} circleColor={colors[Math.floor(Math.random() * 4)]} />
                            ))
                        }
                    </div>
                </div>
                <div className={classes['dev-body']}>
                    <div>
                        <span className={classes.department}>Platform : </span>
                        <span className={classes.count}>{CountPlatform} members</span>
                    </div>
                    <div className={classes['cards']}>
                        {
                            Platform.map((d) => (
                                <DevCard key={d.name} devname={d.name} role={d.role} status={d.status} circleColor={colors[Math.floor(Math.random() * 4)]} />
                            ))
                        }
                    </div>
                </div>
                <div className={classes['dev-body']}>
                    <div>
                        <span className={classes.department}>Identity : </span>
                        <span className={classes.count}>{CountIdentity} members</span>
                    </div>
                    <div className={classes['cards']}>
                        {
                            Identity.map((d) => (
                                <DevCard key={d.name} devname={d.name} role={d.role} status={d.status} circleColor={colors[Math.floor(Math.random() * 4)]} />
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Developers