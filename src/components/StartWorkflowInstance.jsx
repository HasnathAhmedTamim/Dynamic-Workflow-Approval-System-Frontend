// src/components/StartWorkflowInstance.jsx
import React, { useState } from "react";

const StartWorkflowInstance = ({ template }) => {
  const [data, setData] = useState({
    amount: 0,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleStart = () => {
    console.log("Workflow Instance Started:", { template, data });
  };

  return (
    <div>
      <h2>Start Workflow Instance</h2>
      <div>
        {template.steps.map((step, index) => (
          <div key={index}>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={data.amount}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={data.category}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <button onClick={handleStart} className="btn btn-primary">
        Start Workflow
      </button>
    </div>
  );
};

export default StartWorkflowInstance;
