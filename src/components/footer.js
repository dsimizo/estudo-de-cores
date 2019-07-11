import React from 'react'

import footerStyles from './footer.module.scss'

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.footerContent} >
      Daniel Simizo © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </footer>
)

export default Footer