import { useLoaderData, Link } from "react-router-dom";

export default function Recipes(){

    const fetchedData = useLoaderData();

    return(
        <div className="recipes-listing">
            {fetchedData.recipes.map(recipe => (
                <div className="recipe-detail" key={recipe.id}>
                    <Link to={recipe.id.toString()}>
                        <h4>{recipe.name}</h4>
                        <span className="difficulty">Difficulty: {recipe.difficulty}</span>
                        <span className="cuisine">Cuisine: {recipe.cuisine}</span>
                        <span className="meal-type">Meal Type: {recipe.mealType}</span>
                        <span className="tags-wrap">
                            <span className="tag">{recipe.tags[0]}</span>
                            <span className="tag">{recipe.tags[1]}</span>
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    )
}

// loader function
export const recipesLoader = async () => {
    const res = await fetch('https://dummyjson.com/recipes/?limit=4');

    if(!res.ok){
        throw Error('could not fetch the data');
    }

    return res.json();
}