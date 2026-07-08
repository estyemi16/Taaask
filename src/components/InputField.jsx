import React from "react";
const InputField = ({ value, onChange, placeholder = "Enter your task" }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full rounded-md px-2 py-2 border-secondary-purple text-gray-400 border-2 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary-purple focus:border-transparent"
      placeholder={placeholder}
    />
  );
};

export default InputField;
