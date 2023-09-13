import { Form, PartnersGrid } from '../components';

const Contact = () => (
    <div className="page contact"> <h1 className="contact__heading">
            Submit a help request and we’ll get in touch shortly.
        </h1>
        <main className="contact__main">
            <Form />
    {/*
            <div className="contact__investors__grid">
                <h3 className="contact__investors__grid__heading">Join the thousands of innovators already building with us</h3>
        <PartnersGrid white={true} />

            </div>
        */}
        </main>
    </div>
)

export default Contact
