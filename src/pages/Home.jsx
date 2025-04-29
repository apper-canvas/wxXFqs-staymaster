import { useState, useEffect } from 'react'
import { Users, BedDouble, CalendarClock, DollarSign } from 'lucide-react'
import Chart from 'react-apexcharts'

function Home() {
  const [occupancyOptions, setOccupancyOptions] = useState({
    chart: {
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          colors: '#64748b'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#64748b'
        }
      }
    },
    tooltip: {
      theme: 'dark'
    },
    grid: {
      borderColor: '#e2e8f0',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true
        }
      }
    }
  })

  const [occupancySeries, setOccupancySeries] = useState([
    {
      name: 'Occupancy Rate',
      data: [70, 65, 72, 78, 85, 95, 93]
    }
  ])

  // For dark mode detection
  useEffect(() => {
    const updateChartTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark')
      
      setOccupancyOptions(prev => ({
        ...prev,
        grid: {
          ...prev.grid,
          borderColor: isDarkMode ? '#334155' : '#e2e8f0'
        },
        tooltip: {
          theme: isDarkMode ? 'dark' : 'light'
        }
      }))
    }
    
    // Initial theme detection
    updateChartTheme()
    
    // Listen for theme changes (would work with the toggle in Header.jsx)
    const observer = new MutationObserver(updateChartTheme)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-surface-800 dark:text-surface-100">Dashboard</h1>
        <div>
          <button className="btn btn-primary">Generate Report</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Occupancy Card */}
        <div className="card flex items-center">
          <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
            <BedDouble size={24} />
          </div>
          <div>
            <p className="text-sm text-surface-500 dark:text-surface-400">Occupancy Rate</p>
            <p className="text-2xl font-bold text-surface-800 dark:text-surface-100">78%</p>
            <p className="text-xs text-green-600 dark:text-green-400">+5% from last week</p>
          </div>
        </div>
        
        {/* Revenue Card */}
        <div className="card flex items-center">
          <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
            <DollarSign size={24} />
          </div>
          <div>
            <p className="text-sm text-surface-500 dark:text-surface-400">Today's Revenue</p>
            <p className="text-2xl font-bold text-surface-800 dark:text-surface-100">$4,285</p>
            <p className="text-xs text-green-600 dark:text-green-400">+12% from yesterday</p>
          </div>
        </div>
        
        {/* Bookings Card */}
        <div className="card flex items-center">
          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
            <CalendarClock size={24} />
          </div>
          <div>
            <p className="text-sm text-surface-500 dark:text-surface-400">New Bookings</p>
            <p className="text-2xl font-bold text-surface-800 dark:text-surface-100">28</p>
            <p className="text-xs text-green-600 dark:text-green-400">+8 from yesterday</p>
          </div>
        </div>
        
        {/* Guests Card */}
        <div className="card flex items-center">
          <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 mr-4">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm text-surface-500 dark:text-surface-400">Active Guests</p>
            <p className="text-2xl font-bold text-surface-800 dark:text-surface-100">152</p>
            <p className="text-xs text-blue-600 dark:text-blue-400">42 checking out today</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-surface-800 dark:text-surface-100">Weekly Occupancy</h2>
            <select className="text-sm border border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-800 px-2 py-1">
              <option>This Week</option>
              <option>Last Week</option>
              <option>Last Month</option>
            </select>
          </div>
          <div>
            <Chart 
              options={occupancyOptions} 
              series={occupancySeries} 
              type="area" 
              height={300} 
            />
          </div>
        </div>
        
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-surface-800 dark:text-surface-100">Recent Bookings</h2>
            <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'John Smith', room: '205 - Deluxe King', status: 'Checked In', date: 'Today' },
              { name: 'Emma Johnson', room: '310 - Suite', status: 'Reserved', date: 'Tomorrow' },
              { name: 'Michael Brown', room: '114 - Standard Twin', status: 'Checked Out', date: 'Yesterday' },
              { name: 'Sarah Wilson', room: '422 - Family Room', status: 'Reserved', date: 'Jul 15, 2023' },
            ].map((booking, index) => (
              <div key={index} className="flex items-center justify-between pb-3 border-b border-surface-200 dark:border-surface-700 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium text-surface-800 dark:text-surface-100">{booking.name}</p>
                  <p className="text-sm text-surface-500 dark:text-surface-400">{booking.room}</p>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    booking.status === 'Checked In' ? 'text-green-600 dark:text-green-400' : 
                    booking.status === 'Reserved' ? 'text-blue-600 dark:text-blue-400' : 
                    'text-surface-500 dark:text-surface-400'
                  }`}>{booking.status}</p>
                  <p className="text-sm text-surface-500 dark:text-surface-400">{booking.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home