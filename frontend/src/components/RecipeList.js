import React from "react";
import CardMenuRecipe from "./CardMenuRecipe";

const RecipeList = [
    { 
        name:"Chicken Avocado salad",
        image:"https://shorturl.at/czbGe",
        time:"20 Mins", 
        calories:"476 Kcal",
        rate:"4.7/5",
        description:"Lorem ipsum dolor sit amet",
        recipe:"Siapin Panci"
    }

  ];

export default function MenuList() {
    const Recipesformula = RecipeList;
    return(
        <>
        <div>
            {Recipesformula.map((prop) => (
                <CardMenuRecipe 
                name={prop.name} 
                image={prop.image} 
                calories={prop.calories}
                time = {prop.time}
                rate = {prop.rate}
                description={prop.description}
                recipe={prop.recipe}
                />
            ) )}
        </div>
        </>
        
    )
}