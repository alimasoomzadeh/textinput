import React, { useRef, useState } from "react";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: boolean;
  helperText?: string;
  icon?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Input: React.FC<InputProps> = ({
  label,
  error = false,
  helperText,
  id,
  value,
  onChange,
  disabled,
  readOnly,
  icon,
  size = "md",
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const showFloatingLabel = isFocused || (!!value && value !== "");

  const handleClear = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onChange) {
      const event = {
        ...e,
        target: { ...inputRef.current, value: "" },
        currentTarget: { ...inputRef.current, value: "" },
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
    inputRef.current?.focus();
  };

  // Helper to get class names based on size and floating state
  const getSizeClass = (base: string, floating?: boolean) => {
    let suffix = "";
    if (base === "label" || base === "labelPadding") {
      suffix = floating ? "-floating" : "";
    }
    return `input-${base}-${size}${suffix}`;
  };

  return (
    <>
      <div className="relative flex flex-col rtl" dir="rtl">
        {label && (
          <label
            htmlFor={inputId}
            className={`input-floating-label title-input absolute bg-white font-normal pointer-events-none z-[1] transition-all duration-200 ease-in-out
              ${getSizeClass("label", showFloatingLabel)}
              ${getSizeClass("labelPadding", showFloatingLabel)}
              ${getSizeClass("labelRight")}
              ${error ? "error" : value ? "text-[#3D3D3D]" : "text-[#D1D1D1]"}
              ${disabled && "disabled"}
              ${error ? "error" : isFocused && "isFocused"}
            `}
          >
            {label}
          </label>
        )}
        <span
          className={`absolute divider z-[2] flex items-center w-[1px]
              ${disabled && "disabled"}
              ${error ? "error" : isFocused && "isFocused"}
              ${error ? "error" : value ? "bg-[#3D3D3D]" : "bg-[#D1D1D1]"}
            ${getSizeClass("divider")}`}
        ></span>
        <div className="relative">
          {icon && (
            <span
              data-testid="input-icon"
              className={`absolute icon-start right-2 top-1/2 -translate-y-1/2 z-[2] flex items-center
                ${getSizeClass("icon")}
                ${disabled && "disabled"}
                ${error ? "error" : isFocused && "isFocused"}
                ${error ? "error" : value ? "text-[#3D3D3D]" : "text-[#D1D1D1]"}
              `}
            >
              {icon}
            </span>
          )}
          <input
            id={inputId}
            dir="rtl"
            ref={inputRef}
            value={value}
            onChange={onChange}
            disabled={disabled}
            readOnly={readOnly}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={!showFloatingLabel && label ? label : undefined}
            className={`w-full box-border outline-none transition-colors duration-200 bg-white text-right rtl rounded-lg
              ${getSizeClass("input")}
              ${
                !error &&
                !isFocused &&
                !disabled &&
                "border-[#B0B0B0] border-[1.5px]"
              }
              ${error ? "error" : isFocused && "isFocused"}
              ${
                disabled
                  ? "disabled"
                  : value
                  ? "text-[#3D3D3D]"
                  : "text-[#D1D1D1]"
              }`}
            {...props}
          />
          <button
            type="button"
            aria-label="Clear"
            onClick={handleClear}
            tabIndex={-1}
            className={`absolute left-2 top-1/2 -translate-y-1/2 bg-none border-none m-0 cursor-pointer z-[2] leading-none outline-none
              ${getSizeClass("clear")}
              text-[#3D3D3D]`}
          >
            &#10006;
          </button>
        </div>
        {helperText && (
          <span
            className={`mt-1 text-right rtl font-medium text-[12px] ${
              error ? "text-[#FF0031]" : "text-[#666]"
            }`}
          >
            {helperText}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
