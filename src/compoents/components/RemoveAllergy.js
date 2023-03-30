import React from 'react';

function RemoveAllergy(props) {
    return (
        <button
        onClick={()=>{
         axios.delete(`/${allergy.id}`)
        }}
        >Remove Allergy</button>
    );
}

export default RemoveAllergy;

