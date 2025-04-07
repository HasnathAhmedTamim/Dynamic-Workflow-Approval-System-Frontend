import React, { useState } from "react";

const WorkflowTemplateBuilder = () => {
  // State variables to store workflow name, steps, roles, and conditions
  const [workflowName, setWorkflowName] = useState("");
  const [steps, setSteps] = useState([]);
  const [role, setRole] = useState("");
  const [condition, setCondition] = useState("");

  // Add a new step to the workflow
  const addStep = () => {
    setSteps([...steps, { role, condition }]);
    setRole(""); // Reset role input
    setCondition(""); // Reset condition input
  };

  // Save the workflow template
  const saveWorkflow = () => {
    const newWorkflow = { name: workflowName, steps };
    console.log("Saved workflow:", newWorkflow);
    // You would save this data to your backend here
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Create Workflow Template</h2>

      {/* Input for workflow name */}
      <input
        type="text"
        placeholder="Workflow Name"
        value={workflowName}
        onChange={(e) => setWorkflowName(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      <div>
        <h3 className="text-xl">Add Steps</h3>

        {/* Input for role and condition */}
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Role (e.g., Manager)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Condition (e.g., amount > 500)"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <button
            onClick={addStep}
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
          >
            Add Step
          </button>
        </div>
      </div>

      {/* Display steps added */}
      <h3 className="mt-4">Workflow Steps:</h3>
      {steps.length > 0 ? (
        <ul>
          {steps.map((step, index) => (
            <li key={index} className="bg-gray-100 p-2 my-2 rounded">
              <p>
                <strong>Role:</strong> {step.role}
              </p>
              <p>
                <strong>Condition:</strong> {step.condition}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No steps added yet.</p>
      )}

      {/* Save button */}
      <div className="mt-4">
        <button
          onClick={saveWorkflow}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Save Workflow
        </button>
      </div>
    </div>
  );
};

export default WorkflowTemplateBuilder;
