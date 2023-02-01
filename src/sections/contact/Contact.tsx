import { FunctionComponent } from "react"

interface Props {

}

const Contact: FunctionComponent<Props> = () => {
    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    <h4><a href="tel:4064711512">406-471-1512</a></h4>
                </div>
            </div>
        </section>
    )
}

export default Contact