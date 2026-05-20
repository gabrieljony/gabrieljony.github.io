import React, { memo } from "react"
import PropTypes from "prop-types"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

/**
 * Componente de links para redes sociais
 * 
 * @component
 * @returns {JSX.Element} Renderiza lista de links sociais
 * 
 * @example
 * return <SocialLinks />
 */
const SocialLinks = () => (
  <S.SocialLinksWrapper as="nav" aria-label="Links de redes sociais">
    <S.SocialLinksList>
      {links.map((link) => {
        const Icon = Icons[link.label]

        if (!Icon) {
          console.warn(`Ícone não encontrado para: ${link.label}`)
          return null
        }

        return (
          <S.SocialLinksItem key={`social-link-${link.label}`}>
            <S.SocialLinksLink
              href={link.url}
              title={`Visite nosso perfil em ${link.label}`}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon aria-hidden="true" />
              </S.IconWrapper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

SocialLinks.propTypes = {}

SocialLinks.displayName = "SocialLinks"

export default memo(SocialLinks)