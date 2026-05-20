/**
 * Hook customizado para gerenciar links sociais
 * @returns {Array} Array com os links sociais
 */

import { useMemo } from "react"

const useSocialLinks = () => {
  // Aqui você pode integrar com GraphQL, localStorage ou API
  const socialLinks = useMemo(
    () => [
      {
        label: "GitHub",
        url: "https://github.com",
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com",
      },
      {
        label: "Twitter",
        url: "https://twitter.com",
      },
    ],
    []
  )

  return socialLinks
}

export default useSocialLinks
