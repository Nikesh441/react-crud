import React from "react";
import { Form } from "react-bootstrap";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Notfound from './components/pages/Notfound';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
function App() {
  return (
    	<Router>
    		<div className="App">
				      <Navbar />
				      <Switch>
				      		<Route exact path="/" component={Home}></Route>
				      		<Route exact path="/services" component={Services}></Route>
				      		<Route exact path="/about" component={About}></Route>
				      		<Route exact path="/contact" component={Contact}></Route>
							  <Route exact path="/users/add" component={AddUser}></Route>
							  <Route exact path="/users/edit/:id" component={EditUser}></Route>
							  <Route exact path="/users/:id" component={User} />
							   <Route component={Notfound} />
				      </Switch>
 		   </div>
    	</Router>
  );
}

export default App;
