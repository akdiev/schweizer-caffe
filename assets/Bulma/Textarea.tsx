import React, { FC, InputHTMLAttributes } from "react";

import { useField } from "formik";

export interface TextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: any;
  formik?: boolean;
}

const Textarea: FC<TextAreaProps> = (props) => {
  const { formik = true, label = false, placeholder, ...inputProps } = props;
  let field = {},
    meta;

  if (formik) [field, meta] = useField(props.name);

  return (
    <div className="field">
      {Boolean(label) && (
        <label className="label">
          {label}
          {Boolean(props.required) && "*"}
        </label>
      )}
      <p className="control">
        <textarea
          className="textarea"
          placeholder={`${placeholder}${Boolean(props.required) ? "*" : ""}`}
          {...inputProps}
          {...field}
          required={false}
        />
        {Boolean(meta?.error) && meta?.touched && (
          <span className="error">{meta.error}</span>
        )}
      </p>
    </div>
  );
};

export default Textarea;
