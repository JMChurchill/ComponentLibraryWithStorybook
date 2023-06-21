import React from 'react';
import ReactSelect from 'react-select';

type MultiSelectProps = {
  name: string;
  placeholder?: string;
  options: any;
  value: string;
  setValue: (value: any) => void;
};

const MultiSelect = ({
  name,
  placeholder,
  options,
  value,
  setValue,
}: MultiSelectProps) => {
  return (
    <ReactSelect
      name={name}
      options={options}
      onChange={setValue}
      value={value}
      placeholder={placeholder}
      isMulti
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
        control: (styles) => ({
          ...styles,
        }),
        option: (styles) => ({
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
  );
};

export default MultiSelect;
