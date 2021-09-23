import React from 'react';
import {Link,NavLink} from'react-router-dom';
const Navbar= () =>{
	return(
			<div className="">
  		 <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      	<NavLink className="classNamer-brand" exact to="/">Navbar</NavLink>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
         <div className="navbar-nav">
            <NavLink className="nav-item nav-link"exact to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" exact to="/services">Services</NavLink>
            <NavLink className="nav-item nav-link" exact to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" exact to="/contact">Contact</NavLink>
            
            <Link className="btn btn-danger" exact to="/users/add">Add User</Link>
         </div>
         
      </div>
      
   </nav>
</div>

		)
}
export default Navbar;