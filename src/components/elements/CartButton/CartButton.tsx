import * as React from "react";
import { twMerge } from "tailwind-merge";
import { ReactComponent as CheckOut } from "@/assets/checkout.svg";

export type CartButtonProps = {
  label: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  href?: string;
  icon?: boolean;
};

export const CartButton: React.FC<CartButtonProps> = ({
  label,
  className,
  href,
  type = "button",
  onClick,
  icon,
}) => {
  const children = (
    <>
      {icon && <CheckOut className="mr-2" />}
      {label}
    </>
  );

  const newClassName = twMerge(["", className]);

  if (href) {
    return (
      <a
        href={href}
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
