import React from 'react';
import { useState } from 'react';

function Search(props) {
    const [search,setSearch] = useState({search:""})
    useEffect(()=>{
     axios.get("")
    },[search])
    return (
      <form>
        <input type="text"
        onChange={(e)=>{
         setSearch({search:e.target.value})
        }}></input>
      </form>
    );
}

export default Search;