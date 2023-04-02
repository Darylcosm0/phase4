import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignUp from "../form/Sigin-up";

const Profile = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);


    const handleLogout = () => {
      setIsLoading(true);

        console.log('Logged out successfully')
        setIsLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
      return <SignUp />;
    }

    const handleDeleteAccount = () => {
        setIsLoading(true);

        fetch('http://localhost:8000/recipes/id', {
            method: 'DELETE',
        }).then(() => {
            console.log('Account deleted successfully')
            setIsLoading(false);
            setSubmitted(true);
           })
    };

    if (submitted) {
      return <SignUp />;
    }

  return (
    <section className="content">

      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-profile-description">
              <h1 style={{ fontSize: "2.6em" }}>Hello, Welcome to Your Profile</h1>
              <p className="home-about-body">
                Our app is the perfect place to find and save your favorite recipes. We have a wide
                variety of recipes to suit every taste and dietary requirement. From easy weeknight
                dinners to fancy desserts, we've got you covered.
                <br />
                <br />
                We are always updating our app with new and exciting recipes, so make sure to check
                back often.
                <i>
                  <b> Thank you for choosing our recipe app and happy cooking! </b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <div className="card">
                <img
                  src="https://www.shutterstock.com/shutterstock/photos/1435160735/display_1500/stock-vector-kitchen-chef-design-logo-template-1435160735.jpg"
                  className="img-fluid"
                  alt="avatar"
                />
                { !isLoading && <button className="btn btn-outline-warning" onClick={handleLogout}>
                  Logout
                </button>}
                { isLoading && <button className="btn btn-outline-warning" disabled>
                  logging out....
                </button>}
                <Link to="/update/user">
                  <button className="btn btn-outline-success">Update Account</button>
                </Link>
                <span></span>
                { !isLoading && <button className="btn btn-outline-danger" onClick={handleDeleteAccount}>
                  Delete Account
                </button>}
                { isLoading && <button className="btn btn-outline-danger" disabled>
                  Delete Account
                </button>}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Profile;
