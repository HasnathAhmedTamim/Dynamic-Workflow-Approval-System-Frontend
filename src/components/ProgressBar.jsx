import React from "react";

const ProgressBar = ({ steps }) => {
  const getStepClass = (status) => {
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

  return (
    <div className="flex gap-1 h-4">
      
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex-1 rounded-sm ${getStepClass(
            step.status
          )} relative group cursor-pointer`}
          title={`${step.name} (${step.role}) - ${step.status}`}
        >
          {/* Optional tooltip using Tailwind */}
          <div className="absolute bottom-full mb-1 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
            {step.name} ({step.role}) - {step.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
