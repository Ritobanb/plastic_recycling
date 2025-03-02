import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar skeleton */}
      <div className="h-20 border-b border-emerald-100/10">
        <div className="container h-full flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>
        </div>
      </div>

      <main>
        {/* Hero section skeleton */}
        <section className="min-h-[calc(100vh-5rem)] relative flex items-center">
          <div className="container relative z-10">
            <div className="max-w-2xl space-y-8">
              <Skeleton className="h-16 w-3/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-40" />
            </div>
          </div>
          <Skeleton className="absolute inset-0 bg-emerald-100/5" />
        </section>

        {/* About section skeleton */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Skeleton className="h-12 w-64 mx-auto mb-8" />
            <Skeleton className="h-6 w-3/4 mx-auto mb-16" />
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-64" />
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio section skeleton */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Skeleton className="h-12 w-64 mx-auto mb-8" />
            <Skeleton className="h-6 w-3/4 mx-auto mb-16" />
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-96" />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
