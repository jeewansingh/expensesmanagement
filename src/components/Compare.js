import React from "react";

// Functional component to render the table
function TransactionTable({ data }) {
  return (
    <div>
      <h2>Income</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Category</th>
            <th>Last Month</th>
            <th>This Month</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the income object and render table rows */}
          {Object.entries(data.income).map(([title, amount]) => (
            <tr key={title}>
              <td>{title}</td>
              <td>{amount}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Expense</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Category</th>
            <th>Last Month</th>
            <th>This Month</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the expense object and render table rows */}
          {Object.entries(data.expense).map(([title, amount]) => (
            <tr key={title}>
              <td>{title}</td>
              <td>{amount}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Sample data
const sampleData = {
  income: {
    salary: "891100",
    commission: "117",
    rental: "80",
    interest: "0",
    other: "0",
  },
  expense: {
    food: "6100",
    clothing: "7100",
    travel: "0",
    stationary: "0",
    other: "0",
  },
};

// Component to render the table with sample data
function Compare() {
  return (
    <div>
      <TransactionTable data={sampleData} />
    </div>
  );
}

export default Compare;
