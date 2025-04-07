import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Workflow App</Link>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-gray-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/workflow-builder"
                className="text-white hover:text-gray-200"
              >
                Create Workflow
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
