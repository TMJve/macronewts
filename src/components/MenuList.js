import React from "react";
import MenuCard from "../components/MenuCard";
// import fooddummy from "./src/photos/fooddummy1.jpg"; bermasalah tai

const dietFoods = [
    { 
        // img : fooddummy,
        name: "Chiken Avocado salad" ,
        kalori : "476 Kcal"
    },
    { name: "Fresh Tomato & Fruit Salad",
    kalori : "310 Kcal"

     },
    { name: "Blueberry Granola Yogurt" ,
    kalori : "297 Kcal"

    },
    { name: "Avocado and Cheese Salad",
    kalori : "415 Kcal"

     },
    { name: "Freshly made bibimbap",
    kalori : "512 Kcal"

     },
    { name: "Low Calorie Rice Bowl" ,
    kalori : "350 Kcal"

    },
    { name: "Chiken Spicy salad" ,
    kalori : "367 Kcal"

    },
    { name: "Broccoli and Avocado Rice" ,
    kalori : "420 Kcal"

    },
    { name: "Baked Tofu Rice" ,
    kalori : "445 Kcal"

    },
    { name: "Baked Chicken and Corn Rice" ,
    kalori : "460 Kcal"

    },
    { name: "Roast Chicken Salad" ,
    kalori : "510 Kcal"

    },
    { name: "PanFried Salmon Salad" ,
    kalori : "457 Kcal"

    }
  ];
  

export default function MenuList() {
    const foods = dietFoods;
    return(
        <div className="menu-container">
            <ul className="ulmenu">
            {foods.map((food, index) => (
            <li key={index}>
                 <MenuCard name={food.name} img={food.img} kalori={food.kalori}/>
            </li>
                ) )}
            </ul>
        </div>
        
    )
}