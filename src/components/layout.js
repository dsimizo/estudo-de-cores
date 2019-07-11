/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import layoutStyles from './layout.module.scss'
import Header from './header'
import Footer from './footer'
// import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className={layoutStyles.mainContent}>
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
