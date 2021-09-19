import React from "react"
import "../style.css"
import Card from "./Card"
import Display from "./Display"

function Sidebar(){
  return (
    <div >
    <header className="header" id="header">
        <div className="header_toggle"> 
        <i className='bx bx-menu' id="header-toggle"></i> </div>
        <div className="header_img"> 
        <img src="https://i.imgur.com/hczKIze.jpg" alt=""/> </div>
    </header>
    <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div> <a href="#" className="nav_logo"> 
            <i className='bx bx-layer nav_logo-icon'></i> 
            <span className="nav_logo-name">Logo</span> </a>
                <div className="nav_list"> <a href="#" className="nav_link active"> <i className='bx bx-grid-alt nav_icon'></i> <span className="nav_name">Dashboard</span> </a> <a href="#" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">Users</span> </a> <a href="#" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i> <span className="nav_name">Messages</span> </a> <a href="#" className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Bookmark</span> </a> <a href="#" className="nav_link"> <i className='bx bx-folder nav_icon'></i> <span className="nav_name">Files</span> </a> <a href="#" className="nav_link"> <i className='bx bx-bar-chart-alt-2 nav_icon'></i> <span className="nav_name">Stats</span> </a> </div>
            </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>
        </nav>
    </div>
   
    <div className="height-100 bg-light">
    <Display url="https://www.youtube.com/embed/h8lOrauHXJ0" />
    <div class="row row-cols-2 row-cols-md-6 g-4">
        
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    </div>

    </div>
  );
}


export default Sidebar;
