import React from 'react';

const myContext=React.createContext();
const dataProvider=myContext.Provider
const dataConsumer = myContext.Consumer

export { dataProvider, dataConsumer };

