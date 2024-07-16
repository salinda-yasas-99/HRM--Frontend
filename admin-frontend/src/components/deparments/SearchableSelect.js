import React, { useEffect, useState } from "react";
import Select from "react-select";

const SearchableSelect = ({ options, onChange, defaultValue }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onChange(selected);
  };

  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(
        (option) => option.label === defaultValue
      );
      setSelectedOption(defaultOption);
    }
  }, [defaultValue, options]);

  return (
    <Select
      className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-[300px] p-0.5  border-gray-500 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable={true}
      required
    />
  );
};

export default SearchableSelect;
