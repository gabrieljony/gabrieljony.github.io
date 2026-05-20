/**
 * Utilitários para validação e sanitização
 */

/**
 * Valida se uma URL é válida
 * @param {string} url - URL a ser validada
 * @returns {boolean} True se URL é válida
 */
export const isValidURL = (url) => {
  try {
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}

/**
 * Sanitiza strings para evitar XSS
 * @param {string} str - String a ser sanitizada
 * @returns {string} String sanitizada
 */
export const sanitizeString = (str) => {
  const div = document.createElement("div")
  div.textContent = str
  return div.innerHTML
}

/**
 * Gera ID único para elementos React
 * @param {string} prefix - Prefixo para o ID
 * @returns {string} ID único
 */
export const generateUniqueId = (prefix = "id") => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}
