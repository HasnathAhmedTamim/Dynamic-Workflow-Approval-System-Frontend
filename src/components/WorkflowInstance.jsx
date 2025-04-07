import React, { useState } from "react";

const WorkflowInstance = ({ workflow, instanceData }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [status, setStatus] = useState(instanceData.status);

  // Move to the next step in the workflow
  const moveToNextStep = () => {
    const nextStepIndex = currentStepIndex + 1;
    if (nextStepIndex < workflow.steps.length) {
      setCurrentStepIndex(nextStepIndex);
      setStatus("pending"); // Reset status to pending when moving to next step
    }
  };

  // Approve the current step
  const approveStep = () => {
    setStatus("approved");
    moveToNextStep(); // Automatically move to the next step after approval
  };

  // Reject the current step
  const rejectStep = () => {
    setStatus("rejected");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Workflow Instance</h2>
      <div>
        <h3 className="text-xl">
          Current Step: {workflow.steps[currentStepIndex].role}
        </h3>
        <p>
          <strong>Condition:</strong>{" "}
          {workflow.steps[currentStepIndex].condition}
        </p>
        <p>
          <strong>Status:</strong> {status}
        </p>

        <div className="mt-4">
          {/* Show Approve/Reject buttons if status is pending */}
          {status === "pending" && (
            <>
              <button
                onClick={approveStep}
                className="bg-green-500 text-white py-2 px-4 rounded mr-2"
              >
                Approve
              </button>
              <button
                onClick={rejectStep}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Reject
              </button>
            </>
          )}
          {status === "rejected" && (
            <textarea
              placeholder="Provide feedback"
              className="mt-2 p-2 border w-full"
            ></textarea>
          )}
        </div>

        {/* Button to move to the next step */}
        <div className="mt-4">
          <button
            onClick={moveToNextStep}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Move to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowInstance;
