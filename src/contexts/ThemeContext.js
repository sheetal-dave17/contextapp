import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [light, setLightTheme] = useState({ ui: '#ddd', syntax: '#555', bg: '#eee' });
    const [dark, setDarkTheme] = useState({ ui: '#333', syntax: '#ddd', bg: '#555' });
    const [isLightTheme, setIsLightTheme] = useState(false);

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme)
    }
    return (
        <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>

    );
}

export default ThemeContextProvider;