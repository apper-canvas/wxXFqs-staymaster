import { useState } from 'react'
import { Plus, Search, Filter, Flag, Mail, Phone } from 'lucide-react'

function Guests() {
  const [guests] = useState([
    { 
      id: 1, 
      name: "John Smith", 
      email: "john.smith@example.com", 
      phone: "+1 555-123-4567", 
      country: "United States",
      visits: 3,
      status: "Active"
    },
    { 
      id: 2, 
      name: "Emma Johnson", 
      email: "emma.j@example.com", 
      phone: "+1 555-987-6543", 
      country: "Canada",
      visits: 1,
      status: "Active"
    },
    { 
      id: 3, 
      name: "Michael Brown", 
      email: "michael.brown@example.com", 
      phone: "+44 20 1234 5678", 
      country: "United Kingdom",
      visits: 5,
      status: "Active"
    },
    { 
      id: 4, 
      name: "Sarah Wilson", 
      email: "sarah.wilson@example.com", 
      phone: "+61 2 9876 5432", 
      country: "Australia",
      visits: 2,
      status: "Active"
    },
    { 
      id: 5, 
      name: "David Lee", 
      email: "david.lee@example.com", 
      phone: "+1 555-765-4321", 
      country: "United States",
      visits: 7,
      status: "VIP"
    },
    { 
      id: 6, 
      name: "Jennifer Taylor", 
      email: "jennifer.t@example.com", 
      phone: "+33 1 23 45 67 89", 
      country: "France",
      visits: 4,
      status: "Inactive"
    },
    { 
      id: 7, 
      name: "Robert Martinez", 
      email: "robert.m@example.com", 
      phone: "+49 30 1234567", 
      country: "Germany",
      visits: 1,
      status: "Active"
    },
    { 
      id: 8, 
      name: "Lisa Anderson", 
      email: "lisa.a@example.com", 
      phone: "+81 3 1234 5678", 
      country: "Japan",
      visits: 2,
      status: "VIP"
    },
  ])

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'VIP':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Inactive':
        return 'bg-surface-100 text-surface-800 dark:bg-surface-700 dark:text-surface-300';
      case 'Blacklisted':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-surface-100 text-surface-800 dark:bg-surface-700 dark:text-surface-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-surface-800 dark:text-surface-100">Guests</h1>
        <button className="btn btn-primary flex items-center justify-center sm:justify-start">
          <Plus size={16} className="mr-2" />
          Add Guest
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400" />
          <input 
            type="text" 
            placeholder="Search guests..." 
            className="w-full pl-10 pr-4 py-2 border border-surface-200 dark:border-surface-700 rounded-md bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <button className="btn btn-outline flex items-center justify-center">
          <Filter size={16} className="mr-2" />
          Filters
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-100 dark:bg-surface-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Guest</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Country</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Visits</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-surface-800 divide-y divide-surface-200 dark:divide-surface-700">
            {guests.map((guest) => (
              <tr key={guest.id} className="hover:bg-surface-50 dark:hover:bg-surface-700">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      <span className="font-medium">{guest.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-surface-800 dark:text-surface-100">{guest.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-surface-600 dark:text-surface-300 flex items-center">
                    <Mail size={14} className="mr-1" />{guest.email}
                  </div>
                  <div className="text-sm text-surface-600 dark:text-surface-300 flex items-center">
                    <Phone size={14} className="mr-1" />{guest.phone}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center text-sm text-surface-600 dark:text-surface-300">
                    <Flag size={14} className="mr-2" />
                    {guest.country}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-600 dark:text-surface-300">
                  {guest.visits}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(guest.status)}`}>
                    {guest.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 mr-4">
                    View
                  </button>
                  <button className="text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200 mr-4">
                    Edit
                  </button>
                  <button className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-surface-500 dark:text-surface-400">
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">42</span> guests
        </div>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border border-surface-300 dark:border-surface-700 rounded-md bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-100">
            Previous
          </button>
          <button className="px-3 py-1 bg-primary-600 text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 border border-surface-300 dark:border-surface-700 rounded-md bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-100">
            2
          </button>
          <button className="px-3 py-1 border border-surface-300 dark:border-surface-700 rounded-md bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-100">
            3
          </button>
          <button className="px-3 py-1 border border-surface-300 dark:border-surface-700 rounded-md bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-100">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Guests