import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
	const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);
	const logoutButtonHandler = () => {
		SetLoggedInUser('');
	};

	return (
		<header className="nav-header">
			<Navbar expand="lg">
				<Navbar.Brand>
					<Link to="/">
						<img src={logo} className="logoImg" alt="logo" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav ">
					<Nav className="ml-auto justify-content-center align-items-center ">
						<Link className="active" to="/" spy={true} smooth={true} delay={100} offset={0} duration={500}>
							Home
						</Link>
						<Link to="portfolio" spy={true} smooth={true} delay={100} offset={0} duration={500}>
							Our Portfolio
						</Link>
						<Link to="works" spy={true} smooth={true} delay={100} offset={0} duration={500}>
							Our Works
						</Link>
						<Link to="contact" spy={true} smooth={true} delay={100} offset={0} duration={500}>
							Contact Us
						</Link>
						{LoggedInUser.email && (
							<NavLink to="/dashboard/order" className="loginBtn">
								Dashboard
							</NavLink>
						)}
						{!LoggedInUser.email ? (
							<NavLink to="/login" className="loginBtn">
								Login
							</NavLink>
						) : (
							<button className="logout" onClick={logoutButtonHandler}>
								Logout
							</button>
						)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;