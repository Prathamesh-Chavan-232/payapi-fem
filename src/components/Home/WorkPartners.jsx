import { PartnersGrid, Button } from '../';

const WorkPartners = () => (
    <div className="partners">
        <div className="partners__textbox">
            <h2 className="partners__textbox__heading">Who we work with</h2>
            <p className="partners__textbox__subheading">
                {"At Hectec Solutions, we're more than just a company; we're your dedicated partner in the world of shopping. Since our inception in September 2017, we've embarked on an extraordinary journey, spreading joy and convenience to countless households across India."}
            </p>
            <Button text="About Us" href="/about" color="transparent-white" />
        </div>
        <PartnersGrid white={true} />
    </div>
)

export default WorkPartners;
