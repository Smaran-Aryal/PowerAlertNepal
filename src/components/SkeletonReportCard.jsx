// components/SkeletonReportCard.jsx
import React from 'react'
import { Skeleton } from './Skeleton'
import CitizenSurfaceCard from './citizen/CitizenSurfaceCard'

export default function SkeletonReportCard() {
  return (
    <CitizenSurfaceCard className="bg-white/5 p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Skeleton dark className="h-3 w-16" />
          <Skeleton dark className="mt-2 h-5 w-3/4" />
        </div>
        <Skeleton dark className="h-6 w-20 rounded-full" />
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <Skeleton dark className="h-4 w-2/3" />
        <Skeleton dark className="h-4 w-1/2" />
        <Skeleton dark className="h-4 w-1/3" />
        <Skeleton dark className="h-4 w-full" />
        <Skeleton dark className="h-4 w-5/6" />
        <Skeleton dark className="h-3 w-1/3" />
      </div>
    </CitizenSurfaceCard>
  )
}