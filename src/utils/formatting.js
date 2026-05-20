/**
 * Utilitários para formatação e conversão de dados
 */

/**
 * Formata data para formato legível
 * @param {Date|string} date - Data a ser formatada
 * @param {string} locale - Locale para formatação
 * @returns {string} Data formatada
 */
export const formatDate = (date, locale = "pt-BR") => {
  const dateObj = typeof date === "string" ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateObj)
}

/**
 * Trunca texto até um número de caracteres
 * @param {string} text - Texto a ser truncado
 * @param {number} maxLength - Número máximo de caracteres
 * @returns {string} Texto truncado com reticências
 */
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength)}...`
}

/**
 * Converte objeto para parâmetros de query string
 * @param {object} params - Objeto com parâmetros
 * @returns {string} Query string formatada
 */
export const objectToQueryString = (params) => {
  return Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&")
}
