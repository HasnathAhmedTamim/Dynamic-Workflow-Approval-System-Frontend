import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkflowBuilder = () => {
  const [workflowName, setWorkflowName] = useState("");
  const [steps, setSteps] = useState([
    { role: "", condition: "", status: "pending" },
  ]);
  const navigate = useNavigate();

  const handleSaveWorkflow = () => {
    const newWorkflow = {
      id: Date.now().toString(),
      name: workflowName,
      steps: steps,
    };

    const storedWorkflows = JSON.parse(localStorage.getItem("workflows")) || [];
    storedWorkflows.push(newWorkflow);
    localStorage.setItem("workflows", JSON.stringify(storedWorkflows));

    navigate("/");
  };

  const handleAddStep = () => {
    setSteps([...steps, { role: "", condition: "", status: "pending" }]);
  };

  const handleChangeStep = (index, field, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index][field] = value;
    setSteps(updatedSteps);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Create Workflow
      </h2>

      <div className="mb-6">
        <label
          htmlFor="workflowName"
          className="block text-lg font-medium mb-2"
        >
          Workflow Name
        </label>
        <input
          id="workflowName"
          type="text"
          placeholder="Enter workflow name"
          value={workflowName}
          onChange={(e) => setWorkflowName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        {steps.map((step, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-200 rounded-lg "
          >
            <div className="mb-4">
              <label
                htmlFor={`role-${index}`}
                className="block text-sm font-medium mb-2"
              >
                Role
              </label>
              <input
                id={`role-${index}`}
                type="text"
                placeholder="Enter role"
                value={step.role}
                onChange={(e) =>
                  handleChangeStep(index, "role", e.target.value)
                }
                className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor={`condition-${index}`}
                className="block text-sm font-medium mb-2"
              >
                Condition
              </label>
              <input
                id={`condition-${index}`}
                type="text"
                placeholder="Enter condition"
                value={step.condition}
                onChange={(e) =>
                  handleChangeStep(index, "condition", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor={`status-${index}`}
                className="block text-sm font-medium mb-2"
              >
                Status
              </label>
              <select
                id={`status-${index}`}
                value={step.status}
                onChange={(e) =>
                  handleChangeStep(index, "status", e.target.value)
                }
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        ))}

        <button
          onClick={handleAddStep}
          className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add Step
        </button>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          onClick={handleSaveWorkflow}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Save Workflow
        </button>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
