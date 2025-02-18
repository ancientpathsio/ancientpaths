import React from 'react';
import { Link } from '@docusaurus/Link';

const NavbarLinkWithRefresh = ({ to, children }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default NavbarLinkWithRefresh;
