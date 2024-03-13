import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img1 from "../components/images/img1.jpg";
import img2 from "../components/images/img2.jpg";
import "@fortawesome/fontawesome-free/css/all.css";
import delhiImage from "../components/images/delhiImage.jpg";
import mumbaiImage from "../components/images/mumbaiImage.jpg";
import bangaloreImage from "../components/images/bangaloreImage.jpg";
import chennaiImage from "../components/images/chennaiImage.jpg";
import kolkataImage from "../components/images/kolkataImage.jpg";

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">TailorCut</div>
        <div className="navbar-links">
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
      <div className="hero-section">
        <img src={img1} alt="Tailor" className="tailor-image" />
        <div className="slogan">
          <h2>Tailored Just for You</h2>
          <h3>Where Fashion Meets Your Imagination</h3>
          <Link to="/bregister" className="merchant-link">
            Become a Merchant
          </Link>
        </div>
      </div>
      <div className="second-section-content">
        <div className="second-section-slogan">
          <h2>Experience Innovation</h2>
          <h3>Discover the Future of Fashion</h3>
          <a href="/demorequest" className="request-demo-link">
            Request Demo
          </a>
        </div>
        <img src={img2} alt="Tailor" className="second-section-image" />
      </div>
      <div className="service-heading">
        <h1 className="service-head">Service</h1>
      </div>
      <div className="service-section">
        <div className="service-card">
          <h2>Cloud Database</h2>
          <p>
            Manage your data efficiently with our cloud-based database
            solutions.
          </p>
        </div>
        <div className="service-card">
          <h2>Body Measurement Storage</h2>
          <p>
            Store and access your body measurements securely for quick and
            accurate orders.
          </p>
        </div>
        <div className="service-card">
          <h2>Built-in Delivery Service</h2>
          <p>
            Enjoy seamless delivery services integrated within the TailorCut
            platform.
          </p>
        </div>
        <div className="service-card">
          <h2>Style Recommendations</h2>
          <p>
            Get personalized style recommendations based on your preferences and
            previous orders.
          </p>
        </div>
        <div className="service-card">
          <h2>Custom Design Consultation</h2>
          <p>
            Consult with our expert designers to create custom-tailored garments
            that match your unique style.
          </p>
        </div>
        <div className="service-card">
          <h2>Tailoring Consultation</h2>
          <p>
            Receive personalized advice and guidance from experienced tailors to
            meet your specific tailoring needs.
          </p>
        </div>
      </div>
      {/* Branches */}
      <div className="branches-container">
        <h1 className="branches-heading">Our Branches</h1>
        <div className="branch-cardsection">
          <div className="branch-card">
            <img src={delhiImage} alt="Delhi" className="branch-image" />
            <h2>Delhi Branch</h2>
            <p>Location: Address, Delhi</p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Manager: John Doe</p>
          </div>
          <div className="branch-card">
            <img src={mumbaiImage} alt="Mumbai" className="branch-image" />
            <h2>Mumbai Branch</h2>
            <p>Location: Address, Mumbai</p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Manager: Jane Doe</p>
          </div>
          <div className="branch-card">
            <img
              src={bangaloreImage}
              alt="Bangalore"
              className="branch-image"
            />
            <h2>Bangalore Branch</h2>
            <p>Location: Address, Bangalore</p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Manager: Alice Smith</p>
          </div>
          <div className="branch-card">
            <img src={chennaiImage} alt="Chennai" className="branch-image" />
            <h2>Chennai Branch</h2>
            <p>Location: Address, Chennai</p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Manager: Bob Johnson</p>
          </div>
          <div className="branch-card">
            <img src={kolkataImage} alt="Kolkata" className="branch-image" />
            <h2>Kolkata Branch</h2>
            <p>Location: Address, Kolkata</p>
            <p>Phone: +91 XXXXXXXXXX</p>
            <p>Manager: Emily Wilson</p>
          </div>
        </div>
      </div>

      {/* Contact Us section */}
      <div className="contact-us-section">
        <img src={delhiImage} alt="Contact Us" className="contact-image" />
        <form className="contact-form" action="/submit-contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input type="text" id="country" name="country" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="about-page">
        <div className="about-content">
          <h1>About TailorCut</h1>
          <p>
            TailorCut is a leading provider of innovative fashion technology
            solutions. We specialize in developing cutting-edge software and
            tools tailored to meet the needs of modern fashion businesses. Our
            mission is to revolutionize the fashion industry by empowering
            designers, tailors, and merchants with the tools they need to
            succeed in today's competitive market.
          </p>
          <p>
            At TailorCut, we believe in the power of technology to transform the
            way we create, design, and sell clothing. Our platform offers a
            comprehensive suite of features, including cloud-based databases,
            body measurement storage, built-in delivery services, style
            recommendations, custom design consultations, and tailoring
            consultations. Whether you're a small boutique or a large fashion
            brand, TailorCut has the solutions you need to streamline your
            operations and delight your customers.
          </p>
          <p>
            Join us on our journey to redefine the future of fashion. Follow us
            on social media to stay updated on the latest news, events, and
            product releases. Together, let's shape the future of fashion with
            TailorCut.
          </p>
        </div>

        <div className="our-team1">
          <h2>Our Team</h2>
          <div className="our-team">
            <div className="team-member">
              <img src={delhiImage} alt="CEO" className="team-member-image" />
              <h3>CEO</h3>
              <p>John Doe</p>
            </div>
            <div className="team-member">
              <img
                src={kolkataImage}
                alt="Manager"
                className="team-member-image"
              />
              <h3>Manager</h3>
              <p>Jane Smith</p>
            </div>
            <div className="team-member">
              <img
                src={kolkataImage}
                alt="Manager"
                className="team-member-image"
              />
              <h3>Lead Designer</h3>
              <p>Alice Johnson</p>
            </div>
            <div className="team-member">
              <img
                src={kolkataImage}
                alt="Manager"
                className="team-member-image"
              />
              <h3>Lead Designer</h3>
              <p>Alice Johnson</p>
            </div>
          </div>
        </div>

        <div className="social-links">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
