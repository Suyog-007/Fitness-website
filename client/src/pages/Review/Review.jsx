import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './Review.css'
import axios from 'axios';

const Review = () => {
	const [rateData, setRateData] = useState({
		rating: 0,
		review: '',
	});
	const ratingRef = useRef(null);

	useEffect(() => {
		if (ratingRef.current) {
			ratingRef.current.addEventListener('click', rate);
			ratingRef.current.addEventListener('mouseover', rateOnHover);
			ratingRef.current.addEventListener('mouseout', rateOnHoverOut);
		}
		return () => {
			if (ratingRef.current) {
				ratingRef.current.removeEventListener('click', rate);
				ratingRef.current.removeEventListener('mouseover', rateOnHover);
				ratingRef.current.removeEventListener('mouseout', rateOnHoverOut);
			}
		}
	}, [ratingRef.current])

	const rate = (e) => {
		const stars = document.querySelectorAll('.star');
		const star = e.target;
		let index = 0;
		for (let i = 0; i < stars.length; i++) {
			if (stars[i].contains(star)) {
				index = i;
				break;
			}
		}
		for (let i = 0; i < stars.length; i++) {
			if (i <= index) {
				stars[i].classList.add('active');
				setRateData({ ...rateData, rating: i + 1 });
			} else {
				stars[i].classList.remove('active');
			}
		}
	}

	const rateOnHoverOut = (e) => {
		const stars = document.querySelectorAll('.star');
		for (let i = 0; i < stars.length; i++) {
			stars[i].classList.remove('active-star');
		}
	}

	const rateOnHover = (e) => {
		const stars = document.querySelectorAll('.star');
		const star = e.target;
		let index = 0;
		for (let i = 0; i < stars.length; i++) {
			if (stars[i].contains(star)) {
				index = i;
				break;
			}
		}
		for (let i = 0; i < stars.length; i++) {
			if (i <= index) {
				stars[i].classList.add('active-star');
			} else {
				stars[i].classList.remove('active-star');
			}
		}
	}

	const PostFeedback = () => {
		if (rateData.rating === 0 || rateData.review === '') {
			alert('Please enter all the fields');
			return;
		} else {

		}
	}

	return (
		<div className='Review_wrapper'>
			<div className="post_wrapper">
				<h1>Give feedback</h1>
				<div ref={ratingRef} className="star_container">
					<div className="star" value={1}>
						<AiFillStar />
					</div>
					<div className="star" value={2}>
						<AiFillStar />
					</div>
					<div className="star" value={3}>
						<AiFillStar />
					</div>
					<div className="star" value={4}>
						<AiFillStar />
					</div>
					<div className="star" value={5}>
						<AiFillStar />
					</div>
				</div>
				<div className='input_wrapper'>
					<textarea name="review" placeholder='Write your review here' value={rateData.review} onChange={(e) => setRateData({ ...rateData, review: e.target.value })}></textarea>
				</div>
				<button onClick={PostFeedback}>Post Your Feedback</button>
			</div>
		</div>
	)
}

export default Review