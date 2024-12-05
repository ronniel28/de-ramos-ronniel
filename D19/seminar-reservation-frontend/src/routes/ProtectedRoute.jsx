import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if(!token) {
        return <Navigate to="/login" />
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
        // Redirect to an unauthorized page or a default dashboard
        return <Navigate to="/unauthorized" />;
      }
    

    return children;
}

export default ProtectedRoute;