function Home() {
  return (
    <div className="section-a">
      <div className="container">
        {/* Image component */}
        <div className="image-kom">
          <img src={'https://www.google.com/url?sa=i&url=h'} alt="img" />
        </div>

        <div className="text">
          {/* Emojis */}
          👨‍🍳 🍽️
          {/* Header component */}
          <h1 className="mega-font">
            Hello
            <span> Foodies</span>
          </h1>
          {/* Paragraph component */}
          <p style={{ fontSize: "30px" }}>
            An online platform to discover delicious recipes. A collection of recipes from around the world.
          </p>

          {/* Empty paragraph component */}
          <p className="number"></p>
          {/* Horizontal line component */}
          <hr width="50%" />
          
          {/* Column grid component */}
          <div className="column-grid">
            <div className="column-1">
              {/* Column component */}
              <h3>Appetizers</h3>
              <p>Starters and finger foods</p>
            </div>
            <div className="column-2">
              {/* Column component */}
              <h3>Main Dishes</h3>
              <p>Hearty meals for lunch or dinner</p>
            </div>
            <div className="column-3">
              {/* Column component */}
              <h3>Desserts</h3>
              <p>Sweet treats to satisfy your cravings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
