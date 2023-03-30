function Allergy() {

    //button logic

    return (  
        <section>
            <form>
                <div className="mb-3">
                 <h3>Final Step of Getting Started</h3>
                    <p>List your food allergies or restrictions, if non mark the box and submit the form</p>
                    <label htmlFor="allergy" className="form-label">
                        Your Allergy
                    </label>
                    <input type="name" className="form-control" id="inputAllergy" placeholder=""></input>
                </div>
                <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="inputAll"></input>
                        <label className="form-check-label" htmlFor="inputAll">skip</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
}

export default Allergy;