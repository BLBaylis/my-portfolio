import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import MobileNavbar from '../components/mobileNavbar2/MobileNavbar'
//import Navbar from '../components/navbar/Navbar'
//import DesktopNavbar from '../components/desktopNavbar/DesktopNavbar'
//import MobileNavbar from '../components/mobileNavbar/MobileNavbar'
//import './index.css'
//import '../utils/global.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      <CssBaseline />
      {/*<MobileNavbar />*/}
      <MobileNavbar />
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export default Layout

const graphql = (literals, ...substitutions) => {
  let result = ''

  // run the loop only for the substitution count
  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i]
    result += substitutions[i]
  }

  // add the last literal
  result += literals[literals.length - 1]

  return result
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
