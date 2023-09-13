import { HomeHero } from '../components';
import graph from "../images/shared/desktop/graph.jpg";

const list = [
    "40 million/month marketing Spent",
    "15-20% Customer Retention",
    "5 Average Conversion",
    "10+ Average ROAS",
];

export default function Home() {
    return (
        <div className="content--padding">
        <HomeHero />
        {/* Services */}
            <div className={`services`}>
                <div className="container">
                    <h2>Explore, Experience, Excel</h2>
                    <p>
                        Easy-to-use, all in-one platform to start, run, grow and simplify your
                        E-commerce business
                    </p>
                </div>
                <div className="cards">
                    {/* Card */}
                    <div className="card">
                        {/* <h3>Grow your business quickly & easily</h3> */}
                        <p>
                            {
                                "Wide Range of Products: From the heart of your home to the open road, we've got you covered! Discover an eclectic assortment of household essentials, sleek kitchenware, cutting-edge car accessories, and more."
                            }
                        </p>
                    </div>
                    <div className="card">
                        {/* <h3>Grow your business quickly & easily</h3> */}
                        <p>
                            Unmatched Quality: Every product in our catalog is handpicked,
                            ensuring supreme quality and lasting durability. We believe in
                            products that stand the test of time.
                        </p>
                    </div>
                    <div className="card">
                        {/* <h3>Grow your business quickly & easily</h3> */}
                        <p>
                            {
                                "7 Lakhs+ Orders Delivered: Trust is earned, and we've earned it with each order delivered safely to your doorstep. 💰 Driving Growth: With a revenue of 50+ crores in INR, we've not only grown in numbers but also in the hearts of our customers. Your support fuels our success story."
                            }
                        </p>
                    </div>
                </div>
            </div>

            <div className="stats">
                {/* 4 Divs */}
                {list.map((item, i) => {
                    return (
                        <div
                            className={`container__space_btw stat_spacing`}
                            key={i}
                        >
                            <div>
                                <p className="title">{item}</p>
                            </div>
                            {i !== list.length - 1 && (
                                <div className="vertical__line"></div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className={`info__section content--padding`}>
                <div className="row">
                    <div className="left">
                        <button className="btn">Email + SMS Marketing</button>
                        <h2>Personalize and reach the right people</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                            ullam rerum architecto quis totam tempore aspernatur autem vero
                            fuga optio!
                        </p>
                    </div>
                    <img
                        alt=''
                        src={graph}
                        className={`container__img img`}
                    />
                </div>
                <div className="row row__reverse">
                    <div className="left">
                        <button className="btn">Email + SMS Marketing</button>
                        <h2>Personalize and reach the right people</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                            ullam rerum architecto quis totam tempore aspernatur autem vero
                            fuga optio!
                        </p>
                    </div>
                    <img
                        alt=''
                        src={graph}
                        className={`container__img img`}
                    />
                </div>
            </div>
        </div>
    );
}

