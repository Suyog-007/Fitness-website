import React, { useState } from 'react'

const Categories = () => {
	const [data, setData] = useState([
		{
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP",
			name: "Workouts For Men",
			url: "https://www.muscleandstrength.com/workouts/men"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsforwomen.jpg?itok=G4rsV_4R",
			name: "Workouts For Women",
			url: "https://www.muscleandstrength.com/workouts/women"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/musclebuilding.jpg?itok=7ajNGjpw",
			name: "Muscle Building",
			url: "https://www.muscleandstrength.com/workouts/muscle-building"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/fatloss.jpg?itok=FegmOZtr",
			name: "Fat Loss",
			url: "https://www.muscleandstrength.com/workouts/fat-loss"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/increasestrength.jpg?itok=kVvW71is",
			name: "Increase Strength",
			url: "https://www.muscleandstrength.com/workouts/strength"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/abworkouts.jpg?itok=ZRYxAHFd",
			name: "Ab Workouts",
			url: "https://www.muscleandstrength.com/workouts/abs"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/fullbody.jpg?itok=ooedT3Ni",
			name: "Full Body",
			url: "https://www.muscleandstrength.com/workouts/full-body"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/sportsperformance.jpg?itok=wWcCV6jj",
			name: "Sports Performance",
			url: "https://www.muscleandstrength.com/workouts/sports"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/bodyweight_0.jpg?itok=s4mUfr8l",
			name: "Bodyweight",
			url: "https://www.muscleandstrength.com/workouts/bodyweight"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/beginner_0.jpg?itok=FZ8Nje_W",
			name: "Beginner",
			url: "https://www.muscleandstrength.com/workouts/beginner"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/athome.jpg?itok=vg8mE6aJ",
			name: "At Home",
			url: "https://www.muscleandstrength.com/workouts/home"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/celebrity_0.jpg?itok=K4Us_DV7",
			name: "Celebrity",
			url: "https://www.muscleandstrength.com/workouts/celebrity"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/cardio_0.jpg?itok=ZArKh88W",
			name: "Cardio",
			url: "https://www.muscleandstrength.com/workouts/cardio"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/chestworkouts.jpg?itok=4fRxwlBd",
			name: "Chest Workouts",
			url: "https://www.muscleandstrength.com/workouts/chest"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/backworkouts.jpg?itok=n1xpz4jW",
			name: "Back Workouts",
			url: "https://www.muscleandstrength.com/workouts/back"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/bicepworkouts.jpg?itok=clgOPXSn",
			name: "Bicep Workouts",
			url: "https://www.muscleandstrength.com/workouts/biceps"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/shoulderworkout.jpg?itok=1VDoQOi5",
			name: "Shoulder Workouts",
			url: "https://www.muscleandstrength.com/workouts/shoulders"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/legworkouts.jpg?itok=da36AXWf",
			name: "Leg Workouts",
			url: "https://www.muscleandstrength.com/workouts/legs"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/tricepworkouts.jpg?itok=gwfI0PXa",
			name: "Tricep Workouts",
			url: "https://www.muscleandstrength.com/workouts/triceps"
		}, {
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/gluteworkouts.jpg?itok=9YNMOvjw",
			name: "Glute Workouts",
			url: "https://www.muscleandstrength.com/workouts/other"
		}

	])
	return (
		<div className='Categories'>
			<h1>Categories</h1>
			<div className='category_container'>
				{data.map((item, index) => (
					<a href={item.url} target="_blank">
						<div className='category_card' key={index}>
							<img src={item.img} alt={item.name} />
							<h3>{item.name}</h3>
						</div>
					</a>

				))}
			</div>

		</div>
	)
}

export default Categories