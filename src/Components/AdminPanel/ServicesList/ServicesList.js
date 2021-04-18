import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SingleServiceList from '../SingleServiceList/SingleServiceList';

const ServicesList = () => {
	const [ listOfServices, SetListOfServices ] = useState([]);

	useEffect(() => {
		fetch('https://immense-escarpment-60935.herokuapp.com/getAllOrder')
			.then((res) => res.json())
			.then((getlistOfServices) => SetListOfServices(getlistOfServices));
	}, []);

	return (
		<div className="serviceListTable" style={{ backgroundColor: 'white' }}>
			<Table responsive="lg" borderless>
				<thead className="tableHead">
					<tr>
						<th>Name</th>
						<th>Email ID</th>
						<th>Service </th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{listOfServices.map((services) => <SingleServiceList key={services._id} services={services} />)}
				</tbody>
			</Table>
			{listOfServices.length === 0 && <p>Loading...</p> }
		</div>
	);
};

export default ServicesList;