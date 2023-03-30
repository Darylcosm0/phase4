import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Sort(props) {
 const [sort,setSort] = useState("new")
 useEffect(()=>{
  axios.get(`${sort}`).then(r => console.log(r.data))
 },[sort])

    return (
       <div>
        <select onChange={(e) =>{setSort(e.target.value)}}>
            <option value="old">Oldest</option>
            <option value="new">Newest</option>
        </select>
       </div>
    );
}

export default Sort;