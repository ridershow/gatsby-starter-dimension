import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Jérémy Lanfranchi</h1>
                <p>portfolio & projects <br/>
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>WHY</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>HOW</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>WHAT</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>CONTACT</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
