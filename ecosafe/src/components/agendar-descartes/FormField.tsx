import React from "react";
import { FormFieldProps } from "../../types/types";

const FormField: React.FC<FormFieldProps> = ({
  label,
  value,
  placeholder,
  type = "text",
  options,
  onChange,
  readOnly = false,
}) => {
  if (options) {
    return (
      <div className="form-field">
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select
          value={value}
          onChange={onChange}
          className="w-full p-3 border rounded shadow-sm bg-white focus:outline-none focus:ring focus:ring-green-500"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="form-field">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full p-3 border rounded shadow-sm focus:outline-none focus:ring focus:ring-green-500 ${
          readOnly ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};

export default FormField;
