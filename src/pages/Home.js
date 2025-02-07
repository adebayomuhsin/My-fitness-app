
import React from "react";

function Home() {
  const heroSectionStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    backgroundImage:
      "url('https://media.istockphoto.com/id/2153823097/photo/cheerful-athletic-couple-jogging-through-the-park.jpg?s=1024x1024&w=is&k=20&c=UF2qKPawKinDKsVYhPHSDCdmUjAtJ6SJOjAL6kBkb0Y=')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const ctaButtonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const featuresSectionStyle = {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  };

  const featuresGridStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const featureCardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "250px",
  };

  const ctaSectionStyle = {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#007BFF",
    color: "white",
  };

  const aboutSectionStyle = {
    padding: "50px 20px",
    textAlign: "center",
  };

  const testimonialsSectionStyle = {
    padding: "50px 20px",
    backgroundColor: "#f3f3f3",
    textAlign: "center",
  };

  const testimonialCardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px auto",
    maxWidth: "600px",
  };

  const blogPreviewSectionStyle = {
    padding: "50px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <h1>Welcome to Fitness App</h1>
        <p>Your ultimate companion for a healthier and stronger you!</p>
        <button style={ctaButtonStyle}>Get Started</button>
      </section>

      {/* About Section */}
      <section style={aboutSectionStyle}>
        <h2>About Fitness App</h2>
        <p>
          At Fitness App, we believe in empowering individuals to live their
          healthiest lives. With a combination of advanced technology and
          human expertise, we provide an unmatched fitness experience. Whether
          you're looking to lose weight, build muscle, or simply maintain a
          healthy lifestyle, we're here to guide you every step of the way.
        </p>
      </section>

      {/* Testimonials Section */}
      <section style={testimonialsSectionStyle}>
        <h2>What Our Users Are Saying</h2>
        <div style={testimonialCardStyle}>
          <p>
            "Fitness App completely transformed my approach to health and
            fitness. I feel stronger and more confident than ever!"
          </p>
          <p>- Sarah W.</p>
        </div>
        <div style={testimonialCardStyle}>
          <p>
            "The personalized plans are fantastic. I've achieved my weight loss
            goals in just 3 months!"
          </p>
          <p>- James T.</p>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section style={blogPreviewSectionStyle}>
        <h2>From Our Blog</h2>
        <div style={featuresGridStyle}>
          <div style={featureCardStyle}>
            <h3>10 Tips for Staying Active During Winter</h3>
            <p>
              Discover ways to keep moving and maintain your fitness routine
              even during the colder months.
            </p>
          </div>
          <div style={featureCardStyle}>
            <h3>Top 5 Superfoods for Muscle Growth</h3>
            <p>
              Learn about the nutrient-packed foods that can help you build and
              sustain muscle.
            </p>
          </div>
          <div style={featureCardStyle}>
            <h3>How to Stay Motivated on Your Fitness Journey</h3>
            <p>
              Expert tips to keep you inspired and committed to your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={ctaSectionStyle}>
        <h2>Ready to Transform Your Life?</h2>
        <p>Join thousands of others achieving their fitness goals with Fitness App.</p>
        <button style={ctaButtonStyle}>Start Now</button>
      </section>
    </div>
  );
}

export default Home;









