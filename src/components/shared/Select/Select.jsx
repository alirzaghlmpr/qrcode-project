import React from "react";

const Select = ({
  defaultValue,
  options,
  id = null,
  extraClasses = null,
  className = null,
}) => {
  let defaultButtonClassName = `bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50 ${
    extraClasses && extraClasses
  }`;

  return (
    <select
      id={id && id}
      className={className ? className : defaultButtonClassName}>
      <option value={null} defaultValue>
        {defaultValue}
      </option>
      {options}
    </select>
  );
};

export default Select;
