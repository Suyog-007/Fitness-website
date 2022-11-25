import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

const SERVER_URL = process.env.REACT_APP_API_URL
const Categories = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([])

	const fetchData = async () => {
		try {
			const res = await axios.get(`${SERVER_URL}/crawler`)
			setData(res.data.categories)
			setLoading(false)
		} catch (e) {
			console.log(e)
			toast.error('Error fetching data')
		}

	}

	useEffect(() => {
		fetchData();
	}, [])

	return (
		<div className='Categories'>
			<h1>Workouts</h1>
			{
				loading ? <div className='loader_wrapper'> <Loader /> </div> :
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
			}
		</div>
	)
}

export default Categories