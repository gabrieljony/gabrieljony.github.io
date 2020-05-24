import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  ${media.lessThan("large")`
    width: auto;
  `}
`

export const SocialLinksList = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  padding: 12px;
`

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
