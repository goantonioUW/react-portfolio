import React from 'react';

// Sticky footer source:
// https://getbootstrap.com/docs/5.0/examples/sticky-footer-navbar/
const Footer = ({ text }) => {
    return (
        <footer className="footer mt-auto text-center py-3 bg-dark text-light">
            {text}
        </footer>
    )
}

Footer.defaultProps = {
    text: 'Antonio Gonzalez © 2021'

}

export default Footer;