import React from "react"
import "../style.css"

function Nav(){
  return( 
  <div className="container" >
      <ul className="ul"> 
         <label className="logo">Logo</label>
         <a href="#"><li>Home</li></a>
         <a href="#"><li>About</li></a>
         <a href="#"><li>Gallery</li></a>
         <a href="#"><li>Contact us</li></a> 
      </ul>
  </div>
  );
}

export default Nav;