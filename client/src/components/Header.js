import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>My App</h1>
      <Link to="/import">Import From YouTube</Link>
    </header>
  );
};

export default Header;