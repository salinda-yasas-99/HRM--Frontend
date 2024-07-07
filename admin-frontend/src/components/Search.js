import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../Services/RestApiCalls";

const Search = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const fetchedEmployees = await getAllEmployees();
      setEmployees(fetchedEmployees);
    };

    fetchEmployees();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === "") {
      setFilteredEmployees([]);
    } else {
      const results = employees.filter((employee) =>
        employee.workEmail.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredEmployees(results);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Filtered Employees:", filteredEmployees);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label
          htmlFor="employee-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="employee-search"
            className="block w-[300px] p-4 ps-10 text-sm text-white font-bold border border-gray-300 rounded-lg bg-[#013a63] focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search employee by email"
            value={searchQuery}
            onChange={handleSearchChange}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {/* Display filtered results */}

      <ul
        className={`max-w-md bg-[#497cc9] rounded-lg z-10 mt-2 p-2 fixed ${
          filteredEmployees.length > 0 ? "" : "hidden"
        }`}
      >
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <li
              key={employee.employeeId}
              className="text-white font-bold px-5 py-2 hover:bg-[#1e3f48] rounded-lg"
            >
              {employee.firstName} {employee.lastName} - {employee.workEmail}
            </li>
          ))
        ) : (
          <li className="text-white font-bold px-5 py-2"></li>
        )}
      </ul>
    </div>
  );
};

export default Search;
