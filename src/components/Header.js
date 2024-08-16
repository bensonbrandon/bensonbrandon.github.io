import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Dr. Brandon Benson</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
