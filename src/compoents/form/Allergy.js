import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function Allergy() {

  const [details, setDetails] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/persons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({  }),
      });
      if (response.ok) {
        history.push('../navbar/Navigation.js');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (  
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h3>Final Step of Getting Started</h3>
          <p>List your food allergies or restrictions, if non mark the box and submit the form</p>
          <label htmlFor="allergy" className="form-label">
            Your Allergies
          </label>
          <input 
            type="name" 
            className="form-control" 
            id="inputAllergy" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="inputAll" />
          <label className="form-check-label" htmlFor="inputAll">skip</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  );
}

export default Allergy;
