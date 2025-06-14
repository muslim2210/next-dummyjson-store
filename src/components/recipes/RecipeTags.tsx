import React from 'react'
import Tags from '../fragments/Tags'

interface Props {
  meals: string[]
  tags: string[]
}

const RecipeTags = ({ meals, tags }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <Tags data={tags} />
      <div className="">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Meals :</h3>
        <div className="flex flex-wrap gap-2">
          {meals.map((tag, idx) => (
            <span
              key={idx}
              className="text-white text-xs px-3 py-1 rounded-full bg-gray-400"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
    </div>
  )
}

export default RecipeTags
