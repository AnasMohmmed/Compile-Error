import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    const [islogined, setIslogined] = useState(false);
    const [serviceactive, setServiceactive] = useState('payments-api');

    useEffect(() => {
        // Remove both classes first to ensure a clean slate
        document.body.classList.remove("light-theme", "dark-theme");
        // Add the current theme class to the body
        document.body.classList.add(theme === "light" ? "light-theme" : "dark-theme");
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, islogined, setIslogined, serviceactive, setServiceactive }}>
            {children}
        </ThemeContext.Provider>
    );
}