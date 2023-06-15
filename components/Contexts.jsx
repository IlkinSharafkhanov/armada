import React, { createContext, useState } from "react";

const Context = createContext();

export const ContextsProvider = ({ children }) => {
  const [activeNavBar, setActiveNavBar] = useState(false);
  return (
    <Context.Provider value={{ activeNavBar, setActiveNavBar }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
