// components/SkeletonOutageCard.jsx
import React from 'react'
import { Skeleton } from './Skeleton'

export default function SkeletonOutageCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <Skeleton className="h-3 w-10" />
        <Skeleton className="h-6 w-16 rounded-md" />
      </div>

      <Skeleton className="h-5 w-3/4" />

      <Skeleton className="h-4 w-1/2" />

      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      <div className="mt-auto border-t border-slate-100 pt-3">
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  )
}