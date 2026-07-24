<<<<<<< HEAD
import React from 'react';

const DeveloperBios = (props) => {
	return (
		<>
			<h1>Developer Bio</h1>
			<div class="card" style={{ width: "18rem" }}>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">ID : {props.id}</li>
					<li class="list-group-item">First Name : {props.firstName}</li>
					<li class="list-group-item">Last Name : {props.lastName}</li>
					<li class="list-group-item">Favorite Language : {props.favoriteLanguage} </li>
					<li class="list-group-item">Year Started : {props.yearStarted}</li>
				</ul>
			</div>
		</>
	)
=======
function DeveloperBios({
	firstName,
	lastName,
	favoriteLanguage,
	yearStarted,
}) {
	return (
		<div className="card p-3 my-2">
			<h3>
				{firstName} {lastName}
			</h3>

			<p>
				<strong>Favorite Language:</strong> {favoriteLanguage}
			</p>

			<p>
				<strong>Started:</strong> {yearStarted}
			</p>
		</div>
	);
>>>>>>> f8e816d078b53e56e78539db66e321031e748b1f
}

export default DeveloperBios;