import React from 'react';
import footerStyles from './footer.module.scss';

const Footer = () => {
    return(
        <footer className={footerStyles.footer}>
            <p>
                Criado por Max Hariel, © 2020
            </p>
        </footer>
    )
}

export default Footer;