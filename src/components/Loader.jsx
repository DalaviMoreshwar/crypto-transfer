import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-3">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-5s00" />
    </div>
  );
};

export default Loader;
