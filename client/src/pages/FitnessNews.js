import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { fetchData, ExcerciseOptions } from '../utils/fetchData';

const FitnessNews = () => {
	const [newsData, setNewsData] = useState([]);

	const fetchBMICalData = async () => {
		const response = await fetchData(`https://bing-news-search1.p.rapidapi.com/news/search?q=exercise&count=20`, ExcerciseOptions);
		setNewsData(response.value);
	}

	useEffect(() => {
		fetchBMICalData();
	}, [])


	return (
		<div className='news_container'>
			{
				newsData.map((news, index) => {
					return (
						<a href={news.url} target='_blank'>
							<div className='news_card' key={index} >
								{
									news.image !== undefined && news.image.thumbnail !== undefined && news.image.thumbnail.contentUrl ? (<img src={news.image.thumbnail && news.image.thumbnail.contentUrl}></img>
									) : (
										<div className='no_image'>
											<div>No Image</div>
										</div>
									)
								}

								<div className='name'>
									{news.name && news.name.length > 50
										? news.name.substring(0, 50) + "..."
										: news.name}
								</div>
								<div className='desc'>
									{
										news.description && news.description.length > 180
											? news.description.substring(0, 180) + "..."
											: news.description
									}
									{ }
								</div>
							</div>
						</a>

					)
				})
			}
		</div>
	)
}

export default FitnessNews