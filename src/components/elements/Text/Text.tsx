import * as React from "react";

export type TextElementProps = {
  children: React.ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "p" | "span" | "blockquote" | "caption" | "button" | "div" | "ol" | "ul";
  className?: string;
};

export const Text: React.FC<TextElementProps> = ({
  children,
  level,
  as,
  className,
}) => {
  return React.createElement(
    level ? (level = "h1") : (as = "p"),
    { className },
    children
  );
};
