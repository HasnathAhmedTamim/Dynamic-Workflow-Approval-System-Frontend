import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "../features/dashboard/DashboardPage";
import WorkflowDetailPage from "../features/workflow/WorkflowDetailPage";
import WorkflowBuilderPage from "../features/builder/WorkflowBuilderPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/workflow-detail/:id" element={<WorkflowDetailPage />} />
      <Route path="/workflow-builder" element={<WorkflowBuilderPage />} />
    </Routes>
  );
};

export default AppRoutes;
