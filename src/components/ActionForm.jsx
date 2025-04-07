import React, { useState } from "react";

const ActionForm = ({ step, onApprove, onReject }) => {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="p-4">
      <h3 className="text-xl mb-4">Step Action</h3>
      <div className="mb-4">
        <p>
          <strong>Role:</strong> {step.role}
        </p>
        <p>
          <strong>Condition:</strong> {step.condition}
        </p>
        <p>
          <strong>Status:</strong> {step.status}
        </p>
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Add feedback for rejection"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <div>
        <button
          onClick={() => onApprove(step.id)}
          className="bg-green-500 text-white py-2 px-4 rounded mr-4"
        >
          Approve
        </button>
        <button
          onClick={() => onReject(step.id, feedback)}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ActionForm;
