import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { memo } from "react"

import { NAV_ITEMS } from "../constants/navigation"

/**
 * Componente Header da aplicação
 * 
 * @component
 * @param {Object} props - Propriedades do componente
 * @param {string} props.siteTitle - Título do site
 * @returns {JSX.Element} Header renderizado
 */
const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <nav>
      <ul className="menus" role="navigation" aria-label="Menu principal">
        {NAV_ITEMS.map((item) => (
          <li key={`nav-item-${item.path}`}>
            <Link to={item.path} activeClassName="active">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

Header.displayName = "Header"

export default memo(Header)
