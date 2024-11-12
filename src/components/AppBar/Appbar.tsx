import React from 'react';
import {Link} from 'react-router-dom';

const Appbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      <div className="container-fluid">
        <span className="navbar-brand">
          <Link to="/" className="nav-link">TV Show</Link>
        </span>
      </div>
    </nav>
  );
};

export default Appbar;