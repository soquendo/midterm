import { createContext, useEffect, useState } from 'react'

export const themes = {
  light: {
    foreground: '#242526',
    background: '#fff',
  },
  dark: {
    foreground: '#fff',
    background: '#242526',
    color: 'white'
  },
};

export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme((previousValue) => previousValue === themes.light ? themes.dark : themes.light);
      };

      useEffect(() => {
        document.body.style.backgroundColor = theme.background;
        document.body.style.color = theme.foreground;
      }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};