import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import { useState } from 'react';
import Home from './Components/HomePage/Home/Home';
import DashBoard from './Components/AdminPanel/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';





  export const UserContext = React.createContext();

function App() {
  const [ LoggedInUser, SetLoggedInUser ] = useState({});
  const [ selectedService, SetSelectedService ] = useState([]);
  const [reviews, SetReviews] = useState([]);
	const [services, SetServices] = useState([]);

  useEffect(() => {
    fetch("https://immense-escarpment-60935.herokuapp.com/allServices")
      .then(res => res.json())
      .then(getServices => {
        SetServices(getServices.slice(0, 6));
      });
  }, []);

  useEffect(() => {
	  fetch("https://immense-escarpment-60935.herokuapp.com/Reviews")
		.then(res => res.json())
		.then(getReviews => {
		  SetReviews(getReviews.slice(0, 6));
		});
	}, []);
  
  return (
    <UserContext.Provider
			value={{
				LoggedInUser,
				SetLoggedInUser,
				selectedService,
				SetSelectedService,
				reviews,
				SetReviews,
				services,
				SetServices
			}}
		>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<PrivateRoute path="/dashboard">
						<DashBoard />
					</PrivateRoute>
				</Switch>
			</Router>
		</UserContext.Provider>
  );
}

export default App;
