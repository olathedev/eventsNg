import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


export default function DashboardChart () {
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className='bg-white shadow pb-6 h-[25rem]'>

            <div className="header p-3 flex items-center justify-between border-b">
                <h3>Event Perfomance ratio</h3>

                <div className="py-1 px-2 text-sm border rounded">last 7 days</div>
            </div>

           
            <ResponsiveContainer width="100%" height="70%">
             <PieChart width={900} height={800}>
        <Pie
          data={data}
          cx="50%"
            cy="50%"
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        </PieChart>
      </ResponsiveContainer>
        
      <div className="flex flex-wrap gap-3 md:gap-6 items-center justify-center px-4 pb-3">
            <div className='flex gap-1 items-center'>
                <div className="h-3 w-3 bg-green-500"></div>
                Jos Food fest
            </div>

            <div className='flex gap-1 items-center'>
                <div className="h-3 w-3 bg-blue-500"></div>
                Feast
            </div>

            <div className='flex gap-1 items-center'>
                <div className="h-3 w-3 bg-yellow-500"></div>
                Bssc camp
            </div>

            <div className='flex gap-1 items-center'>
                <div className="h-3 w-3 bg-orange-500"></div>
                Dev fest jos
            </div>
           </div>
        </div>
    )
}
