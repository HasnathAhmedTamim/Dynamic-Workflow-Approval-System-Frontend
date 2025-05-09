# Dynamic Workflow Approval System frontend

## Description

This project is a **Dynamic Workflow Approval System** built with **React Vite**. It allows users to view and manage workflows, drag-and-drop workflow items, and update the status of workflow steps. Key features include workflow creation, deletion, reordering, and step status management.

---

## Features

- **Drag-and-Drop Reordering**: Users can reorder workflows and steps using drag-and-drop functionality.
- **Workflow Status Management**: Each workflow step has a status (approved, pending, rejected) that can be updated.
- **Persistent Data**: Workflows are stored in `localStorage` for persistence across sessions.
- **Reusable Components**: Includes a progress bar to visually display the completion status of workflows.

---

## Technologies Used

- **React**: For building user interfaces.
- **React Router DOM**: For routing between different views.
- **react-beautiful-dnd**: For enabling drag-and-drop functionality.
- **TailwindCSS**: A utility-first CSS framework for styling the application.
- **localStorage**: For persisting workflow data locally.

---

## Project Setup & Process

### 1. **React Setup**
- Initialized a React project using `Vite` or `create-react-app`.
- Used **React** for UI components and **react-router-dom** for routing.

### 2. **Drag-and-Drop Not work**
- Integrated **react-beautiful-dnd** for drag-and-drop reordering of workflows and workflow steps.

### 3. **State Management**
- Used **React hooks** (`useState`, `useEffect`) to manage and update workflow data.

### 4. **Data Persistence**
- Stored workflows data in `localStorage` to persist data across sessions.

### 5. **Components**
- **ActionForm**
- **ConditionChecker**
- **Navbar**
- **Workflow builder**
- **DashboardPage**: Displays a list of workflows and provides drag-and-drop functionality.
- **ProgressBar**: A component that shows the progress of workflows based on step status.

### 6. **Mocks**
- **workflows.json**

### 7. **Routes**
- **Routes.jsx**

### 8. **App.jx**

### 9. **Main.jsx , config.js**

### 6. **Mocks**
- **workflows.json**

---

## Installation

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.

### Steps to Set Up

1. **Clone the repository**:

   ```bash
   git clone https://github.com/HasnathAhmedTamim/Dynamic-Workflow-Approval-System-Frontend.git

 **Navigate to the project directory**: 
    Install dependencies:
   ` npm install`
    Start the development server: `npm start`
**Open the app in your browser at local host**