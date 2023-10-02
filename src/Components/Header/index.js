import React from 'react';
import './Style.css';
import LOGO from '../Assests/logo.jpeg';

function Header() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#000"}}>
  <div className="container-fluid  Cont" > 
    <a className="navbar-brand "href="#">
        <img  src={LOGO}  className='logo'/>
    </a>
    <button
      className="navbar-toggler bg-light"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" style={{color:"#000"}}  />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <center>
      <ul className="navbar-nav mx-5 mb-4 mb-lg-0 " style={{fontSize:23}}>
        <li className="nav-item">
          <a className="nav-link active" 
          aria-current="page" 
          href="#"
          style={{color:"#fff",paddingLeft:"10px"}}
          >
            Platform
          </a> 
        </li>

        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff",paddingLeft:"20px"}}
          >
            Solutions
          </a>
       
        </li>
        
        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff",paddingLeft:"20px"}}
          >
            Resources
          </a>
        </li>
        <li className="nav-item ">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{color:"#fff",paddingLeft:"20px"}}
          >
            Pricing
          </a>
       
        </li>

        <li className="nav-item">
          <a className="nav-link active"
        aria-current="page"
        href="#"
        style={{color:"#fff",paddingLeft:"20px"}}
        >
            Contact Sales
          </a>
        </li>
      </ul>
    </center>
      <form className="d-flex mx-5 " role="search">
      <div className='btnn'>
      <button className="btn btn-outline-secondary mx-1" type="submit" style={{color:"white",fontSize:"18px",fontWeight:"bold"}}>
         Log In
        </button>
        <button className="btn btn-light mx-1" type="submit" style={{color:"black",fontSize:"18px",fontWeight:"bold"}}>
         Create a card
        </button>
        </div>
      </form>
    </div>
  </div>
  
</nav>
    
    
    </>
  )
}

export default Header