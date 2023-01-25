import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/profile">PROFILE</a>
          </li>
          <li>
            <a href="/posts">POSTS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
