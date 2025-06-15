import { Skeleton } from "@/components/ui/skeleton"

export function LoadingTitle() {
  return (
    <div className="flex flex-col gap-3 space-x-4">
      <Skeleton className="h-4 w-[250px] md:w-[450px]" />
      <Skeleton className="h-4 w-[200px] md:w-[300px]" />
    </div>
  )
}
