import React from 'react'

export default function Button({ children }) {
    return (
        <button className="px-8 py-2 rounded-full bg-[#15803D] text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
        {children}
      </button>
    )
}
