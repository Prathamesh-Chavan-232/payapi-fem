import { Card } from '../';
import * as image from '../../images/home/desktop';

const AppAttributes = () => {
    const attributeList = [
        {
            heading: "Explore, Experience, Excel",
            subheading: "Wide Range of Products: From the heart of your home to the open road, we've got you covered! Discover an eclectic assortment of household essentials, sleek kitchenware, cutting-edge car accessories, and more.",
            img: image.simple,
        },
        {
            heading: "Unmatched Quality",
            subheading: "Every product in our catalog is handpicked, ensuring supreme quality and lasting durability. We believe in products that stand the test of time.",
            img: image.easy,
        },
        {
            heading: "7Lakhs+ Orders Delivered",
            subheading: "Trust is earned, and we've earned it with each order delivered safely to your doorstep. Driving Growth: With a revenue of 50+ crores in INR, we've not only grown in numbers but also in the hearts of our customers. Your support fuels our success story.",
            img: image.simple,
        }
    ]
    let financeText = "40 million/month marketing Spent";
    let bankingText = "15-20% Customer Retention";
    let newText = "5 Average Conversion";
    let consumerText = "10+ Average ROAS";

    return (
        <main className="home__main">
            {
                attributeList.map((item, i) => {
                    return <div key={i} className="app__attribute">
                        <div className="app__attribute__textbox">
                            <h2 className="app__attribute__textbox__heading">{item.heading}</h2>
                            <p className="app__attribute__textbox__subheading">{item.subheading}</p>
                        </div>
                        <div className="app__attribute__image__container">
                            <img src={item.img} alt="iPhones showing simple UI of PayAPI mobile app" />
                        </div>
                    </div>
                })
            }
            <div className="app__attribute__grid">
                <Card icon={image.finances} heading="Personal Finances" subheading={financeText} />
                <Card icon={image.banking} heading="Banking & Coverage" subheading={bankingText} />
                <Card icon={image.banking} heading="Banking & Coverage" subheading={newText} />
                <Card icon={image.consumer} heading="Consumer Payments" subheading={consumerText} />
            </div>
        </main>
    )
}

export default AppAttributes
