import React from "react";
import { Control, Controller } from "react-hook-form";
import ReactSelect from "react-select";

type MultiSelectProps = {
  control: Control<any, any>;
  name: string;
  options: any;
  errors?: any;
  placeholder?: string;
  rules?: any;
};
const MultiSelect = ({
  control,
  name,
  placeholder,
  options,
  errors,
  rules = null,
}: MultiSelectProps) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <ReactSelect
            isMulti
            options={options}
            onChange={(v) => field.onChange(v)}
            value={field.value}
            placeholder={placeholder}
            styles={{
              control: (styles) => ({
                ...styles,
                backgroundColor: "var(--color-page-background)",
                borderColor: "var(--color-page-background)",
              }),
              clearIndicator: (styles) => ({
                ...styles,
                ":hover": {
                  color: "red",
                  cursor: "pointer",
                },
              }),
              menuList: (styles) => ({
                ...styles,
                backgroundColor: "var(--color-page-background)",
                borderRadius: "0.125rem",
                color: "white",
              }),
              option: (styles) => ({
                ...styles,
                backgroundColor: "var(--color-page-background)",
                ":hover": {
                  backgroundColor: "var(--color-page-forground-hover)",
                },
              }),
              multiValue: (styles) => ({
                ...styles,
                backgroundColor: "var(--color-page-forground)",
                display: "flex",
                alignItems: "center",
                color: "white",
                gap: "0.25rem",
              }),
              multiValueLabel: (styles) => {
                return {
                  ...styles,
                  color: "white",
                };
              },
              multiValueRemove: (styles) => ({
                ...styles,
                borderRadius: "100%",
                padding: "auto",
                width: "1.5rem",
                height: "1.5rem",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ":hover": {
                  backgroundColor: "var(--color-page-forground-hover-hover)",
                  color: "red",
                },
              }),
            }}
          />
        )}
      />
      {errors && <span className="text-red-600">This field is required</span>}
    </>
  );
};

export default MultiSelect;
