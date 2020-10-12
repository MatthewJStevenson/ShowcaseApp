import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Main";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/ShoppingCart/Main";

export default function App() {

  	return (
		<Router>
			<div>
				<nav>
					<Nav/>
				</nav>
				<main>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/shoppingcart" component={ShoppingCart} />
					</Switch>
				</main>
				<footer>
					<Footer/>
				</footer>
			</div>
		</Router>
	);
}
