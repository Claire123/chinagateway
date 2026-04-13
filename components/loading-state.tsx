'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent } from '@/components/ui/card'

export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black">
      <div className="container-apple text-center">
        <Skeleton className="h-8 w-64 mx-auto mb-8 rounded-full" />
        <Skeleton className="h-20 w-96 mx-auto mb-6" />
        <Skeleton className="h-16 w-80 mx-auto mb-10" />
        <div className="flex gap-4 justify-center mb-20">
          <Skeleton className="h-14 w-40 rounded-full" />
          <Skeleton className="h-14 w-40 rounded-full" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>
      </div>
    </section>
  )
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="bg-white/[0.02] border-white/[0.08]">
          <CardContent className="p-8">
            <Skeleton className="h-16 w-16 rounded-xl mb-6" />
            <Skeleton className="h-6 w-3/4 mb-3" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function HospitalCardSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
      <Skeleton className="w-full md:w-48 h-48 md:h-auto rounded-lg" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
      </div>
    </div>
  )
}
