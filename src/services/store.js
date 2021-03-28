import React, { useState, useEffect } from "react";

// global data store which can be used to provide data on every page.

export const Context = React.createContext();

const Store = ({ children }) => {
  return <Context.Provider>{children}</Context.Provider>;
};

export default Store;
