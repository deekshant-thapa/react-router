import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="hgroup-wrap">
                    <div className="site-branding">
                        <Link to='/'>Jobs Locator</Link>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to='/jobs'>Jobs</NavLink></li>
                            <li><NavLink to='/contact'>Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}