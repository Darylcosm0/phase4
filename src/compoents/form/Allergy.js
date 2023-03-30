import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Allergy(props) {
const [allergies,setAllergies] = useState([])
useEffect(() =>{
    axios.get("").then(r => setAllergies(r.data))
},[])
    return (
       allergies.map((allergy)=>{ 
        return <li>{allergy.name}</li>
       })
    );
}

export default Allergy;