import React, { useContext, useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServiceList = () => {
	const { LoggedInUser, SetLoggedInUser } = useContext(UserContext);
	const [ listOfService, SetListOfService ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			fetch(`https://immense-escarpment-60935.herokuapp.com/getMyOrder?email=${LoggedInUser.email}`)
				.then((res) => res.json())
				.then((getlistOfService) => {
					SetListOfService(getlistOfService);
					setLoading(false);
				});
		},
		[ LoggedInUser.email ]
	);

	return (
		<div className="serviceList d-flex flex-wrap">
			{loading ? (
				<p>Loading...</p>
			) : (
				listOfService.map((singleService) => (
					<Card
						key={singleService._id}
						className="review"
						style={{ width: '20rem', marginRight: '1rem', marginBottom: '1rem' }}
					>
						<Card.Body className="p-4">
							<div className="person">
								<div className="cardTop d-flex justify-content-between align-items-center">
									<Image
										style={{ width: '4rem' }}
										variant="top"
										src={singleService.img || `data:image/png;base64,${singleService.image.img}`}
										roundedCircle
									/>
									<p
										style={{
											color: '#009444',
											background: '#C6FFE0',
											padding: '.6rem 2rem'
										}}
									>
										{singleService.status}
									</p>
								</div>
								<div className="personDetails my-3">
									<h5 className="m-0">{singleService.name}</h5>
								</div>
							</div>
							<Card.Text style={{ color: '#707070' }}>{singleService.details}</Card.Text>
						</Card.Body>
					</Card>
				))
			)}

			{}
			{!listOfService.length && (
        <Link to='/'>
				<h3 className="p-3">
					Your cart is empty. Keep Added Service.
				</h3>
        </Link>
			)}
		</div>
	);
};

export default ServiceList;