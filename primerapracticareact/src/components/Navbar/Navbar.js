import React from "react";
import NavbarElement from "../NavbarElements/NavbarElement";
import NavbarPicture from "../NavbarElements/NavbarPicture";


function Navbar(){
    let Elements = ["3+", "7"];
    return(
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="navbar-nav ml-auto">
                <NavbarElement Elements={Elements}/>
                <div className="topbar-divider d-none d-sm-block"></div>
                <NavbarPicture source="images\dummy-avatar.jpg" name="Walter White"/>
            </ul>
        </nav>
    )
}

export default Navbar;