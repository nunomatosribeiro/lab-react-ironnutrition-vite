import "./App.css";
import React, {useState} from 'react';
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const { name, calories, image, servings } = foods;
  
  const deleteFood = (foodId) => {
    
    console.log("delete this person", foodId);
    const deleteFoods = foods.filter((filterFood) =>{
if(filterFood.id !== foodId){
    return filterFood
}
    })
    console.log("filtered contacts", deleteFoods);
    setFoods(deleteFoods)
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm />
      {foods.map((oneFood) =>{
  return (
    <div>
  <p>{oneFood.name}</p>

  <img src={oneFood.image}
  className='foodImage'
  alt='foodImage' />

  <p>Calories: {oneFood.calories}</p>
  <p>Servings: {oneFood.servings}</p>

  <p>
    <b>Total Calories: {oneFood.servings * oneFood.calories}
     </b> kcal
  </p>
  {<button onClick={() => {
deleteFood(oneFood.id)
}}>Delete</button>}
</div>
  )
})} 
    </div>
  );
}

export default App;