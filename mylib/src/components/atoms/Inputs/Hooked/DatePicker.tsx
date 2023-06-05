import React, { useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

import styles from './DatePicker.module.css';
import { capitalizeFirstLetter } from '../../../../common/textFormating';

type DatePickerProps = {
  title?: string;
  control: any;
  errors: any;
  name: string;
  required: boolean;
  selectsRange: boolean;
  inline: boolean;
  defaultStartDate?: Date;
  defaultEndDate?: Date;
  allowPast?: boolean;
};

const DatePicker = ({
  title,
  control,
  errors,
  name,
  selectsRange,
  inline,
  required = false,
  defaultStartDate,
  defaultEndDate,
  allowPast = false,
}: DatePickerProps) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    if (defaultStartDate && defaultEndDate) {
      //set defult values
      setDateRange([defaultStartDate, defaultEndDate]);
    } else {
      setDateRange([null, null]);
    }
  }, [defaultStartDate, defaultEndDate]);

  if (selectsRange === true) {
    return (
      <div className="flex flex-col">
        <Controller
          control={control}
          name={name}
          rules={{ required: required }}
          render={({ field }: any) => (
            <>
              <h3>{title && capitalizeFirstLetter(title)}</h3>
              {/* {field.value} */}
              <ReactDatePicker
                dateFormat={'dd/MM/yyyy'}
                className={`bg-skin-page-background rounded-md ${errors &&
                  styles.error_input}`}
                placeholderText="Select date"
                // onChange={(date) => field.onChange(date)}
                // selected={field.value}
                calendarClassName={`${styles.datePicker}`}
                selectsRange={selectsRange}
                startDate={startDate}
                endDate={endDate}
                onChange={e => {
                  setDateRange(e);
                  field.onChange(e);
                }}
                isClearable={true}
                // startDate={field.value[0]}
                // endDate={field.value[1]}
                inline={inline}
                customInput={<input className="w-full p-1" />}
              />
            </>
          )}
        />
        {errors && <span className={styles.error}>This field is required</span>}
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field }: any) => (
          <ReactDatePicker
            dateFormat={'dd/MM/yyyy'}
            className={`bg-skin-page-background text-skin-base rounded-md ${errors &&
              styles.error_input}`}
            placeholderText="Select date"
            minDate={!allowPast ? new Date() : null}
            onChange={date => field.onChange(date)}
            selected={field.value}
            calendarClassName={`${styles.datePicker}`}
            inline={inline}
          />
        )}
      />
      {errors && <span className={styles.error}>This field is required</span>}
    </div>
  );
};

export default DatePicker;
