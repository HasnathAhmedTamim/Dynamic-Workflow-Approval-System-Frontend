import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DashboardPage = () => {
  const [workflows, setWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedWorkflows = JSON.parse(localStorage.getItem("workflows"));
    if (storedWorkflows?.length > 0) {
      setWorkflows(storedWorkflows);
      setLoading(false);
    } else {
      fetch("/workflows.json")
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch workflows");
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("workflows", JSON.stringify(data));
          setWorkflows(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading workflows:", error);
          setLoading(false);
        });
    }
  }, []);

  const handleDelete = (id) => {
    const updatedWorkflows = workflows.filter((workflow) => workflow.id !== id);
    setWorkflows(updatedWorkflows);
    localStorage.setItem("workflows", JSON.stringify(updatedWorkflows));
  };

  const handleStatusChange = (workflowId, stepIndex, newStatus) => {
    const updatedWorkflows = workflows.map((workflow) => {
      if (workflow.id === workflowId) {
        const updatedSteps = [...workflow.steps];
        updatedSteps[stepIndex] = {
          ...updatedSteps[stepIndex],
          status: newStatus,
        };
        return { ...workflow, steps: updatedSteps };
      }
      return workflow;
    });

    setWorkflows(updatedWorkflows);
    localStorage.setItem("workflows", JSON.stringify(updatedWorkflows));
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // Dropped outside the list

    const items = Array.from(workflows);
    const [removed] = items.splice(source.index, 1);
    items.splice(destination.index, 0, removed);

    setWorkflows(items);
    localStorage.setItem("workflows", JSON.stringify(items));
  };

  if (loading)
    return (
      <div className="text-center py-8 text-lg font-semibold">Loading...</div>
    );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Workflows</h2>

      {workflows.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-xl">No workflows found. Create a new one.</p>
          <Link
            to="/workflow-builder"
            className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-200"
          >
            Create New Workflow
          </Link>
        </div>
      ) : (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" direction="vertical">
            {(provided) => (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {workflows.map((workflow, index) => (
                  <Draggable
                    key={workflow.id}
                    draggableId={workflow.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 flex flex-col justify-between"
                      >
                        <div>
                          <h3 className="text-xl font-semibold text-blue-600">
                            {workflow.name}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            <strong>Total Steps:</strong>{" "}
                            {workflow.steps.length}
                          </p>

                          <div className="mt-4">
                            <ProgressBar steps={workflow.steps} />
                          </div>

                          <div className="mt-4 space-y-2">
                            {workflow.steps.map((step, index) => (
                              <div
                                key={index}
                                className="flex justify-between items-center text-sm"
                              >
                                <span className="text-purple-950 font-bold">
                                  <p className="font-bold "> Role :</p> {step.name} ({step.role})
                                </span>
                                <select
                                  value={step.status}
                                  onChange={(e) =>
                                    handleStatusChange(
                                      workflow.id,
                                      index,
                                      e.target.value
                                    )
                                  }
                                  className="border px-2 py-1 rounded text-sm"
                                >
                                  <option value="approved">Approved</option>
                                  <option value="pending">Pending</option>
                                  <option value="rejected">Rejected</option>
                                </select>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 flex justify-between items-center space-x-4">
                          <Link
                            to={`/workflow-detail/${workflow.id}`}
                            className="text-blue-500 hover:text-blue-700 font-medium"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => handleDelete(workflow.id)}
                            className="text-red-500 hover:text-red-700 font-medium"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default DashboardPage;
