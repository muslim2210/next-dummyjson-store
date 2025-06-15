import React from 'react'
import { Skeleton } from '../ui/skeleton'

const LoadingCartItem = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-14 w-14 rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] md:w-[450px]" />
        <Skeleton className="h-4 w-[200px] md:w-[300px]" />
     </div>
     </div>
  )
};

export default LoadingCartItem
