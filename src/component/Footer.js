import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Fitness App. All rights reserved.</p>
      <ul style={footerLinks}>
        <li><a href="/about" style={linkStyle}>About Us</a></li>
        <li><a href="/contact" style={linkStyle}>Contact</a></li>
        <li><a href="/privacy" style={linkStyle}>Privacy Policy</a></li>
      </ul>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#282c34",
  color: "white",
};

const footerLinks = {
  listStyle: "none",
  padding: 0,
  margin: "10px 0",
  display: "flex",
  justifyContent: "center",
  gap: "15px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Footer;
