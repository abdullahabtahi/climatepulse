import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
    Tooltip,
} from 'recharts'
import { competitorData } from '@/data/citations'

const chartData = competitorData.map((d) => ({
    name: d.factor,
    'National Systems': d.nationalSystems,
    'Crowdsource Platforms': d.crowdsourcePlatforms,
    ClimatePulse: d.climatePulse,
}))

export default function CompareChart() {
    return (
        <div className="w-full" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} barGap={2} barCategoryGap="20%">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                    <XAxis
                        dataKey="name"
                        tick={{ fontSize: 11, fill: '#6B8F8A' }}
                        tickLine={false}
                        axisLine={{ stroke: '#E5E7EB' }}
                    />
                    <YAxis
                        tick={{ fontSize: 11, fill: '#6B8F8A' }}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 100]}
                    />
                    <Tooltip
                        contentStyle={{
                            borderRadius: '8px',
                            border: '1px solid #E5E7EB',
                            fontSize: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        }}
                    />
                    <Legend
                        iconType="circle"
                        iconSize={8}
                        wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                    />
                    <Bar dataKey="National Systems" fill="#D1D5DB" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="Crowdsource Platforms" fill="#9CA3AF" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="ClimatePulse" fill="#0FA87E" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
