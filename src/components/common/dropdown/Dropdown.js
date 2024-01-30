import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
const Dropdown = ({ options, onSelect, name, label, value }) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();
  const SErrorMessage = (name, Message, validate) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: validate ? "" : Message,
    }));
  };
  const onErrorValidation = () => {
    SErrorMessage(name, "Select a valid value", false);
    setBorderColor((prevData) => ({
      ...prevData,
      [name]: "red",
    }));
  };
  const onSuccessValidation = () => {
    SErrorMessage(name, "", true);
    setBorderColor((prevData) => ({
      ...prevData,
      [name]: "#dee2e6",
    }));
  };
  const isCheckValidData = () => {
    const filtered =
      inputValue &&
      options.filter(
        (option) => option.toLowerCase() === inputValue.toLowerCase()
      );
    return !filtered.length <= 0 ? false : true;
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowOptions(false);
        if (isCheckValidData()) {
          onErrorValidation();
        }
      } else {
        if (isCheckValidData()) {
          onErrorValidation();
        } else {
          onSuccessValidation();
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputValue]);
 
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowOptions(true);
  };
 
  const handleOptionClick = (option) => {
    setInputValue(option);
    setShowOptions(false);
    onSelect(option, name);
    onSuccessValidation();
  };
 
  return (
    <div className={`custom-select-dropdown ${name}`} ref={inputRef}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={`Select a ${label}`}
        value={inputValue}
        style={{
          borderColor:
            isFocused && borderColor[name] === "red" && borderColor[name],
        }}
        onChange={handleInputChange}
        onFocus={() => {
          setIsFocused(true);
          setShowOptions(true);
        }}
      />
      {isFocused && borderColor[name] === "red" && (
        <span className="formWarning">{ErrorMessage[name]}</span>
      )}
 
      {showOptions && (
        <div className="floating-table">
          <table>
            <tbody>
              {filteredOptions.map((option, index) => (
                <tr key={index} onClick={() => handleOptionClick(option)}>
                  <td>{option}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
 
export default Dropdown;