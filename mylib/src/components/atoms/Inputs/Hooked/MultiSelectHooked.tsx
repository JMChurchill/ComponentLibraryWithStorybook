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
            onChange={v => field.onChange(v)}
            value={field.value}
            placeholder={placeholder}
            theme={theme => ({
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
                neutral20: 'var(--color-text-base)',
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
              control: styles => ({
                ...styles,
              }),
              option: styles => ({
                ...styles,
                color: 'var(--color-text-base)',
              }),
              multiValueRemove: styles => ({
                ...styles,
                color: 'var(--color-text-base)',
                height: 'fit-content',
                width: 'fit-content',
                padding: 0,
              }),
              multiValue: styles => ({
                ...styles,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0 0.5rem',
              }),
            }}
            // styles={{
            //   control: (styles, state) => ({
            //     ...styles,
            //     backgroundColor: 'var(--color-page-background)',
            //     borderColor: state.isFocused
            //       ? 'var(--color-primary)'
            //       : 'var(--color-page-background)',
            //     ':hover': {
            //       borderColor: 'var(--color-primary)',
            //     },
            //     ':active': {
            //       outlineWidth: '0',
            //       borderWidth: '10rem',
            //     },
            //   }),
            //   clearIndicator: styles => ({
            //     ...styles,
            //     ':hover': {
            //       color: 'red',
            //       cursor: 'pointer',
            //     },
            //   }),
            //   menuList: styles => ({
            //     ...styles,
            //     backgroundColor: 'var(--color-page-background)',
            //     borderRadius: '0.125rem',
            //     color: 'var(--color-text-base)',
            //   }),
            //   option: styles => ({
            //     ...styles,
            //     backgroundColor: 'var(--color-page-background)',
            //     color: 'var(--color-text-base)',
            //     ':hover': {
            //       backgroundColor: 'var(--color-page-forground-hover)',
            //     },
            //   }),
            //   multiValue: styles => ({
            //     ...styles,
            //     backgroundColor: 'var(--color-page-forground)',
            //     display: 'flex',
            //     alignItems: 'center',
            //     color: 'var(--color-text-base)',
            //     gap: '0.25rem',
            //   }),
            //   multiValueLabel: styles => {
            //     return {
            //       ...styles,
            //       color: 'var(--color-text-base)',
            //     };
            //   },
            //   multiValueRemove: styles => ({
            //     ...styles,
            //     borderRadius: '100%',
            //     padding: 'auto',
            //     width: '1.5rem',
            //     height: '1.5rem',
            //     fontSize: '1rem',
            //     display: 'flex',
            //     alignItems: 'center',
            //     justifyContent: 'center',
            //     ':hover': {
            //       backgroundColor: 'var(--color-page-forground-hover-hover)',
            //       color: 'red',
            //     },
            //   }),
            // }}
          />
        )}
      />
      {errors && <span className="text-red-600">This field is required</span>}
    </>
  );
};

export default MultiSelectHooked;
