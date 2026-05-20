/**
 * Hook customizado para gerenciar tema da aplicação
 */

import { useEffect, useState } from "react"

const useTheme = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Verificar preferência do usuário
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    const savedTheme = localStorage.getItem("theme")

    const theme = savedTheme || (prefersDark ? "dark" : "light")
    setIsDark(theme === "dark")
    document.documentElement.dataset.theme = theme
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    setIsDark(!isDark)
    localStorage.setItem("theme", newTheme)
    document.documentElement.dataset.theme = newTheme
  }

  return { isDark, toggleTheme }
}

export default useTheme
