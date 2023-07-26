import { useState } from 'react'

const AddFoodForm = () => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)
    const handleNameInput = event => 
        setName(event.target.value)
   const handleImageInput = event => 
        setImage(event.target.value)
   const handleCaloriesInput = event => 
        setCalories(event.target.value)
   const handleServingsInput = event => 
        setServings(event.target.value)
        const handleSubmit = event =>{
            event.preventDefault();
            const addFood = {name, image, calories, servings}
        }
    return(
        <div>
            <h1>Add Food Entry</h1>
            <form onSubmit = {handleSubmit}>
                <label>
                    Name:</label>
                    <input type='text' name='name' value={name} onChange={handleNameInput}  />
                
                <label>
                    Image:</label>
                    <input type='text' name='image' value={image} onChange={handleImageInput} />
                
                <label>
                    Calories: </label>
                    <input type='number' name='calories' value={calories} onChange={handleCaloriesInput} />
               
                <label>
                    Servings:</label>
                    <input type='number' name='servings' value={servings} onChange={handleServingsInput}/>
                
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default AddFoodForm;