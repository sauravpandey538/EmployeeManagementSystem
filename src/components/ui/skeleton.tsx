import { cn } from "@/lib/utils"
import React from 'react';

const Skeleton = (className: string) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-red-700 rounded",
        className
      )}
    />
  );
};

export default Skeleton;
