import React from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import LoadingCartItem from './LoadingCartItem'
import { Skeleton } from '../ui/skeleton'


const LoadingCartsPage = () => {
  return (
    <Card className="w-full max-w-full">
      <CardContent className='flex flex-col lg:flex-row gap-5 justify-between'>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <LoadingCartItem key={index} />
          ))}
        </div>
        <div>
          <div className="space-y-3">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <Skeleton className="h-[125px] w-full rounded-xl mt-5" />
        </div>
      </CardContent>
    </Card>
  )
}

export default LoadingCartsPage
