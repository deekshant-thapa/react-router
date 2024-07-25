import { useLoaderData } from "react-router-dom"

export default function RecipeDetail() {
    const recipe = useLoaderData();

    return (
        <div className="single-recipe-detail">
            <div className="recipe-overview">
                <figure className="featured-image">
                    <img src={recipe.image} alt="" />
                </figure>
                <div className="recipe-preparation">
                    <h3>{recipe.name}</h3>
                    <span>Preparation Time: {recipe.prepTimeMinutes} min</span>
                    <span>Servings: {recipe.servings} people</span>
                    <span>Calories Per Servings: {recipe.caloriesPerServing}</span>
                    <span>Cuisine: {recipe.cuisine}</span>
                    <span>Difficulty: {recipe.difficulty}</span>
                </div>
            </div>
            <div className="preparation-ways">
                <h3>Preparation ways</h3>
                <div className="ingredients">
                    <h4>Ingredients required:</h4>
                    <ul>
                        {recipe && recipe.ingredients.map(a => (
                            <li>{a}</li>
                        ))}
                    </ul>
                </div>
                <div className="instructions">
                    <h4>Instructions:</h4>
                    <ul>
                        {recipe && recipe.instructions.map(a => (
                            <li>{a}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

// loader function
export const recipeDetailsLoader = async ({params}) => {
    const {id} = params;

    const res = await fetch('https://dummyjson.com/recipes/' + id);

    if(!res.ok){
        throw Error('could not find that item');
    }

    return res.json();
}