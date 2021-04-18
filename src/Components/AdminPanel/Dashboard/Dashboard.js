import { faCartPlus, faCommentDots, faHdd, faPlus, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import CreateReview from '../CreateReview/CreateReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageService from '../ManageService/ManageService';
import OrderList from '../OrderList/OrderList';
import ServiceAdd from '../ServiceAdd/ServiceAdd';
import ServiceList from '../ServiceList/ServiceList';
import ServicesList from '../ServicesList/ServicesList';
import './Dashboard.css';

const DashBoard = () => {
    const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);
    let history = useHistory();

	useEffect(() => {
		fetch(`https://immense-escarpment-60935.herokuapp.com/getAdmin?email=${LoggedInUser.email}`).then((res) => res.json()).then((data) => {
			console.log(data);
			if (data) {
				const newUser = { ...LoggedInUser };
				newUser.setUser = true;
                SetLoggedInUser(newUser);
                history.push('/dashboard/AllOrders');
			} else {
				const newUser = { ...LoggedInUser };
				newUser.setUser = false;
				SetLoggedInUser(newUser);
			}
		});
	}, []);

	const logoutHandle = () => {
		SetLoggedInUser('');
		history.push('/');
	};

	return (
		<div className="row dashboard">
			<SplitPane split="vertical">
				<div className="col-2 dashboardOptions d-flex flex-column justify-content-between">
					<div className="">
						<Link to="/">
							<img className="dashLogo" src={logo} alt="" />
						</Link>
						<div className="dashboardLink d-flex flex-column">
							{LoggedInUser.setUser ? (
								<div className="d-flex flex-column">
									<Link to="/dashboard/AllOrders">
										<FontAwesomeIcon icon={faHdd} /> Order List
									</Link>
									<Link to="/dashboard/serviceAdd">
										<FontAwesomeIcon icon={faPlus} /> Add Service
									</Link>
									<Link to="/dashboard/makeAdmin">
										<FontAwesomeIcon icon={faUserPlus} /> Make Admin
									</Link>
									<Link to="/dashboard/manageServices">
										<FontAwesomeIcon icon={faUserPlus} /> Manage Services
									</Link>
								</div>
							) : (
								<div className="d-flex flex-column">
									<Link to="/dashboard/order">
										<FontAwesomeIcon icon={faCartPlus} /> Order
									</Link>
									<Link to="/dashboard/service-list">
										<FontAwesomeIcon icon={faHdd} /> Service List
									</Link>
									<Link to="/dashboard/create-review">
										<FontAwesomeIcon icon={faCommentDots} /> Review
									</Link>
								</div>
							)}
						</div>
					</div>
					<div className="mt-auto pt-2">
						<p onClick={logoutHandle}>
							<FontAwesomeIcon icon={faSignOutAlt} /> Logout
						</p>
					</div>
				</div>

				<div className="col-10 dashboardRight pt-5">
					<div className="pageNameandUser d-flex justify-content-between px-5">
						<h6>{!LoggedInUser.setUser ? 'Order' : 'Admin Panel'}</h6>
						{
							<div className=" d-flex justify-content-between">
								<p className="lead">{LoggedInUser.name} </p>
								<img src={LoggedInUser.photoURL} alt="user" className="ml-3 pt-0 mt-0" width="35px" height="32px" />
							</div>
						}
					</div>
					<div className="dashboardDetails">
						<div className="componentList" style={{ padding: '3rem' }}>
							<Route path="/dashboard/order" component={OrderList} />
							<Route path="/dashboard/makeAdmin" component={MakeAdmin} />
							<Route path="/dashboard/service-list" component={ServiceList} />
							<Route path="/dashboard/create-review" component={CreateReview} />
                            <Route path='/dashboard/AllOrders' component={ServicesList} />
                            <Route path='/dashboard/serviceAdd' component={ServiceAdd} />
                            <Route path='/dashboard/manageService' component={ManageService} />
						</div>
					</div>
				</div>
			</SplitPane>
		</div>
	);
};

export default DashBoard;