import { NavLink } from 'react-router-dom'
import { Home, BedDouble, CalendarClock, Users, Settings, LogOut } from 'lucide-react'

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-surface-800 border-r border-surface-200 dark:border-surface-700 shadow-sm hidden md:flex flex-col">
      <div className="p-4 border-b border-surface-200 dark:border-surface-700">
        <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">StayMaster</h1>
        <p className="text-sm text-surface-500 dark:text-surface-400">Hotel Management System</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center p-2 rounded-md ${
              isActive 
                ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                : 'text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-surface-700'
            }`
          }
          end
        >
          <Home size={18} className="mr-3" />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink 
          to="/rooms" 
          className={({ isActive }) => 
            `flex items-center p-2 rounded-md ${
              isActive 
                ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                : 'text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-surface-700'
            }`
          }
        >
          <BedDouble size={18} className="mr-3" />
          <span>Rooms</span>
        </NavLink>
        
        <NavLink 
          to="/bookings" 
          className={({ isActive }) => 
            `flex items-center p-2 rounded-md ${
              isActive 
                ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                : 'text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-surface-700'
            }`
          }
        >
          <CalendarClock size={18} className="mr-3" />
          <span>Bookings</span>
        </NavLink>
        
        <NavLink 
          to="/guests" 
          className={({ isActive }) => 
            `flex items-center p-2 rounded-md ${
              isActive 
                ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                : 'text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-surface-700'
            }`
          }
        >
          <Users size={18} className="mr-3" />
          <span>Guests</span>
        </NavLink>
      </nav>
      
      <div className="p-4 border-t border-surface-200 dark:border-surface-700">
        <button className="flex items-center p-2 w-full rounded-md text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-surface-700">
          <Settings size={18} className="mr-3" />
          <span>Settings</span>
        </button>
        <button className="flex items-center p-2 w-full rounded-md text-surface-700 hover:bg-surface-100 dark:text-surface-300 dark:hover:bg-surface-700">
          <LogOut size={18} className="mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar