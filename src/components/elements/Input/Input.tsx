"use client"

import * as React from "react";
import { UseFormTrigger } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { LoadingIndicator } from "../LoaderIndicator";
import { Text } from "../Text";

export interface InputProps {
  name: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value?: string;
  trigger?: UseFormTrigger<any>;
  errorMessage?: string;
  className?: string;
  labelClass?: string;
  loading?: boolean;
  rounded?: boolean
}

type FormValidation = "success" | "error";

const formValidationClassMapper: Record<FormValidation, string> = {
  success:
    /*tw:*/ "bg-success-light border-success text-success outline-success",
  error:
    /*tw:*/ "bg-error-light border-error-medium text-black outline-error-medium",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      name,
      label,
      disabled,
      value,
      trigger,
      errorMessage,
      onChange,
      className,
      labelClass,
      rounded = true,
      loading = undefined,
      ...props
    },
    ref
  ) => {
    const [validation, setValidation] = React.useState<
      FormValidation | undefined
    >(undefined);
    return (
      <div className={twMerge("relative w-full max-w-lg", className)}>
        <label
          htmlFor={`input-${name}`}
          className={twMerge(
            "invisible absolute top-0 pointer-events-none",
            labelClass
          )}
        >
          {label}
        </label>

        <input
          ref={ref}
          id={`input-${name}`}
          name={name}
          type={type}
          placeholder={label}
          value={value}
          disabled={disabled}
          className={twMerge(
            `pr-16 py-[15px] px-6 border ${rounded ? 'rounded-full' : 'rounded-lg'}  placeholder:text-base placeholder:text-grey-500 outline-2 disabled:bg-grey-200 disabled:border-grey-200 disabled:text-grey-500 w-inherit
            ${validation !== undefined
              ? `${formValidationClassMapper[validation]} focus:border-grey-500 focus:text-black focus:bg-white focus:outline-brand-primary`
              : "border-grey-500 text-black bg-white outline-brand-primary"
            }
          `,
            typeof loading === "boolean" && "pr-12"
          )}
          {...props}
          onBlur={async () => {
            if (trigger) {
              const isFieldValid = await trigger(name);
              setValidation(isFieldValid ? "success" : "error");
            }
          }}
          onChange={onChange}
        />
        {loading && (
          <span className="absolute right-2 top-2">
            <LoadingIndicator />
          </span>
        )}

        {validation === "error" && errorMessage && <Text>{errorMessage}</Text>}
      </div>
    );
  }
);
