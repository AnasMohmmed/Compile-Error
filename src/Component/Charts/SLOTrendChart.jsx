import React, { useContext } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import classes from './SLOTrendChart.module.css'
import { ThemeContext } from '../../Context/ThemeContext'
function SLOTrendChart() {
    const data = [
        { day: 'Mon', slo: 98.2 },
        { day: 'Tue', slo: 97.8 },
        { day: 'Wed', slo: 99.1 },
        { day: 'Thu', slo: 98.9 },
        { day: 'Fri', slo: 96.4 },
        { day: 'Sat', slo: 98.7 },
        { day: 'Sun', slo: 99.3 },
    ]
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${classes['chart-card']}`}>
            <div className={classes['chart-title']}>SLO trend — last 7 days</div>

            <ResponsiveContainer width="100%" height={220}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                    <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} />
                    <YAxis domain={[90, 100]} stroke="var(--text-muted)" fontSize={12} />
                    <Tooltip
                        contentStyle={{
                            background: 'var(--surface-elevated)',
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            fontSize: '13px'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="slo"
                        stroke="var(--primary)"
                        strokeWidth={2}
                        dot={{ fill: 'var(--primary)', r: 3 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SLOTrendChart