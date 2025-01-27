import React from "react";

const SelectBox = ({
  options,
  value,
  onchange, 
disabled
}: {
  disabled?:boolean
  value?: string;
  onchange: (val: string) => void;
  options: { title: string; value: string }[];
}) => { 
  
  return (
    <form className="max-w-sm mx-auto text-left ">
      <select  
      disabled={disabled}
        value={value}
        style={{ padding: 8 }}
        onChange={(e) => {
          onchange(e.target.value);
        }}
        id="underline_select"
        className="text-black block py-6.5 rounded-lg px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        {options.map((op, i) => {
          return (
            <option
              style={{ color: "black", margin: 6 }}
              key={i}
              value={op.value}
            >
              {op.title}
            </option>
          );
        })}
      </select>
    </form>
  );
};

export default SelectBox;
