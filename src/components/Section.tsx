import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <div className="px-4 lg:px-0">
      <div
        className={clsx(
          "w-full lg:w-1/2 mx-auto mt-6 bg-white px-6 sm:px-10 py-7 rounded-3xl shadow-[0_10px_40px_-15px_rgba(15,61,42,0.25)] border border-brand/10",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
