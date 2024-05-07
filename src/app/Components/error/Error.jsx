import React from "react";

const ErrorPageComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl text-red-500">Error 500</h1>
      <p className="mt-3 text-lg text-gray-700">Oops! Something went wrong.</p>
    </div>
  );
};

export default ErrorPageComponent;
