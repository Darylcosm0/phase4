import React, {useState} from "react";

function Create() {
    
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const [list, setList] = useState('');
    const [instuction, setInstuction] = useState('');
    const [unit, setUnit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (  
        <div className='create'>
            <h1>Add a New Recipe</h1>
                 <form onSubmit={handleSubmit}>
                    <label>Recipe Name</label>
                         <input 
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    <label>Meal Image</label>
                        <input
                            type="image"
                            required
                            src={image}
                            alt="Picture of a meal"
                            onClick={(e) => setImage(e.target.src)}/>
                    <label>Recipe Description</label>
                        <textarea 
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}>
                        </textarea>
                    <label>Cuisine</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                                  <option value='Drink'>Drinks</option>
                                  <option value='Meal'>Meals</option>
                         </select>
                    <label>Ingredients and Mesurement</label>
                        <textarea
                            required
                            value={list}
                            onChange={(e) => setList(e.target.value)}>
                        </textarea>
                    <label>How to Prepare</label>
                        <textarea
                            required
                            value={instuction}
                            onChange={(e) => setInstuction(e.target.value)}>
                        </textarea>
                    <label>Total Calories</label>
                        <input
                            type="number"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}>
                        </input>
                        <button type="submit">Add Recipe</button>
            </form>
        </div>
    );
}

export default Create;