import React from 'react';


const Navbar = () => {
 

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

    <div className="container-fluid">
  {/* Logo */}
  <a className="navbar-brand navbar-logo" href="#">
    {/* Navigation Bar */}
  </a>
  {/* Hamburger menu button */}
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* Navigation links */}
  <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">
          Log In
        </a>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Manage Bookings
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a className="dropdown-item" href="/">
              View Rewards
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/rooms">
              Bookings
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
        </ul>
      </li>
    </ul>
  </div>
  {/* Search form */}
  <form className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success" type="submit">
      Book Now
    </button>
  </form>
</div>



  
</nav>
    
   
    </>
  );
};

export default Navbar;
