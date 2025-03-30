import React from 'react'

const data = ['All', 'Groups', 'Personal']

const SearchFilter = () => {
  return (
    <div className="flex flex-col">
      <div className="border-b border-gray-200 p-4 dark:border-gray-700">
        <input
          type="text"
          placeholder="Search contacts..."
          className="focus:border-primary w-full rounded-md border border-gray-300 p-2 focus:ring focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap gap-2 p-2">
        {data.map((item, index) => (
          <button
            key={index}
            className="focus:ring-primary rounded-md border border-gray-300 bg-white px-2 py-1 text-gray-800 transition-colors duration-200 hover:bg-gray-100 focus:ring-2 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFilter
