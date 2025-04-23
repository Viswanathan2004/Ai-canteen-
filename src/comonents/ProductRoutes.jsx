import React from "react";
import { Navigate } from "react-router-dom";
import isAuthenticated from "../utils/isAuthenticated";

const ProtectedRoute = ({ children }) =>
  isAuthenticated() ? children : <Navigate to="/login" replace />;

export default ProtectedRoute;  