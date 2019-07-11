import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from './header.module.scss'

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header} >
    <div className={headerStyles.content} >
      <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
