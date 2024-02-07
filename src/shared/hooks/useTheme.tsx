import React, { createContext, useContext, useState } from 'react'

interface IThemeContext {
	isDark: boolean
	toggleTheme: () => void
}

const noop = (): void => {}

export const ThemeContext = createContext<IThemeContext>({
	isDark: false,
	toggleTheme: noop,
})

export const ThemeState = ({ children }: { children: React.ReactNode }) => {
	const [isDark, setIsDark] = useState(true)

	const toggleTheme = () => {
		setIsDark(prevState => !prevState)
	}

	return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
	return useContext(ThemeContext)
}
