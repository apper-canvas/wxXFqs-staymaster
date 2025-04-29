import { useState } from 'react'
import { format } from 'date-fns'
import { Plus, Search, Filter, Check, X, Clock, Calendar } from 'lucide-react'

function Bookings() {
  const today = new Date()
  
  const [bookings] = useState([
    { 
      id: 1, 
      guest: "John Smith", 
      roomNumber: "101", 
      roomType: "Standard Single",
      checkIn: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1), 
      checkOut: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
      status: "Active",
      paymentStatus: "Paid"
    },
    { 
      id: 2, 
      guest: "Emma Johnson", 
      roomNumber: "202", 
      roomType: "Suite",
      checkIn: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1), 
      checkOut: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5),
      status: "Upcoming",
      paymentStatus: "Paid"
    },
    { 
      id: 3, 
      guest: "Michael Brown", 
      roomNumber: "114", 
      roomType: "Standard Twin",
      checkIn: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3), 
      checkOut: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
      status: "Completed",
      paymentStatus: "Paid"
    },
    { 
      id: 4, 
      guest: "Sarah Wilson", 
      roomNumber: "422", 
      roomType: "Family Room",
      checkIn: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10), 
      checkOut: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 15),
      status: "Upcoming",
      paymentStatus: "Pending"
    },
    { 
      id: 5, 
      guest: "David Lee", 
      roomNumber: "301", 
      roomType: "Deluxe King",
      checkIn: new Date(today.getFullYear(), today.getMonth(), today.getDate()), 
      checkOut: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
      status: "Active",
      paymentStatus: "Paid"
    },
    { 
      id: 6, 
      guest: "Jennifer Taylor", 
      roomNumber: "115", 
      roomType: "Standard Queen",
      checkIn: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5), 
      checkOut: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
      status: "Upcoming",
      paymentStatus: "Pending"
    },
    { 
      id: 7, 
      guest: "Robert Martinez", 
      roomNumber: "210", 
      roomType: "Deluxe Twin",
      checkIn: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5), 
      checkOut: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2),
      status: "Completed",
      paymentStatus: "Paid"
    },
    { 
      id: 8, 
      guest: "Lisa Anderson", 
      roomNumber: "303", 
      roomType: "Suite",
      checkIn: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3), 
      checkOut: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8),
      status: "Upcoming",
      paymentStatus: "Paid"
    },
  ])

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Completed':
        return 'bg-surface-100 text-surface-800 dark:bg-surface-700 dark:text-surface-300';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-surface-100 text-surface-800 dark:bg-surface-700 dark:text-surface-300';
    }
  };

  const getPaymentStatusIcon = (status) => {
    switch (status) {
      case 'Paid':
        return <Check size={16} className="text-green-500" />;
      case 'Pending':
        return <Clock size={16} className="text-amber-500" />;
      case 'Failed':
        return <X size={16} className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-surface-800 dark:text-surface-100">Bookings</h1>
        <button className="btn btn-primary flex items-center justify-center sm:justify-start">
          <Plus size={16} className="mr-2" />
          New Booking
        </button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400" />
          <input 
            type="text" 
            placeholder="Search bookings..." 
            className="w-full pl-10 pr-4 py-2 border border-surface-200 dark:border-surface-700 rounded-md bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline flex items-center justify-center">
            <Calendar size={16} className="mr-2" />
            Date Range
          </button>
          <button className="btn btn-outline flex items-center justify-center">
            <Filter size={16} className="mr-2" />
            Filters
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-surface-100 dark:bg-surface-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Guest</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Room</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Check-in</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Check-out</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Payment</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-surface-800 divide-y divide-surface-200 dark:divide-surface-700">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-surface-50 dark:hover:bg-surface-700">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-surface-800 dark:text-surface-100">{booking.guest}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-600 dark:text-surface-300">
                  <div>
                    <div>{booking.roomNumber}</div>
                    <div className="text-xs text-surface-500 dark:text-surface-400">{booking.roomType}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-600 dark:text-surface-300">
                  {format(booking.checkIn, 'MMM dd, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-600 dark:text-surface-300">
                  {format(booking.checkOut, 'MMM dd, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-surface-600 dark:text-surface-300">
                  <div className="flex items-center space-x-1">
                    {getPaymentStatusIcon(booking.paymentStatus)}
                    <span>{booking.paymentStatus}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 mr-4">
                    View
                  </button>
                  <button className="text-surface-600 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-200">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-surface-500 dark:text-surface-400">
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">35</span> bookings
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

export default Bookings