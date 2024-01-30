import React, { useState, useRef } from "react";
import "./Dropdown.scss";
import { Form } from "react-bootstrap";
import { ReactComponent as DropDownIcon } from "../../../assets/images/svgIcons/dropdownIcon.svg";

export default function Dropdown({ options, onSelect, name, label, value }) {
  const [searchTerm, setSearchTerm] = useState(value);
  const [borderColor, setBorderColor] = useState({});
  const [ErrorMessage, setErrorMessage] = useState({});
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const optionClicked = useRef(false); // Flag to track if an option was clicked

  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(filtered);
    setIsDropdownOpen(true);
  };

  const SErrorMessage = (name, Message, validate) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: validate ? "" : Message,
    }));
  };

  const handleOptionClick = (option) => {
    setSearchTerm(option);
    setIsDropdownOpen(false);
    onSelect(option, name);
    SErrorMessage(name, "", true);
    setBorderColor((prevData) => ({
      ...prevData,
      [name]: "#dee2e6",
    }));
    optionClicked.current = true;
  };

  const handleBlur = () => {
    // setTimeout(() => {
    //   setIsDropdownOpen(false);
    //   if (!optionClicked.current && !filteredOptions.includes(searchTerm)) {
    //     SErrorMessage(name, "Select a valid value", false);
    //     setBorderColor((prevData) => ({
    //       ...prevData,
    //       [name]: "red",
    //     }));
    //   }
    //   optionClicked.current = false;
    // }, 100);
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  return (
    <div className={`custom-select-dropdown ${name}`} ref={dropdownRef}>
      <Form.Label>{label}</Form.Label>
      <div className="position-relative">
        <Form.Control
          type="text"
          placeholder={`Select a ${label}`}
          value={searchTerm}
          style={{ borderColor: borderColor[name] }}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className={`arrow`}>
          <DropDownIcon />
        </div>
        {isDropdownOpen && (
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

      {borderColor[name] === "red" && (
        <span className="formWarning">{ErrorMessage[name]}</span>
      )}
    </div>
  );
}
