import React, { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Filterbar from '../../../../src/components/molecules/Table/Filterbar/Filterbar';

const workers = [
  { id: '1234', name: 'John', age: 67, role: { id: 1, name: 'Binman' } },
  { id: '4567', name: 'James', age: 20, role: { id: 1, name: 'Binman' } },
  { id: '5678', name: 'Phil', age: 25, role: { id: 1, name: 'Shop Keeper' } },
  { id: '6789', name: 'Steve', age: 30, role: { id: 1, name: 'Artist' } },
];
const cars = [
  { id: '1234', name: 'Mercedes', colour: 'red' },
  { id: '4567', name: 'BMW', colour: 'blue' },
  { id: '5678', name: 'Skoda', colour: 'blue' },
  { id: '6789', name: 'BMW', colour: 'red' },
];

const meta: Meta<typeof Filterbar> = {
  title: 'Components/molecules/Table/Filterbar',
  component: Filterbar,
  argTypes: {
    data: {
      options: ['workers', 'cars'],
      mapping: {
        workers: workers,
        cars,
      },
      control: {
        type: 'select',
        labels: {
          workers: 'Workers',
          cars: 'Cars',
        },
      },
      table: {
        type: { summary: 'select' },
        defaultValue: { summary: 'Cars' },
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Filterbar>;

// TODO: Finish writing stories
// https://storybook.js.org/docs/react/writing-stories/stories-for-multiple-components
// https://prateeksurana.me/blog/react-component-library-using-storybook-7/

const FilterbarTemplate: Story = {
  render: ({ data: initialData, ...args }) => {
    const [data, setData] = useState(initialData ?? []);
    // console.log('a');
    const [initialDataChange, setInitialDataChange] = useState(false);

    useEffect(() => {
      setInitialDataChange(!initialDataChange);
      setData(initialData ?? []);
    }, [initialData]);

    function printVals(data) {
      return (
        <>
          {Array.isArray(data) ? (
            data.map(item => (
              <div className="flex flex-row gap-4 items-center">
                {Object.keys(item).map(key => {
                  if (typeof item[key] === 'object')
                    return (
                      <div className="flex flex-row gap-2 items-center">
                        {key}:
                        <div
                          className="p-1"
                          style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                          }}
                        >
                          {printVals(item[key])}
                        </div>
                      </div>
                    );
                  else return <p>{`${key}: ${item[key]}`}</p>;
                })}
              </div>
            ))
          ) : typeof data === 'object' ? (
            Object.keys(data).map(key => {
              if (typeof data[key] === 'object')
                return (
                  <div className="flex flex-row gap-2 items-center">
                    {key}:
                    <div
                      className="p-1"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {printVals(data[key])}
                    </div>
                  </div>
                );
              else return <p>{`${key}: ${data[key]}`}</p>;
            })
          ) : (
            <p>{data}</p>
          )}
        </>
      );
    }

    return (
      <div style={{ height: '40vh' }}>
        <Filterbar
          {...args}
          data={data}
          setData={setData}
          resetFilterbar={initialDataChange}
        />
        {initialData ? (
          <div className="flex flex-col gap-4">{printVals(data)}</div>
        ) : (
          <h2>Select a dataset</h2>
        )}
      </div>
    );
  },
};

export const Default: Story = {
  ...FilterbarTemplate,
  name: 'Filterbar',
  args: {
    // data: [data array goes here],
    // setData: [data setter goes here],
    noFilter: ['id'],
    pageName: 'testPage',
  },
};
export const Cars: Story = {
  ...FilterbarTemplate,
  name: 'Cars',
  args: {
    data: cars,
    noFilter: ['id'],
    pageName: 'testPageCars',
  },
};
export const Workers: Story = {
  ...FilterbarTemplate,
  name: 'Workers',
  args: {
    data: workers,
    noFilter: ['id'],
    pageName: 'testPageWorkers',
  },
};

export const WithSearching: Story = {
  ...FilterbarTemplate,
  args: {
    data: workers,
    noFilter: ['id'],
    pageName: 'testPageSearching',
    searchable: true,
  },
};
