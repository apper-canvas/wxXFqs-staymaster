import { Bell, Moon, Sun, Menu } from 'lucide-react'
import { useState } from 'react'

function Header() {
  const [darkMode, setDarkMode] = useState(false)
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // In a real app, you would apply the dark class to the HTML element
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-white dark:bg-surface-800 border-b border-surface-200 dark:border-surface-700 h-16 flex items-center p-4 justify-between">
      <button className="md:hidden text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 p-2 rounded-md">
        <Menu size={20} />
      </button>
      
      <div className="md:ml-auto flex items-center space-x-4">
        <button className="relative text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 p-2 rounded-full">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
        </button>
        
        <button 
          className="text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-700 p-2 rounded-full"
          onClick={toggleDarkMode}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="flex flex-col text-right">
            <span className="font-medium text-sm text-surface-800 dark:text-surface-100">Admin User</span>
            <span className="text-xs text-surface-500 dark:text-surface-400">Hotel Manager</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400">
            <span className="text-sm font-medium">AU</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header