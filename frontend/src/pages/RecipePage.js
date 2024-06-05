import RecipeList from "../components/RecipeList";
import PageNav from "../components/PageNav";
// import "./Recipes.css"

function RecipePage(){
    return (
        <>
        <navbar>
        <PageNav/>
        </navbar>
        <div class="arrow"></div>
        <div className = "Outer-card">
          <RecipeList/>
        </div>
        </>
    );
}

export default RecipePage