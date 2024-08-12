import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3  w-full overflow-hidden h-full">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[25px]" />
        {Array.from({ length: 30 }).map((_, index) => (
          <Skeleton key={index} className="h-4 w-[200px]" />
        ))}
      </div>
    </div>
  );
};
export default SkeletonCard;
