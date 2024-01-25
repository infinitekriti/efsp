import { Form } from "react-bootstrap";
import { ReactComponent as DropDownIcon } from "../../../assets/images/svgIcons/dropdownIcon.svg"
import "./SearchableDropdown.scss"
import { useEffect, useRef, useState } from "react";
const SearchableDropdown = ({
  options,
  label,
  id,
  selectedVal,
  onValidation,
  isValidationCheck = false,
  onBlur,
  style,
  error,
  placeholder,
  labelName,
  name,
  requred
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);
  const handleOnChange =(e)=>{
     const {name , value} = e.target;
      setQuery(value);
      {isValidationCheck && onValidation(name,value)}
     
  }
  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const selectOption = (option) => {
    setQuery(() => option?.label);
    // handleChange(option[label]);
    setIsOpen((isOpen) => !isOpen);
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;

    return "";
  };

  const filter = (options) => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <div className="dropdown">
      <div className="dropdown-control">
        <Form.Group className="relative mb-3">
             <Form.Label>{labelName}</Form.Label>
             {requred && <span className="requred">* </span>}
             <div className="position-relative">
             <Form.Control
              type="text"
              ref={inputRef}
              value={getDisplayValue()}
               name={name}
               onChange={handleOnChange}
               onClick={toggle}
               onBlur={onBlur}
               style={style}
               placeholder={placeholder}
             />
             
             
             <div className={`arrow`}>
                <DropDownIcon />
             </div>
            {error && (
               <span className="formWarning">{error}</span>
             )}
             </div>
          </Form.Group>
      </div>

      <div className={`options ${isOpen ? "open" : ""}`}>
        {filter(options).map((option, index) => {
          return (
            <div
              onClick={() => selectOption(option)}
              className={`option ${
                option[label] === selectedVal ? "selected" : ""
              }`}
              key={`${id}-${index}`}
            >
              {option[label]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchableDropdown;
