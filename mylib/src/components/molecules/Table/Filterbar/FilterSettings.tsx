import React, { useState, useEffect, ReactNode } from 'react';
import Slider from 'rc-slider';
import { Controller, useForm } from 'react-hook-form';
import { MdOutlineClose } from 'react-icons/md';
import Button from '../../../atoms/Button';

import { AnimatePresence, motion } from 'framer-motion';
import { FilterType } from './Filterbar';
// TODO: update to new version
import DatePicker from '../../../atoms/Inputs/Hooked/DatePicker';
import { toReadableDate } from '../../../../common/date';
import { capitalizeFirstLetter } from '../../../../common/textFormating';
import Checkbox from '../../../atoms/Inputs/Hooked/CheckboxHooked';
import MultiSelect from '../../../atoms/Inputs/Hooked/MultiSelectHooked';

type FilterSettingsProps = {
  isAdding: boolean;
  setIsAdding: (a: boolean) => void;
  filters: FilterType[] | undefined;
  setFilters: (a: FilterType[]) => void;
  fullData: any[];
  noFilter?: string[];
  aliases?: { [name: string]: string } | null;
};

type ItemType = {
  id: number;
  [key: string]: any;
};

type FormValues = {
  [key: string]: any;
};

const FilterSettings = ({
  isAdding,
  setIsAdding,
  filters,
  setFilters,
  fullData,
  noFilter = [],
  aliases = null,
}: FilterSettingsProps) => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const [filterPoints, setFilterPoints] = useState<any>({});

  const [filterComponents, setFilterComponents] = useState<ReactNode[]>([]);

  useEffect(() => {
    // get filter fields
    const tempPoints: any = {};
    fullData.map((item: ItemType, i: number) => {
      for (const [key, value] of Object.entries(item)) {
        if (!noFilter.includes(key)) {
          if (i === 0) {
            tempPoints[key] = [{ id: item.id, value }];
          } else {
            tempPoints[key].push({ id: item.id, value });
          }
        }
      }
    });
    setFilterPoints(tempPoints);
  }, [fullData]);

  useEffect(() => {
    gernerateFilterComponents();
  }, [filterPoints]);

  const getFilterLabel = (key: string) =>
    aliases && aliases[key]
      ? capitalizeFirstLetter(aliases[key])
      : capitalizeFirstLetter(key);

  const renderCheckboxed = (vals: ItemType[], key: string) => {
    // Get distinct values (should be true and false)
    const distinctVals = vals.filter(
      (a: any, i) => vals.findIndex((s: any) => a.value === s.value) === i
    );
    // render check boxes if true and false are both present
    if (distinctVals.length == 2) {
      console.log(distinctVals);
      const checkBoxes = distinctVals.map((v, index) => {
        return (
          <Checkbox
            name={`${key}-${index}`}
            value={v.value ? 'True' : 'False'}
            groupName={v.value}
            register={register}
            required={false}
            error={errors[key]}
          >
            {v.value ? 'True' : 'False'}
          </Checkbox>
        );
      });
      return (
        <>
          <div className="flex flex-row gap-4 items-center">
            <p>{getFilterLabel(key)}</p>
            <MdOutlineClose
              size={24}
              className="hover:bg-red-600 rounded-full cursor-pointer transition-all duration-500"
              onClick={e => {
                e.preventDefault();
                setValue(key, []);
              }}
            />
          </div>
          {checkBoxes}
        </>
      );
    } else {
      return <></>;
    }
  };

  const prepareArrayOfObjects = (data: any[]) => {
    // Get arrays from row
    const arrays = data.map(item => item.value);

    // Merge arrays
    var merged = [].concat.apply([], arrays);

    // Get destinct values from array
    const destinct = merged
      .filter(m => m !== null)
      .filter(
        (a: any, i) =>
          merged
            .filter(m => m !== null)
            .findIndex((s: any) => a.name === s.name) === i
      );

    // Prepare for selector
    const prepared = destinct.map((i: any) => {
      if (i.value === undefined || i.value === null)
        return { id: i.id, value: i.name };
      else return { id: i.id, value: i.value };
    });

    return prepared;
  };

  useEffect(() => {
    const currentFormVals = getValues();

    let tempVals: FormValues = {};

    filters &&
      filters.map(item => {
        if (item.type === 'object') {
          if (!Array.isArray(tempVals[item.key])) {
            tempVals[item.key] = [{ value: item.value, label: item.label }];
          } else {
            tempVals[item.key].push({ value: item.value, label: item.label });
          }
        } else if (item.type === 'number') {
          if (!Array.isArray(tempVals[item.key])) {
            tempVals[item.key] = item.value;
          }
        } else if (item.type === 'date') {
          tempVals[item.key] = item.value;
        } else if (item.type === 'boolean') {
          tempVals[item.key] = item.value;
        }
      });

    for (const [key, _value] of Object.entries(currentFormVals)) {
      if (
        tempVals[key] === undefined // &&
        // Array.isArray(tempVals[key])
        //&&
        // typeof tempVals[key] === "object"
      ) {
        if (
          Array.isArray(currentFormVals[key]) &&
          currentFormVals[key] &&
          currentFormVals[key].length &&
          currentFormVals[key][0] instanceof Date
        ) {
          setValue(key, [null, null]);
        } else {
          setValue(key, []);
        }
      } else {
        setValue(key, tempVals[key]);
      }
    }
  }, [filters]);

  const onSubmit = (values: FormValues) => {
    const tempFilters: FilterType[] = [];
    for (const [key, value] of Object.entries(values)) {
      if (key === 'id') {
      } else {
        if (value != undefined) {
          if (Array.isArray(value)) {
            if (typeof value[0] === 'number') {
              let max = Math.max(
                ...filterPoints[key].map((item: any) => item.value)
              );
              let min = Math.min(
                ...filterPoints[key].map((item: any) => item.value)
              );

              if (value[1] !== max || value[0] !== min) {
                tempFilters.push({
                  id: tempFilters.length,
                  name: `${getFilterLabel(key)}: ${value[0]} - ${value[1]}`,
                  value: [value[0], value[1]],
                  key: `${key}`,
                  type: 'number',
                  action: (fullData: any[], key: string) => {
                    return fullData.filter(
                      item => value[0] <= item[key] && item[key] <= value[1]
                    );
                  },
                });
              }
            } else if (value[0] instanceof Date) {
              tempFilters.push({
                id: tempFilters.length,
                name: `${getFilterLabel(key)}: ${toReadableDate(
                  value[0]
                )} and ${toReadableDate(value[1])}`,
                value: [value[0], value[1]],
                type: 'date',
                key: `${key}`,
                action: (fullData: any[], key: string) => {
                  return fullData.filter(
                    item => value[0] <= item[key] && item[key] <= value[1]
                  );
                },
              });
            } else {
              value.map((item: any) => {
                console.log(fullData);
                console.log(fullData[0]);
                console.log(fullData[0]['stage']);
                console.log(typeof fullData[0]['stage']);
                console.log(fullData[0]['territories']);
                console.log(typeof fullData[0]['territories']);
                if (typeof item === 'object') {
                  if (item === null || item[0] === null) {
                  } else {
                    console.log(key);
                    tempFilters.push({
                      id: tempFilters.length,
                      name: `${getFilterLabel(key)}: ${item.label}`,
                      value: item.value,
                      label: item.label,
                      type: 'object',
                      key: `${key}`,
                      action: (fullData: any[], key: string) => {
                        //check if object or text
                        if (Array.isArray(fullData[0][key])) {
                          // Drill down through object to corrisponding values -> object < (array => (object.value or object.name)) more than one present
                          return fullData.filter(
                            i =>
                              i[key].filter(
                                (j: any) =>
                                  (j &&
                                    j.value &&
                                    j.value.toLowerCase() ===
                                      item.label.toLowerCase()) ||
                                  (j &&
                                    j.name &&
                                    j.name.toLowerCase() ===
                                      item.label.toLowerCase())
                              ).length > 0
                          );
                        } else if (typeof fullData[0][key] === 'object') {
                          // Drill down through object to corrisponding values -> object < (array => (object.value or object.name)) more than one present
                          return fullData.filter(
                            i =>
                              (i[key] &&
                                i[key].value &&
                                i[key].value.toLowerCase() ===
                                  item.label.toLowerCase()) ||
                              (i[key] &&
                                i[key].name &&
                                i[key].name.toLowerCase() ===
                                  item.label.toLowerCase())
                          );
                        } else {
                          return fullData.filter(i => i[key] === item.label);
                        }
                      },
                    });
                  }
                } else {
                  alert('not used...');
                  tempFilters.push({
                    id: tempFilters.length,
                    name: item,
                    value: item,
                    label: item.label,
                    type: key,
                    key: `${key}`,
                    action: (_fullData: any[], key: string) =>
                      alert(`${key} - ${value[1]}`),
                  });
                }
              });
            }
          } else if (
            typeof value === 'string' &&
            (value === 'True' || value === 'False')
          ) {
            tempFilters.push({
              id: tempFilters.length,
              name: `${getFilterLabel(key)}: ${value}`,
              value: value,
              label: '',
              type: 'boolean',
              key: `${key}`,
              action: (fullData: any[], key: string) => {
                return fullData.filter(
                  item =>
                    (value.toLowerCase() === 'true' ? true : false) ===
                    item[key]
                );
              },
            });
          }
        }
      }
    }
    setFilters(tempFilters);
    setIsAdding(false);
  };

  function gernerateFilterComponents() {
    const keys: ReactNode[] = [];

    for (const [key, value] of Object.entries(filterPoints)) {
      const val = value as ItemType[];
      // let typ = typeof val[0].value;
      const typ = val.filter(v => v.value)[0]
        ? typeof val.filter(v => v.value)[0].value
        : undefined;
      let numArr: number[] = [];
      if (typ === 'number') numArr = val.map(item => item.value);
      keys.push(
        <div className="flex flex-col gap-2">
          {typ === 'number' && (
            <>
              <Controller
                control={control}
                name={key}
                defaultValue={[Math.min(...numArr), Math.max(...numArr)]}
                render={({ field }) => (
                  <>
                    <div className="flex flex-row items-end justify-between">
                      <p>{getFilterLabel(key)}</p>

                      <p className="var(--color-primary) px-2 rounded-full">
                        <span className="bg-skin-primary rounded-lg px-2">
                          {field.value[0] !== undefined
                            ? field.value[0]
                            : Math.min(...numArr)}
                        </span>
                        {` - `}
                        <span className="bg-skin-primary rounded-lg px-2">
                          {field.value[0] !== undefined
                            ? field.value[1]
                            : Math.max(...numArr)}
                        </span>
                      </p>
                    </div>
                    <Slider
                      range={true}
                      max={Math.max(...numArr)}
                      min={Math.min(...numArr)}
                      onChange={stuff => field.onChange(stuff)}
                      value={
                        field.value[0] === undefined
                          ? [Math.min(...numArr), Math.max(...numArr)]
                          : field.value
                      }
                      step={1}
                      handleStyle={{
                        backgroundColor: 'var(--color-primary)',
                        borderColor: 'var(--color-primary)',
                        opacity: '100%',
                        scale: '90%',
                      }}
                      trackStyle={{ backgroundColor: 'var(--color-primary)' }}
                      railStyle={{ backgroundColor: 'black' }}
                    />
                  </>
                )}
              />
            </>
          )}
          {typ === 'string' && (
            <>
              <p>{getFilterLabel(key)}</p>
              <MultiSelect
                control={control}
                name={key}
                options={val
                  .filter(m => m !== null)
                  .filter(
                    (a, i) => val.findIndex(s => a.value === s.value) === i
                  )
                  .map((i, index) => {
                    return { value: index, label: i.value };
                  })}
              />
            </>
          )}
          {typ === 'boolean' && <>{renderCheckboxed(val, key)}</>}
          {!(typ === 'string' || typ === 'boolean' || typ === 'number') &&
            !val.filter(v => v.value)[0] &&
            !(val.filter(v => v.value)[0].value instanceof Date) &&
            typ === 'object' && (
              <>
                <p>{getFilterLabel(key)}</p>
                <MultiSelect
                  control={control}
                  name={key}
                  options={prepareArrayOfObjects(val).map((i: any) => {
                    return { value: i.id, label: i.value };
                  })}
                />
              </>
            )}
          {val.filter(v => v.value)[0] &&
            val.filter(v => v.value)[0].value instanceof Date && (
              <DatePicker
                title={key}
                control={control}
                errors={false}
                name="lastActivity"
                required={false}
                selectsRange={true}
                inline={false}
                defaultStartDate={
                  Array.isArray(getValues('lastActivity')) &&
                  getValues('lastActivity').length === 2
                    ? getValues('lastActivity')[0]
                    : null
                }
                defaultEndDate={
                  Array.isArray(getValues('lastActivity')) &&
                  getValues('lastActivity').length === 2
                    ? getValues('lastActivity')[1]
                    : null
                }
              />
            )}
        </div>
      );
    }

    setFilterComponents(keys);
    // return <>{keys}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {isAdding && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              height: {
                duration: 0.4,
              },
              opacity: {
                duration: 0.25,
                delay: 0.15,
              },
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              height: {
                duration: 0.4,
              },
              opacity: {
                duration: 0.25,
              },
            },
          }}
          // ${isAdding ? "flex" : "hidden"}
          className={` bg-skin-page-forground absolute top-full right-0 py-5 px-1 m-0 my-1 rounded-md shadow-sm z-50 min-w-[100%] md:m-1 sm:min-w-[50%] 
      md:min-w-[33%] lg:min-w-[33%] xl:min-w-[25%]`}
        >
          <form
            className="flex flex-col gap-2 min-w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative flex flex-row justify-between items-center pb-1 px-3">
              <h3>Add filter</h3>
              <MdOutlineClose
                size={25}
                className="text-skin-base hover:text-red-600 hover:bg-skin-page-forground-hover rounded-full cursor-pointer transition-all duration-500"
                onClick={() => setIsAdding(false)}
              />
              <div className=" absolute w-full h-0.5 bg-white bottom-0 left-0 opacity-10 rounded-full"></div>
            </div>
            <div className="px-3 max-h-[50vh] overflow-y-auto overflow-x-hidden">
              {/* {getFilterPoints()} */}
              {filterComponents}
            </div>
            <div className="flex flex-col w-full px-3">
              <Button onClick={() => {}}>Filter</Button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterSettings;
