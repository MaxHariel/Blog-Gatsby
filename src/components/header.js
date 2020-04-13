import React from 'react';
import { Link } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
    return(
        <header className={headerStyles.header}>
            <Link className={headerStyles.title} to="/">Max Hariel</Link>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activeNavItem} 
                        to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className={headerStyles.navItem} 
                        activeClassName={headerStyles.activeNavItem} 
                        to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;