import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Create() {
    
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const [list, setList] = useState('');
    const [instuction, setInstuction] = useState('');
    const [unit, setUnit] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = { title, image, body, category, list, instuction, unit };

        setIsLoading(true);

       fetch('http://localhost:8000/recipes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipe)
       }).then(() => {
        console.log('new recipe added successfully')
        setIsLoading(false);
        history.push('/recipes');
       })
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
                    <p>Add the image url</p>
                        <input
                            type="image"
                            required
                            src={image}
                            alt={image.text}
                            onClick={(e) => setImage(e.target.src)}/>
                    <label>Cuisine</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                                  <option value='African cuisine'>African cuisine</option>
                                  <option value='Asian cuisine'>Asian cuisine</option>
                                  <option value='American cuisine'>American cuisine</option>
                                  <option value='Caribbean cuisine'>Caribbean cuisine</option>
                                  <option value='European cuisine'>European cuisine</option>
                                  <option value='Indian cuisine'>Indian cuisinee</option>
                                  <option value='Oceanic cuisine'>Oceanic cuisine</option>
                                  <option value='Vegetarian cuisine'>Vegetarian cuisine</option>
                                  <option value='Others'>Others</option>
                         </select>
                         <label>Recipe Description</label>
                            <textarea 
                                required
                                value={body}
                                onChange={(e) => setBody(e.target.value)}>
                            </textarea>
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
                        { !isLoading && <button type="submit">Add Recipe</button>}
                        { isLoading && <button disabled>Adding recipe...</button>}
            </form>
        </div>
    );
}

export default Create;