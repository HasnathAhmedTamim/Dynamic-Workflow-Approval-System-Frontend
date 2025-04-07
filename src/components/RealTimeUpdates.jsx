import React, { useState, useEffect } from "react";

// Mock function to simulate real-time updates
const useRealTimeUpdates = () => {
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate a status change every 3 seconds
      setStatus((prevStatus) =>
        prevStatus === "pending" ? "approved" : "pending"
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return status;
};

const RealTimeUpdates = () => {
  const status = useRealTimeUpdates();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Real-Time Status</h2>
      <p>Status: {status}</p>
    </div>
  );
};

export default RealTimeUpdates;
