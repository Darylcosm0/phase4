function Home() {
  const randomImageLink = "https://i.pinimg.com/564x/8a/11/01/8a1101c272429800f502b98600c95e34.jpg";
  
  return (
    <div className="section-a">
      <div className="container">
        {/* Recipe Image */}
        <div className="image-kom">
          <img src={randomImageLink} alt="" />
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
            Welcome to our online recipe platform! Discover delicious recipes from around the world and cook amazing dishes for your family and friends.
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
              <p>Start your meal with these delicious finger foods and small bites.</p>
            </div>
            <div className="column-2">
              {/* Column component */}
              <h3>Main Dishes</h3>
              <p>Find your next favorite lunch or dinner recipe here.</p>
            </div>
            <div className="column-3">
              {/* Column component */}
              <h3>Desserts</h3>
              <p>Satisfy your sweet tooth with our selection of desserts and treats.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
