import React from 'react'
import './Header.scss'

const HeaderUI = () => {
    return (
        <div className={`header`}>
            <div className="header__logo">
                <a href="#" className="header__logo-link">
                    <span className={`header__logo-text`}>the <br/> moive <br/> db</span>
                </a>
            </div>
            <div className="header__auth">
                <div className="log-in">login</div>
            </div>
        </div>
    )
}

export default HeaderUI
