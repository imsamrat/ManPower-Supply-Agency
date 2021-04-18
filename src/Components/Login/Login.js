import firebase from 'firebase/app';
import 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from './firebaseConfig';
import icon from '../../images/google.png';
import logo from '../../images/logo.png';
import './Login.css';

const Login = () => {
  const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);

  const [alert, setAlert] = useState({
		success: false,
		error: "",
  });
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const location = useLocation();
  const history = useHistory();
  let { from } = location.state || { from: { pathname: '/' } };

  // Google Sign in function

  const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				const { displayName, email, photoURL } = result.user;
				const newUser = {
					isLoggedIn: true,
					photoURL: photoURL,
					name: displayName,
					email: email,
				};
				SetLoggedInUser(newUser);
				history.replace(from);

				const newAlert = { ...alert };
				newAlert.success = true;
				newAlert.error = "";
				setAlert(newAlert);
			})
			.catch((error) => {
				const newAlert = { ...alert };
				newAlert.error = error.message;
				setAlert(newAlert);
			});
	};


  return (
    <div className='loginPage'>
      <Link to='/'>
        <img style={{ width: '10rem', margin: '0 auto' }} src={logo} alt='' />
      </Link>
      <div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className="vn-login-register login p-md-5 p-3">
				{alert.error.length > 0 && <div className="alert alert-danger text-center">{alert.error}</div>}

				<h4 className="mb-5">Login With</h4>
				<button className="btn btn-outline-secondary social-login" onClick={handleGoogleSignIn}>
					<img src={icon} alt="logo" width="30px"/>
					Continue with Google
				</button>
				<h5 className="mt-3">
					<span>Don’t have an account?</span>
					<Link to="/login">Create an account</Link>
				</h5>
			</div>
		</div>
    </div>
  );
};

export default Login;