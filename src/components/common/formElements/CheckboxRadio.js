import React from "react";
import "./InputField.scss";

const CheckboxRadio = ({
  type,
  disabled,
  label,
  id,
  className,
  value,
  name,
  onChange,
  checked,
  defaultValue,
}) => {
  return (
    <div className={`checkBoxContainer`}>
      <input
        id={id}
        type={type === "" ? "checkbox" : type}
        disabled={disabled ? true : false}
        className={className === "" ? "checkbox" : className}
        name={name}
        onChange={onChange}
        value={value}
        checked={checked}
        defaultValue={defaultValue}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxRadio;
