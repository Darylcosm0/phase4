import React from 'react';
import { useState } from 'react';

function AddAllergy(props) {
    const [allergy,setAllergy] = useState({name:"",
user_id:user.id})
    function handleSubmit(e){
    e.preventDefault
    axios.post("",allergy)
    }
    return (
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter allergy here"
        onChange={(e) => {
         setAllergy({...allergy,name:e.target.value})   
        }}></input>
        <button type="submit">Add allergy</button>
     </form>
    );
}

export default AddAllergy;