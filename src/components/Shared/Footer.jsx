import { Link } from 'react-router-dom';
import { PageLinks } from '../';

const Footer = () => (
    <div className="footer">
        <Link to="/">
            <h1 className='logo'>Hectec</h1>
        </Link>
        <PageLinks />
    </div>
)

export default Footer;
