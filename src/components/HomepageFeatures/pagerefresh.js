import React from 'react';
import { Link } from '@docusaurus/Link';

const NavbarLinkWithRefresh = ({ to, children }) => {
  const handleClick = (event) => {
    event.preventDefault();
    // Custom refresh logic here (if needed)
    // E.g., force the Docusaurus app to re-render
    window.location.href = to;
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default NavbarLinkWithRefresh;
