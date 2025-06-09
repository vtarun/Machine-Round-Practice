import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
    theme: '',
    toggleTheme: () => {}
});

export const useTheme = () => {
    return useContext(ThemeContext);
}
export const ThemeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    }

    const theme = isDarkMode ? "dark" : "light";

    useEffect(()=>{
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
} 
