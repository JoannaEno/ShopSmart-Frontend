import * as React from "react";
import { Text } from "@/components/elements";

export type TextCardProps = {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
};

export const TextCard: React.FC<TextCardProps> = ({
  className,
  title,
  description,
  children,
}) => {
  return (
    <div className={`${className}`}>
      <div className="bg-[#DEF2FF] rounded-full p-4 w-[60px]">{children}</div>
      <Text level="h2" className="text-xl font-Inter">
        {title}
      </Text>
      <Text className=" font-Inter text-gray-500 max-w-[300px]">
        {description}
      </Text>
    </div>
  );
};
