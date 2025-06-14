import React from 'react'

interface Props {
  data: string[]
  variant?: string
}

const Tags = ({ data, variant = 'bg-gray-200' }: Props) => {

  return (
    <div className="">
      <h3 className="text-xs md:text-sm font-semibold text-gray-700 mb-2">Tags:</h3>
      <div className="flex flex-wrap gap-2">
        {data.map((tag, idx) => (
          <span
            key={idx}
            className={`${variant} text-gray-700 text-xs px-2 py-0 md:px-3 md:py-1 rounded-full`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Tags
