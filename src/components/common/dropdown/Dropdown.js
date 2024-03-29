import React, { useState, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";
import { ReactComponent as DropDownIcon } from "../../../assets/images/svgIcons/dropdownIcon.svg";
import "./Dropdown.scss";
const Dropdown = ({ options, onSelect, name, label, value }) => {
  const intialName = options.find((obj) => obj.value === value);
  const [inputValue, setInputValue] = useState(intialName?.name);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});
  //const [isFocused, setIsFocused] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
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
      [name]: "#A30000",
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
        (option) => option?.name?.toLowerCase() === inputValue.toLowerCase()
      );
    return !filtered?.length <= 0 ? false : true;
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
      option?.name?.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    //setIsFocused(true)
    setInputValue(option.name);
    setShowOptions(false);
    onSelect(option.value, name);
    onSuccessValidation();
  };

  return (
    <div className={`custom-select-dropdown ${name}`} ref={inputRef}>
      <Form.Label>{label}</Form.Label> <span className="requred">* </span>
      <div className="position-relative">
        <Form.Control
          type="text"
          placeholder={`Select a ${label}`}
          value={inputValue}
          style={{
            borderColor:
              isBlur && borderColor[name] === "#A30000" && borderColor[name],
          }}
          onChange={handleInputChange}
          onBlur={() => {
            setTimeout(() => {
              setIsBlur(true);
            }, 1000);
          }}
          onFocus={() => {
            //setIsFocused(true);
            setShowOptions(true);
          }}
        />
        <div className="arrow">
          <DropDownIcon />
        </div>
        {showOptions && (
          <div className="floating-table">
            <table>
              <tbody>
                {filteredOptions.map((option, index) => (
                  <tr key={index} onClick={() => handleOptionClick(option)}>
                    <td>{option.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {isBlur && borderColor[name] === "#A30000" && (
        <span className="formWarning">{ErrorMessage[name]}</span>
      )}
    </div>
  );
};

export default Dropdown;
