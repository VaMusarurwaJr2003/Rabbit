import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
  { name: 'January', Total: 1200 },
  { name: 'February', Total: 2000 },
  { name: 'March', Total: 900 },
  { name: 'April', Total: 1600 },
  { name: 'May', Total: 800 },
  { name: 'June', Total: 1700 },

];


const Chart = () => {
  return (
    <div className='chart'>
      <div className='title'>Last 6 Months (Revenue)</div>
      <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

        <defs>
          <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#62b4ff" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#62b4ff" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" stroke='gray' />
        <YAxis stroke='gray' />
        <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
        <Tooltip />
        <Area type="monotone" dataKey="Total" stroke="#62b4ff" fillOpacity={1} fill="url(#total)" />
      </AreaChart>
    </div>
  )
}

export default Chart