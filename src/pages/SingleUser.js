import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Map from '../components/Map';
import defaultImage from '../assets/default.png';

const SingleUser = (props) => {
	const history = useHistory();

	const [person, setPerson] = useState(props.location.person);

	const sendEmail = () => {
		document.location = `mailto:${person.email}`;
	};

	return (
		<section className="single-user-container">
			<div className="header">
				<h1>User details</h1>
			</div>
			<div className="user-details">
				<div className="img-container">
					<img
						src={person.picture || defaultImage}
						alt={person.name}
					/>
				</div>
				<div className="details">
					<h4>Name: </h4>
					<p>
						{person.first}.{person.last}
					</p>
				</div>
				<div className="details" id="email" onClick={() => sendEmail()}>
					<h4>Email: </h4>
					<p>{person.email}</p>
				</div>
				<div className="details">
					<h4>Gender: </h4>
					<p>{person.gender}</p>
				</div>
				<div className="details">
					<h4>Age: </h4>
					<p>{person.age}</p>
				</div>
			</div>
			<div className="map-container">
				<Map location={person.location} />
			</div>
			<Link to="/Moveo-test" className="btn">
				Go Back
			</Link>
		</section>
	);
};

export default SingleUser;
