
import { AboutCompany } from '../';


const CareerHeader = () => (
    <div className="about__header">
        <h1 className="about__header__heading alt--title">In the rapidly evolving world of technology, few have dared to carve a niche and thrive as persistently as HecTec Solutions.
        </h1>
        <div className="about__header__card__container">
            <AboutCompany
                heading="Inception"
                subheading="The seed was sown. Envisioned as a beacon of tech solutions, HecTec was more than just a company—it was an idea, a dream, a commitment."
            />
            <AboutCompany
                heading="First Client"
                subheading="We still remember the joy of delivering our first project. It wasn't just about the technology; it was about trust, collaboration, and success."
            />
            <AboutCompany
                heading="Diverse Solutions"
                subheading="From digital transformation to AI and machine learning, we expanded our expertise, ensuring we stayed ahead of the curve and relevant to our clientele."
            />
        </div>
    </div>
)
export default CareerHeader;
