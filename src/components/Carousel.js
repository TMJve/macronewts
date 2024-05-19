import React from "react";
import MiniCard from "./MiniCard";


const dietFoods = [
    { name: "Grilled Lemon Garlic Salmon" 

    },
    { name: "Mediterranean Quinoa Salad"

     },
    { name: "Spicy Chicken Avocado Wrap" 

    },
    { name: "Sauteed Kale with Garlic and Lemon"

     },
    { name: "Creamy Spinach and Mushroom Omelette"

     },
    { name: "Greek Yogurt Parfait with Fresh Berries" 

    },
  ];
  

export default function Carousel() {
    const foods = dietFoods;
    return(
        <ul className="carousel-container">
         {foods.map((food, index) => (
            <li key={index}>
                 <MiniCard name={food.name} />
            </li>
         ))}
            
        </ul>
    )
}