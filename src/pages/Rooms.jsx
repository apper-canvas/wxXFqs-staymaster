import { useState } from 'react'
import { Plus, Search, Filter, BedDouble, Wifi, Utensils, Tv } from 'lucide-react'

function Rooms() {
  const [rooms] = useState([
    { id: 1, number: "101", type: "Standard Single", status: "Occupied", price: 99, amenities: ["wifi", "tv"] },
    { id: 2, number: "102", type: "Standard Twin", status: "Available", price: 119, amenities: ["wifi", "tv", "food"] },
    { id: 3, number: "103", type: "Deluxe Queen", status: "Available", price: 149, amenities: ["wifi", "tv", "food"] },
    { id: 4, number: "201", type: "Deluxe King", status: "Cleaning", price: 169, amenities: ["wifi", "tv", "food"] },
    { id: 5, number: "202", type: "Suite", status: "Reserved", price: 249, amenities: ["wifi", "tv", "food"] },
    { id: 6, number: "301", type: "Family Room", status: "Maintenance", price: 199, amenities: ["wifi", "tv", "food"] },
    { id: 7, number: "302", type: "Penthouse", status: "Available", price: 499, amenities: ["wifi", "tv", "food"] },
    { id: 8, number: "401", type: "Standard Twin", status: "Occupied", price: 119, amenities: ["wifi", "tv"] },
  ])

  const getStatusClass = (status) => {
    switch (status) {
      case 'Available':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Occupied':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Reserved':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Cleaning':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      case 'Maintenance':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-surface-100 text-surface-800 dark:bg-surface-700 dark:text-surface-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-surface-800 dark:text-surface-100">Rooms</h1>
        <button className="btn btn-primary flex items-center justify-center sm:justify-start">
          <Plus size={16} className="mr-2" />
          Add New Room
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400" />
          <input 
            type="text" 
            placeholder="Search rooms..." 
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
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Room</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Amenities</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-surface-800 divide-y divide-surface-200 dark:divide-surface-700">
            {rooms.map((room) => (
              <tr key={room.id} className="hover:bg-surface-50 dark:hover:bg-surface-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-surface-800 dark:text-surface-100">{room.number}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-600 dark:text-surface-300">{room.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-600 dark:text-surface-300">
                  <div className="flex space-x-2">
                    {room.amenities.includes('wifi') && (
                      <Wifi size={16} className="text-primary-500" title="WiFi" />
                    )}
                    {room.amenities.includes('tv') && (
                      <Tv size={16} className="text-primary-500" title="TV" />
                    )}
                    {room.amenities.includes('food') && (
                      <Utensils size={16} className="text-primary-500" title="Restaurant" />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(room.status)}`}>
                    {room.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-600 dark:text-surface-300">${room.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 mr-4">
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
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">24</span> rooms
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

export default Rooms