import styled from "styled-components"
import media from "styled-media-query"

import { THEME } from "../../constants/theme"

export const SocialLinksWrapper = styled.nav`
  margin: ${THEME.spacing.md} 0;
  
  ${media.lessThan("large")`
    width: auto;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  gap: ${THEME.spacing.md};
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`

export const SocialLinksItem = styled.li`
  padding: ${THEME.spacing.md};
  transition: transform ${THEME.transitions.fast} ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

export const SocialLinksLink = styled.a`
  color: ${THEME.colors.text};
  text-decoration: none;
  transition: color ${THEME.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 4px;

  &:hover {
    color: ${THEME.colors.highlight};
  }

  &:focus {
    outline: 2px solid ${THEME.colors.highlight};
    outline-offset: 2px;
  }
`

export const IconWrapper = styled.div`
  fill: currentColor;
  stroke: currentColor;
  width: ${THEME.spacing.xl};
  height: ${THEME.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
`
