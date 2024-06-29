import React, { createContext, useContext } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const apiEndpoints = {
    aiApis: "http://127.0.0.1:8001",
  };

  return (
    <ApiContext.Provider value={apiEndpoints}>{children}</ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
