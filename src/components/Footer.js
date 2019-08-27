import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Jérémy Lanfranchi - <a href="https://www.facebook.com/jeremylanfranchiphotography">Facebook</a> | <a href="https://twitter.com/jeditch">Twitter</a> | <a href="https://www.linkedin.com/in/jeremylanfranchi/">Linkedin</a> - Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
