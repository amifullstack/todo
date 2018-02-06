import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { username } = props;
  return(
    <header>
      <h1>Music- List</h1>
      <div className="user-menu">
        <h2>Welcome { username }</h2>
        <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/account/profile/xyz">Profile</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;