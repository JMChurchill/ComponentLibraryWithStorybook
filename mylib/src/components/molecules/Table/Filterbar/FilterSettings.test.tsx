import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FilterSettings from "./FilterSettings";

type ItemType = {
  id: number;
  [key: string]: any;
};

// const data1: ItemType[] = [{ name: "name1" }, { name: "name2" }];
const data2: ItemType[] = [
  { id: 1, name: "name1", test: "aa" },
  { id: 2, name: "name2", test: "aa" },
];

type FilterType = {
  id: number;
  name: string;
  value: string | number[] | Date;
  label?: string;
  key: string;
  type: string;
  action: (data: any[], key: string) => void;
};

const MockFilterSettingsContainer = ({ data }: { data: any[] }) => {
  const [theData, setTheData] = useState(data);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [isAdding, setIsAdding] = useState<boolean>(true);
  return (
    <FilterSettings
      data={theData}
      fullData={theData}
      filters={filters}
      setFilters={setFilters}
      isAdding={isAdding}
      setIsAdding={setIsAdding}
      noFilter={["id"]}
    />
  );
};

describe("Check if renders", () => {
  it("one datapoint", async () => {
    await render(<MockFilterSettingsContainer data={data2} />);
    const filterPointTitle = screen.getByText(/add filter/i);

    screen.debug();

    expect(filterPointTitle).toBeInTheDocument();
  });
});
