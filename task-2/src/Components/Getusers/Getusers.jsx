import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import './getusers.css';

const App = () => {
	const [cardData, setCardData] = useState([]);
	const [visible] = useState(6);

	const allCardData = async () => {
		const response = await axios.get('https://randomuser.me/api/?results=6');
		setCardData(response.data.results);
	};

	useEffect(() => {
		allCardData();
	}, []);

	const renderCard = (person, index) => {
		return (
			<Card className="card" style={{ width: '18rem' }}>
				<Card.Img variant="top" src={person.picture.large} />
				<Card.Body className=" text-light">
					<Card.Title>
						{person.name.first} {person.name.last}
					</Card.Title>
					<Card.Title>{person.email}</Card.Title>
				</Card.Body>
			</Card>
		);
	};

	return (
		<div className="App">
			<div className="wrapper">
				<div className="cards">
					{cardData.slice(0, visible).map(renderCard)}
				</div>
			</div>
		</div>
	);
};

export default App;
