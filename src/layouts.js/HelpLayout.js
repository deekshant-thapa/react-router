import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
    return (
        <>
        <section className="help">
            <div className="container">
                <h2>Website Help</h2>
                <p>Hello, how may we help you?</p>
                <nav>
                    <ul>
                        <li><NavLink to="faq">FAQ</NavLink></li>
                        <li><NavLink to="contact">Contact Us</NavLink></li>
                    </ul>
                </nav>
                <Outlet/>
            </div>
        </section>
        </>
    )
}