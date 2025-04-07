import React from "react";

const ConditionChecker = ({ data, condition }) => {
  const evaluateCondition = (data, condition) => {
    if (condition.includes(">")) {
      const [field, value] = condition.split(">");
      return parseFloat(data[field.trim()]) > parseFloat(value.trim());
    } else if (condition.includes("=")) {
      const [field, value] = condition.split("=");
      return data[field.trim()] === value.trim();
    }
    return false;
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Condition Checker</h2>
      <p>Data: {JSON.stringify(data)}</p>
      <p>Condition: {condition}</p>
      <p>
        <strong>Condition met:</strong>{" "}
        {evaluateCondition(data, condition) ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default ConditionChecker;
