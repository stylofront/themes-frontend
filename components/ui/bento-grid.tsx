import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BentoGridProps = {
  className?: string;
  children?: ReactNode;
};

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

type BentoGridItemProps = {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-md transition duration-200 hover:shadow-xl",
        className,
      )}
    >
      <div className="flex-1">{header}</div>
      <div className="mt-4 transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-semibold font-bold text-gray-900">
          {title}
        </div>
        <div className="text-xs font-normal text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
};

