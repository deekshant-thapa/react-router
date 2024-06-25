import { NavLink } from "react-router-dom";

export default function Contact(){
    return(
        <section className="contact">
            <div className="container">
                <h2>this is a contact page</h2>
                <p>Below down we have nested routes</p>

                <nav>
                    <NavLink to='faq'>Faq</NavLink>
                    <NavLink to='contact-form'>Contact form</NavLink>
                </nav>
            </div>
        </section>
    )
}