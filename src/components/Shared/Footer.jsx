import { Link } from 'react-router-dom';
import { PageLinks } from '../';

const Footer = () => (
    <div className="footer">
        <Link to="/">
            <h1 className='logo'>Hectec</h1>
        </Link>
        <PageLinks />
        <div className="footer__socials">
            <a href="#" aria-label="Facebook icon">
                <i className="fab fa-facebook-square" />
            </a>
            <a href="#" aria-label="Twitter icon">
                <i className="fab fa-twitter" />
            </a>
            <a href="#" aria-label="LinkedIn icon">
                <i className="fab fa-linkedin" />
            </a>
        </div>
    </div>
)

export default Footer;
