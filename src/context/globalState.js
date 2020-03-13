import React, { createContext, useReducer } from 'react';

// initial state
const inititalizeState = {
    transaction: 
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, Camera: 'Book', amount: 150 } 
}

// create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
};