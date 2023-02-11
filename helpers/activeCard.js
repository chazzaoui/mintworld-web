import React, { useState } from 'react';

export const ActiveCardContext = React.createContext();

export function ActiveCardProvider(props) {
  const [activeCard, setActiveCard] = useState(undefined);

  return (
    <ActiveCardContext.Provider value={{ activeCard, setActiveCard }}>
      {props.children}
    </ActiveCardContext.Provider>
  );
}
