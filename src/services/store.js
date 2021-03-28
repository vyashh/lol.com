import React, { useState } from "react";

// global data store which can be used to provide data on every page.

export const Context = React.createContext();

const Store = ({ children }) => {
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [errorLogin, setErrorLogin] = useState("");

  return (
    <Context.Provider
      value={{
        loadingIndicator: [loadingIndicator, setLoadingIndicator],
        errorLogin: [errorLogin, setErrorLogin],
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
