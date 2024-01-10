import "./InputField.scss";

function Dropdown({
  label,
  required,
  selectOption,
  selectValues,
  onChange,
  className,
  defaultValue,
  errorMsg,
}) {
  return (
    <div
      className={`fromInput ${className ? className : ""}`.trim()}
    >
         {label && (
          <label>
            {label} {required && "*"}{" "}
          </label>
        )}
        <select
          className="formInput"
          value={selectValues}
          onChange={onChange}
          required
        >
          <option value={defaultValue} hidden>
            {defaultValue}
          </option>
          {selectOption.map((item, i) => {
            return (
              <option key={i} value={item?.value}>
                {item?.value}
              </option>
            );
          })}
        </select>
        {errorMsg && <span className="formWarning">{errorMsg}</span>}
      </div>
  );
}
export default Dropdown;
