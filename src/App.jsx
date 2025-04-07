import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./features/DashboardPage";
import WorkflowDetailPage from "./features/WorkflowDetailPage";
import WorkflowBuilder from "./components/WorkflowBuilder";
import Navbar from "./components/NavBar";


const App = () => {
  // useEffect(() => {
  //   // Initialize workflows if not already stored in localStorage
  //   const storedWorkflows = localStorage.getItem("workflows");
  //   if (!storedWorkflows) {
  //     const initialWorkflows = [
  //       {
  //         id: "1",
  //         name: "Expenses Approval Workflow",
  //         steps: [
  //           {
  //             id: "step1",
  //             name: "Step 1: Finance Approval",
  //             role: "finance",
  //             condition: "amount > 500",
  //             status: "pending",
  //             feedback: "",
  //           },
  //           {
  //             id: "step2",
  //             name: "Step 2: Manager Approval",
  //             role: "manager",
  //             condition: "category = urgent",
  //             status: "pending",
  //             feedback: "",
  //           },
  //         ],
  //       },
  //     ];
  //     localStorage.setItem("workflows", JSON.stringify(initialWorkflows));
  //   }
  // }, []);

  return (
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/workflow-detail/:id" element={<WorkflowDetailPage />} />
        <Route path="/workflow-builder" element={<WorkflowBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;
