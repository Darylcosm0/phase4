/* eslint-disable jsx-a11y/img-redundant-alt */
function About() {
  const randomImageLink = "https://i.pinimg.com/564x/6f/26/89/6636799f86656341bb6c44c556ba1f30.jpg";
  
  return (
    <div className="about">
      <h2>About Our Recipe App</h2>
      <img src={randomImageLink} alt="A random food image" />
      <p>
        Our Recipe App is the ultimate cooking companion for food enthusiasts of all skill levels. With a vast collection of recipes from all over the world, you can easily search, browse, and save your favorite dishes, whether you're in the mood for a quick and easy meal or a more complex culinary creation.
      </p>
      <p>
        Our team of expert chefs and nutritionists works tirelessly to curate and develop new recipes every week, so you'll never run out of delicious meal ideas. We provide accurate and detailed information about the ingredients, nutritional values, and cooking instructions for each recipe to help you make informed decisions about what to cook and eat.
      </p>
      <p>
        Join our community of food lovers and discover new and exciting dishes to share with your family and friends. With our easy-to-use interface and user-friendly features, cooking has never been more fun or accessible. If you have any feedback or suggestions, please don't hesitate to reach out to us. We're committed to making your cooking experience as enjoyable and rewarding as possible.
      </p>
    </div>
  );
}

export default About;
