import React from 'react';

const Header = (props) => {
  const { username } = props;
  return(
    <header>
      <h1>Music- List</h1>
      <div className="user-menu">
        <h2>Welcome { username }</h2>
      </div>
    </header>
  )
}

export default Header;