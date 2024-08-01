import { Link, NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="hgroup-wrap">
                    <div className="site-branding">
                        <Link to='/'>Recipe Finder</Link>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to='/recipes'>Recipes</NavLink></li>
                            <li><NavLink to='/help'>Help</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <Breadcrumbs/>
            </div>
        </header>
    )
}