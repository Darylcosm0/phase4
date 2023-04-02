import React from 'react';

function RemoveAllergy(props) {
    return (
        <button
        onClick={()=>{
         axios.delete(`/${allergy.id}`)
        }}
        >X</button>
    );
}

export default RemoveAllergy;

