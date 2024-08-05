import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts.js/RootLayout";
import HelpLayout from "./layouts.js/HelpLayout";
import RecipesLayout from "./layouts.js/RecipesLayout";

// pages
import Home from "./pages/Home";
import Faq from "./pages/Help/Faq";
import Contact from "./pages/Help/Contact";
import NotFound from "./pages/NotFound";
import Recipes, { recipesLoader } from "./pages/Recipe/Recipes";
import RecipeDetail, { recipeDetailsLoader } from "./pages/Recipe/RecipeDetail";
import FetchError from "./pages/Recipe/FetchError";
import FetchErrorSingle from "./pages/Recipe/FetchErrorSingle";

const customRouter = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>

      <Route index element={<Home />} />

      <Route path="recipes" element={<RecipesLayout/>} >
        <Route index element={<Recipes/>} loader={recipesLoader} errorElement={<FetchError/>} />
        <Route path=":id" element={<RecipeDetail/>} loader={recipeDetailsLoader} errorElement={<FetchErrorSingle/>} />
      </Route>

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>

      <Route path="*" element={<NotFound/>}/>

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={customRouter} basename="/react-router"/>
  );
}

export default App;