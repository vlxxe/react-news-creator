import React from "react";

const Element = Element => ({ input, meta, ...restProps }) => {
  const hasError = !meta.valid && meta.touched;

  return (
    <div>
      <Element
        {...input}
        {...restProps}
        className={restProps.className + (hasError ? " uk-form-danger" : "")}
      />

      {hasError && <span> {meta.error} </span>}
    </div>
  );
};

export const Input = Element("input");
export const Textarea = Element("textarea");
