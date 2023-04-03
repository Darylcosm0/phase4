function Home() {
  return (
    <div className="section-a">
      <div className="container">
        {/* Recipe Video */}
        <div className="video-kom"></div>

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
            Welcome to our online recipe platform! Discover delicious recipes
            from around the world and cook amazing dishes for your family and
            friends.
          </p>
          {/* Empty paragraph component */}
          <p className="number"></p>
          {/* Horizontal line component */}
          <hr width="50%" />
          {/* Column grid component */}
          <div className="column-grid">
            <div className="column-1">
              {/* Column component */}

              <iframe
                src="https://assets.pinterest.com/ext/embed.html?id=579838520787778455"
                height="900"
                width="450"
                
              ></iframe>

              <h3>Appetizers</h3>
              <p>
                Start your meal with these delicious finger foods and small
                bites.
              </p>
            </div>
            <div className="column-2">
              {/* Column component */}
              <h3>Main Dishes</h3>
              <p>Find your next favorite lunch or dinner recipe here.</p>
            </div>
            <div className="column-3">
              {/* Column component */}
              <h3>Desserts</h3>
              <p>
                Satisfy your sweet tooth with our selection of desserts and
                treats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
