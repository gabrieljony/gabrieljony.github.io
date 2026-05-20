import React, { memo } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

/**
 * Componente Layout principal da aplicação
 * Envolve todas as páginas com header e footer comuns
 * 
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {JSX.Element} props.children - Conteúdo principal a renderizar
 * @returns {JSX.Element} Layout completo com header, conteúdo e footer
 */
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const currentYear = new Date().getFullYear()

  return (
    <div className="layout">
      <Header siteTitle={data.site.siteMetadata.title} />
      <hr />
      <div className="container">
        <main role="main">{children}</main>
      </div>
      <footer>
        <p>
          © {currentYear}, Copyright: Gabriel Jony - Site hospedado em{" "}
          <a href="https://github.com/" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          | Desenvolvido com{" "}
          <a href="https://www.gatsbyjs.org" rel="noopener noreferrer">
            Gatsby
          </a>
        </p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.displayName = "Layout"

export default memo(Layout)
