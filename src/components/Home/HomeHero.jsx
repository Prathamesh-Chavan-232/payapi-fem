import { Link } from 'react-router-dom';
import phone from '../../images/home/desktop/illustration-phone-mockup.svg';

const HomeHero = () => (
    <div className="hero">
        <div className="hero__textbox">
            <h1 className="hero__textbox__heading">
                Unwrapping Smiles: Where Happiness Gets Delivered
            </h1>
            <span className='hero__textbox__subheading'>
                {"At Hectec Solutions, we're not just a company – we're your go-to partner for all things shopping! Established in September 2017, we've been on an incredible journey, bringing smiles to countless households across India."}
            </span>
            <span className="hero__textbox__contact-us">
                Have any questions? <Link to="/contact">Contact us</Link>
            </span>
        </div>
        <div className="hero__image__container">
            <img src={phone} alt="iPhone showing notification" />
        </div>
    </div>
)

export default HomeHero
