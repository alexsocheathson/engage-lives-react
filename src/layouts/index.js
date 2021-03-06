import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'

import favicon from '../favicon.ico'
import '../styles.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} 
    >
      <html lang="en"/>
      <meta name="Description" content="A shared ministry."/>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Engage Lives" />
      <meta property="og:description" content="Engage Lives -  A shared ministry" />
      <meta property="og:url" content="https://engage-lives.firebaseapp.com/" />
      <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/engage-lives.appspot.com/o/assets%2Fsky-strip.jpg?alt=media&token=26105eda-9562-4f9e-9452-359457cba835" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="576" /> 
      <link rel="icon" type="image/png" href={favicon} />
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-120810936-2"></script>
      <script>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-120810936-2');`}
      </script>
    </Helmet>
    <div className="view">
    <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
    </div>
    {/* <Footer/> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
