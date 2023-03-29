function Allergy() {
    return (  
        <section>
            <form>
                <div className='mb-3'>
                    <h3>Health Condition</h3>
                    <label className='form-label'>Do you have any allergies, if yes fill out the form below</label>
                    <input type='name' className='form-control' placeholder='List your allergy'></input>
                </div>
                <div className='mb-3 form-check'>
                    <p>If not check out the box</p>
                    <input type='checkbox' className='form-check-input'></input>
                    <label className='form-check-label' for='exampleCheck1'>skip</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                
            </form>
        </section>
    );
}

export default Allergy;