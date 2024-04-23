import * as React from "react";
import { twMerge } from "tailwind-merge";
import { FaChevronRight } from "react-icons/fa";

export type ButtonProps = {
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => React.MouseEventHandler<HTMLButtonElement> | any;
  className?: string;
  href?: string;
  icon?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  className,
  href,
  type = "button",
  onClick,
  icon,
}) => {
  const children = (
    <>
      {label}
      {icon && <FaChevronRight className="inline-block ml-2" />}
    </>
  );

  const newClassName = twMerge(["", className]);

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={newClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={newClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
