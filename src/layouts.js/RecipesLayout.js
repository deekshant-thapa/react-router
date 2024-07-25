import { Outlet } from "react-router-dom";

export default function RecipesLayout(){
    return(
        <section className="recipes-section">
            <div className="container">
                <h2>This is a recipe page</h2>
                <p>Here you can find list of recipes to make food</p>
                <Outlet/>
            </div>
        </section>
    )
}