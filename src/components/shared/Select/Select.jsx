import React from "react";

const Select = ({
  defaultValue,
  options,
  id = null,
  extraClasses = null,
  className = null,
  name = null,
}) => {
  let defaultButtonClassName = `bg-indigo-950 text-xs px-3 py-2 rounded-lg text-slate-50 ${
    extraClasses && extraClasses
  }`;

  return (
    <select
      name={name && name}
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
