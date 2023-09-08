import { Link } from 'react-router-dom';

const PageLinks = () => {
    const links = ['About', 'Our Journey', 'Our Team', 'Contact'];

    return (
        <ul className="page__links">
            {links.map(link => (
                <li className="page__link" key={link}>
                    <Link to={`/${link}`}>{link.toLowerCase}</Link>
                </li>
            ))}
        </ul>
    )
}

export default PageLinks;
