import React from "react";
import "./InputField.scss";

function TextArea(props) {
  const {
    name,
    placeholder,
    autoComplete,
    label,
    required,
    disabled,
    className,
    onChange,
    max,
    min,
    maxLength,
    value,
    defaultValue,
    onKeyDown,
    onKeyUp,
    inputRef,
    onFocus,
    readOnly,
    onBlur,
    errorMsg,
    style,
    rows
  } = props;
  return (
    <div
      className={`fromInput ${className ? className : ""}`.trim()}
    >
        {label && (
            <label>
                {label} {required && "*"}{" "}
            </label>
            )}
        <input
          className="InputFeild"
          name={name}
          ref={inputRef}
          defaultValue={defaultValue}
          maxLength={maxLength}
          min={min}
          max={max}
          value={value}
          readOnly={readOnly}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onChange={onChange}
          required
          disabled={disabled}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          style={style}
          onKeyUp={onKeyUp}
          rows={rows}
        />
      {errorMsg && <span className="formWarning">{errorMsg}</span>}
    </div>
  );
}

export default TextArea;
