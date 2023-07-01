import React from "react"

const AppContext = React.createContext()
const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches   || localStorage.getItem('darkTheme') ==="true"
    console.log(localStorage.getItem('darkTheme') ==="true")
    return prefersDarkMode
}

export const AppProvider = ({children}) => {
    const [isDarkTheme, setIsDarkTheme ] = React.useState(getInitialDarkMode())
    const [isError, setIsError] = React.useState(false)
    const [inputValue, setInputValue] = React.useState("bett")

    const toggleDarkTheme= React.useCallback(() => {
        const newIsDarkTheme = ! isDarkTheme
        setIsDarkTheme(newIsDarkTheme);
        localStorage.setItem('darkTheme', isDarkTheme)
    },[isDarkTheme,setIsDarkTheme])

    React.useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme)
    },[isDarkTheme])

    const value = {
        isDarkTheme, 
        toggleDarkTheme, 
        setInputValue, 
        inputValue,
        isError,
        setIsError
    }

    return <AppContext.Provider value ={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => React.useContext(AppContext)