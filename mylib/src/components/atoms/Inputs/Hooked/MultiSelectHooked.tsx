import React from 'react';
import { Control, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

type MultiSelectProps = {
  control: Control<any, any>;
  name: string;
  options: any;
  errors?: any;
  placeholder?: string;
  rules?: any;
};
const MultiSelectHooked = ({
  control,
  name,
  placeholder,
  options,
  errors,
  rules = undefined,
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
            theme={(theme) => ({
              ...theme,
              borderRadius: 6,
              colors: {
                ...theme.colors,
                primary50: 'var(--color-page-forground-hover-hover)',
                primary25: 'var(--color-page-forground-hover)',
                primary: 'var(--color-primary)',
                dangerLight: 'transparent',
                neutral0: 'var(--color-page-background)',
                neutral5: 'var(--color-page-background)',
                neutral10: 'var(--color-page-forground-hover)',
                neutral20: 'var(--color-page-forground-hover)',
                neutral30: 'var(--color-text-secondary)',
                neutral40: 'var(--color-text-base)',
                neutral50: 'var(--color-text-base)',
                neutral60: 'var(--color-text-base)',
                neutral70: 'var(--color-text-base)',
                neutral80: 'var(--color-text-base)',
                neutral90: 'var(--color-text-base)',
              },
            })}
            styles={{
              control: (styles) =>
                errors
                  ? {
                      ...styles,
                      borderColor: 'rgb(239 68 68)',
                      borderWidth: '2px',
                    }
                  : {
                      ...styles,
                    },
              option: (styles) => ({
                ...styles,
                color: 'var(--color-text-base)',
              }),
              dropdownIndicator: (styles) => ({
                ...styles,
                color: 'var(--color-text-base)',
              }),
              multiValueRemove: (styles) => ({
                ...styles,
                color: 'var(--color-text-base)',
                height: 'fit-content',
                width: 'fit-content',
                padding: 0,
              }),
              multiValue: (styles) => ({
                ...styles,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0 0.5rem',
              }),
            }}
          />
        )}
      />
      {errors && <span className="text-red-600">This field is required</span>}
    </>
  );
};

export default MultiSelectHooked;
