import React from "react";

const TextInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
}: {
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (val: string | null) => void;
  error?: string;
}) => {
  return (
    <div className="w-full max-w-md">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:outline-none focus:ring-2 
          focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 
          ${
            error
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300"
          }`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
