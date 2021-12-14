import { useField } from "formik";
import React, { InputHTMLAttributes, memo } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: any;
  hideLabel?: boolean;
  hideDefaultClassName?: boolean;
  rightIcon?: any;
  formik?: boolean;
  datepicker?: boolean;
  addons?: any;
}

// Default className should be removed if copying project
const defaultClassNameValue = "mb-5";

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    formik = true,
    label,
    hideLabel = false,
    rightIcon,
    placeholder,
    datepicker,
    addons,
    className,
    hideDefaultClassName = false,
    ...inputProps
  } = props;
  const placeholderText = placeholder
    ? `${placeholder}${Boolean(props.required) ? "*" : ""}`
    : undefined;

  let field = {},
    meta;

  if (formik) [field, meta] = useField(props.name);

  const InputElem = (
    <input
      className="input"
      placeholder={placeholderText}
      {...inputProps}
      {...field}
      required={false}
      ref={ref}
    />
  );

  const classes = ["field"];
  if (!hideDefaultClassName) classes.push(defaultClassNameValue);
  if (addons) classes.push("has-addons");

  if (inputProps.type === "hidden") return InputElem;

  return (
    <div className={classes.join(" ")}>
      {!hideLabel && <label className="label">{label}</label>}
      <p className={`control${rightIcon ? " has-icons-right" : ""}`}>
        {InputElem}
        {Boolean(meta?.error) && meta?.touched && (
          <span className="field-error">{meta.error}</span>
        )}
        {Boolean(rightIcon) && (
          <span className="icon is-medium is-right">{rightIcon}</span>
        )}
      </p>
      {Boolean(addons) && <div className="control">{addons}</div>}
    </div>
  );
});

export default memo(Input);
