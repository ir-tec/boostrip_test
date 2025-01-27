import React from "react";

const PrimaryButton = ({
  onclick,
  title,
  disabled,
  color = "default",
}: {
  title: string;
  className?: string;
  onclick: () => void;
  disabled?: boolean;
  color?: "default" | "dark" | "yellow" | "indigo";
}) => {
  const classes = button_colors.find((item) => item.type === color)?.classes;

  return (
    <button 
    style={{padding:"4px 16px", fontSize:16}}
      disabled={disabled}
      className={disabled ? button_colors[1].classes : classes}
      onClick={() => onclick?.()}
    >
      {title}
    </button>
  );
};

const button_colors = [
  {
    type: "default",
    classes:
      "bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300",
  },
  {
    type: "dark",
    classes:
      "bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300",
  },
  {
    type: "yellow",
    classes:
      "bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-yellow-900 dark:text-yellow-300",
  },
  {
    type: "indigo",
    classes:
      "bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300",
  },
];

export default PrimaryButton;
