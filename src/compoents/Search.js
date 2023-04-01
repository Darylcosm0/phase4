const Search = () => {
    return (  
        <section>
            <form className="d-flex" role="search">
                <input className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button type="submit" className="btn btn-outline-success">Search</button>
            </form>
        </section>
    );
}
 
export default Search;
