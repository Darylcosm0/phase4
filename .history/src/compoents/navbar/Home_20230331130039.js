function Home() {
  return (
    <section>
      <div className="recipe-container">
        <div className="recipe-image">
          <img sr alt="Delicious Recipe" />
        </div>
        <div className="recipe-details">
          <h1>My Recipe App</h1>
          <p>Find delicious recipes for every occasion.</p>
          <button>Explore Recipes</button>
        </div>
      </div>
    </section>
  );
}

export default Home;