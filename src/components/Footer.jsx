import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Sabir Hussain Teli</p>
    </footer>
  );
}

export default Footer;
