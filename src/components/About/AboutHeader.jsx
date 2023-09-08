import { AboutCompany } from '../';


const AboutHeader = () => (
    <div className="about__header">
        <h1 className="about__header__heading">
            We empower innovators by delivering access to the financial system
        </h1>
        <div className="about__header__card__container">
            <AboutCompany
                heading="Our Passion"
                subheading="Shopping is more than just a transaction; it's an experience that should be seamless, enjoyable, and accessible to everyone. We are passionate about enhancing this experience for our customers, and it's what drives us every day."
            />
            <AboutCompany
                heading="Our Commitment"
                subheading="We understand that your time is precious, and your choices matter. That's why we are committed to offering you a wide range of quality products, delivered right to your doorstep, with a level of service that exceeds your expectations."
            />
            <AboutCompany
                heading="Our Journey"
                subheading="From our humble beginnings, we've grown into a trusted name in the industry. Our journey has been marked by innovation, dedication, and a relentless pursuit of customer satisfaction. We've evolved and adapted to meet the ever-changing needs of our customers, and we continue to do so."
            />
        </div>
    </div>
)

export default AboutHeader
