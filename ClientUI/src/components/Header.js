import './componentsstyle.css'
import {NavLink } from "react-router-dom";
import { useRef, useState } from 'react';

function Header(){
const [mobileNavOpen, setMobileNavOpen] = useState()
const primaryNavRef = useRef(null);

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

function handleSideBarClick (event){
  const boxDemention =  event.target.getBoundingClientRect()
  const headerRect = primaryNavRef.current.getBoundingClientRect();

  console.log(event.clientX - headerRect.left)
  if (boxDemention.x === 0){
    setMobileNavOpen(false)
  }
}
function handleClick(){
  setMobileNavOpen(prev => !prev)
}
  return (
    <header onClick={handleSideBarClick} className='primary-header flex'>
      

      <button onClick={handleClick} className='mobile-nav-toggle' aria-controls='primary-navigation' aria-expanded = {mobileNavOpen}>
        <span className='sr-only'></span>
      </button>
      <NavLink className='logo' to="home">
        AsFlowers
      </NavLink>
      <nav className="nav-list flex">
      
        <ul id = "primary-navigation" ref={primaryNavRef} data-visible = {mobileNavOpen} className='primary-navigation flex'>
          <li className="left-header">
            <NavLink to="home">Home</NavLink>
          </li>
          {/* <li className="middle-header">
            <Link to="/about">About</Link>
            <Link to="/Flowers">Flowers</Link>
          </li> */}
          {/* <li className="right-header">
            <div className='shopping-cart-icon-container'>
              <img className='shopping-cart-icon' src={shopping_cart} alt = "fail load cart"/>
            </div>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
export default Header;