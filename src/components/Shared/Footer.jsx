import { Link } from 'react-router-dom';
import { PageLinks } from '../';
import logo from '../../images/shared/desktop/logo.svg'

const Footer = () => (
    <div className="footer">
        <Link to="/">
            <img className="logo" src={logo} alt="" />
        </Link>
        <PageLinks />
    </div>
)

export default Footer;
