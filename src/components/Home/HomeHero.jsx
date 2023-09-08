import { Link } from 'react-router-dom';
import { DemoForm } from '../';
import phone from '../../images/home/desktop/illustration-phone-mockup.svg';

const HomeHero = () => (
    <div className="hero">
        <div className="hero__textbox">
            <h1 className="hero__textbox__heading">
                Unwrapping Smiles: Where Happiness Gets Delivered</h1>
            <DemoForm />
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
