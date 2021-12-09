import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { userService } from '../services/userService';
import Spinner from '../components/Spinner';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const mainUrl =
	'https://randomuser.me/api/?seed=moveo&results=10&exc=login,registered,nat,phone,cell,id';

const AllUsers = () => {
	const [loading, setLoading] = useState(true);
	const [people, setPeople] = useState([]);
	const [page, setPage] = useState(1);
	const [sortBy, setSortBy] = useState('');
	const history = useHistory();

	const createData = (
		num,
		picture,
		first,
		last,
		email,
		gender,
		age,
		location
	) => {
		return { num, picture, first, last, email, gender, age, location };
	};

	const rows = people.map((person, idx) => {
		return createData(
			`${idx + 1}`,
			`${person.picture.large}`,
			`${person.name.first.charAt(0)}`,
			`${person.name.last}`,
			`${person.email}`,
			`${person.gender}`,
			`${person.dob.age}`,
			person.location.coordinates
		);
	});

	const fetchPeople = async () => {
		const response = await axios.get(`${mainUrl}&page=${page}`);
		const results = await response.data.results;
		if (!sortBy) {
			setPeople(results);
		} else {
			setPeople(userService.sortBy(results, sortBy));
		}
		setLoading(false);
	};

	const sendEmail = (e) => {
		e.stopPropagation();
		document.location = `mailto:${e.target.value}`;
	};

	useEffect(() => {
		fetchPeople();
		// eslint-disable-next-line
	}, [page, sortBy]);

	const handleClick = (name, person) => {
		history.push({
			pathname: `${name}`,
			person,
		});
	};

	if (!people) return;
	if (loading) {
		return <Spinner />;
	}

	return (
		<section className="container">
			<div className="header-container">
				<h1>All users</h1>
			</div>
			<TableContainer component={Paper}>
				<Table
					sx={{ maxWidth: '90%', margin: 'auto' }}
					aria-label="simple table"
				>
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell align="center">Picture</TableCell>
							<TableCell align="center">Name</TableCell>
							<TableCell
								align="center"
								onClick={() => setSortBy('email')}
							>
								Email
							</TableCell>
							<TableCell
								align="center"
								onClick={() => setSortBy('gender')}
							>
								Gender
							</TableCell>
							<TableCell
								align="center"
								onClick={() => setSortBy('age')}
							>
								Age
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => {
							return (
								<TableRow
									key={row.num}
									onClick={() =>
										handleClick(
											`${row.first}.${row.last}`,
											row
										)
									}
								>
									<TableCell
										component="th"
										scope="row"
										align="center"
									>
										{row.num}
									</TableCell>
									<TableCell align="center">
										<img src={row.picture} alt={row.name} />
									</TableCell>
									<TableCell align="center">
										{`${row.first}.${row.last}`}
									</TableCell>
									<TableCell
										align="center"
										onClick={(e) => sendEmail(e)}
									>
										{row.email}
									</TableCell>
									<TableCell align="center">
										{row.gender}
									</TableCell>
									<TableCell align="center">
										{row.age}
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<div className="table-btns-container">
				<button
					onClick={() => setPage(userService.prevPage(page))}
					className="btn"
				>
					prev
				</button>
				<span>
					{' '}
					{page} / {people.length}{' '}
				</span>
				<button
					onClick={() => setPage(userService.nextPage(page))}
					className="btn"
				>
					next
				</button>
			</div>
		</section>
	);
};

export default AllUsers;
