import React, { useState } from 'react'

const Categories = () => {
	const [data, setData] = useState([
		{
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP",
			name: "Workouts For Men",
			url: "https://www.muscleandstrength.com/workouts/men"
		},
		{
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP",
			name: "Workouts For Men",
			url: "https://www.muscleandstrength.com/workouts/men"
		},
		{
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP",
			name: "Workouts For Men",
			url: "https://www.muscleandstrength.com/workouts/men"
		},
		{
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP",
			name: "Workouts For Men",
			url: "https://www.muscleandstrength.com/workouts/men"
		},
		{
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP",
			name: "Workouts For Men",
			url: "https://www.muscleandstrength.com/workouts/men"
		},
		{
			img: "https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/workoutsformen.jpg?itok=jALf6fyP",
			name: "Workouts For Men",
			url: "https://www.muscleandstrength.com/workouts/men"
		},
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