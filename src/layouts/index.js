import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import Navbar from '../components/navbar/Navbar'

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
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: "Bradley Baylis's front end developer portfolio",
            },
            {
              name: 'keywords',
              content: 'Bradley, Baylis, front, end, development, portfolio',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div>
          <Navbar />
          {children}
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
