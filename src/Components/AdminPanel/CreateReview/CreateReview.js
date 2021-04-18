import React, { useContext, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { UserContext } from '../../../App';
import './CreateReview.css';

const CreateReview = () => {
	const { LoggedInUser, SetLoggedInUser, reviews, SetReviews } = useContext(UserContext);

	const [ newReview, SetNewReview ] = useState({
		img: `${LoggedInUser.photoURL}`,
		name: `${LoggedInUser.name}`,
		designation: '',
		review: '',
		success: '',
		error: ''
	});

	const inputHandler = (e) => {
		e.preventDefault();
		const review = { ...newReview };
		review[e.target.name] = e.target.value;
		SetNewReview(review);
	};

	const formRef = useRef(null);

	const handleReviewSubmit = (event) => {

		SetReviews(reviews => [...reviews, newReview]);
		
		event.preventDefault();
		fetch('https://immense-escarpment-60935.herokuapp.com/addSingleReview', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newReview)
		})
			.then((result) => {
				const updateReview = { ...newReview };
				updateReview.success = 'Review Create Successfully';
				updateReview.error = '';
				SetNewReview(updateReview);
				result.json();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				const errUpdate = { ...newReview };
				errUpdate.success = '';
				errUpdate.error = 'something wrong happened';
				SetNewReview(errUpdate);
			});
		formRef.current.reset();
	};

	return (
		<div className="reviewForm">
			{newReview.success && <p className="text-success">{newReview.success}</p>}
			{newReview.error && <p className="text-danger">{newReview.error}</p>}
			<Form onSubmit={handleReviewSubmit} ref={formRef}>
				<Form.Group controlId="formBasicText">
					<Form.Control 
					type="text" 
					name="name" 
					onBlur={inputHandler} 
					defaultValue={LoggedInUser.name}
					required={true}
					placeholder="Your Name" />
				</Form.Group>
				<Form.Group controlId="formBasicText">
					<Form.Control
						type="text"
						onBlur={inputHandler}
						name="designation"
						placeholder="Company name / Designation "
						required={true}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicText">
					<Form.Control
						as="textarea"
						onBlur={inputHandler}
						name="review"
						placeholder="Description"
						rows="4"
						required={true}
					/>
				</Form.Group>
				<button className="submitContact" variant="primary" type="submit">
					Send
				</button>
			</Form>
		</div>
	);
};

export default CreateReview;