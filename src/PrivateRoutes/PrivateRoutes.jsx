import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <div class="flex w-50 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div
            class="flex flex-col justify-center overflow-hidden bg-blue-500"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
