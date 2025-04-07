import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";

const WorkflowDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workflow, setWorkflow] = useState(null);

  useEffect(() => {
    const storedWorkflows = JSON.parse(localStorage.getItem("workflows"));
    if (storedWorkflows) {
      const selected = storedWorkflows.find((w) => w.id.toString() === id);
      setWorkflow(selected);
    }
  }, [id]);

  const handleStatusChange = (stepId, newStatus) => {
    const updatedSteps = workflow.steps.map((step) =>
      step.id === stepId ? { ...step, status: newStatus } : step
    );
    const updatedWorkflow = { ...workflow, steps: updatedSteps };
    setWorkflow(updatedWorkflow);

    // Update localStorage
    const storedWorkflows = JSON.parse(localStorage.getItem("workflows"));
    const updatedWorkflows = storedWorkflows.map((w) =>
      w.id.toString() === id ? updatedWorkflow : w
    );
    localStorage.setItem("workflows", JSON.stringify(updatedWorkflows));
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "rejected":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  if (!workflow) return <div className="p-6">Workflow not found</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <p className="text-white mb-4">Workflow Tittle </p>

      <h2 className="text-3xl font-bold text-blue-600 mb-6">{workflow.name}</h2>
      <p className="text-white mb-4">Workflow Progress Bar</p>

      <div className="mb-8">
        <ProgressBar steps={workflow.steps} />
      </div>
      <p className="text-white mb-4">Details of WorkFlows </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {workflow.steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-md rounded-lg p-5 border-t-4 transition hover:shadow-xl"
            style={{
              borderTopColor: getStatusClass(step.status).split(" ").pop(),
            }}
          >
            <h3 className="text-xl font-semibold text-gray-800">{step.name}</h3>
            <p className="text-sm text-gray-500 mt-1">
              <strong>Role:</strong> {step.role}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Condition:</strong> {step.condition || "N/A"}
            </p>

            <div className="mt-4">
              <label className="text-sm text-gray-600">Status:</label>
              <select
                value={step.status}
                onChange={(e) => handleStatusChange(step.id, e.target.value)}
                className="text-blue-950 mt-1 block w-full border rounded-md px-3 py-2 bg-gray-50 focus:ring focus:ring-blue-300"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default WorkflowDetailPage;
