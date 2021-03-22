import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const toggleAuth = () => {
        setAuthenticated(!isAuthenticated);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;