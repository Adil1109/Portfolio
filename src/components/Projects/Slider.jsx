import React, { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

let data = [
	{
		img: './Social.jpg',
		disc: 'This is a fully functional social media app api built with node and express.js. It has almost every major feature that a social media should have like posting, liking, commenting, profile and cover picture uploading, sending emails, resetting password, changing password, encryption and many other features!',
		link: 'https://github.com/Adil1109/socialMediaAPI',
	},
	{
		img: 'Movies.jpg',
		disc: 'This is a fully functional Movie streaming app built with React Native. It has features like streaming movies from different websites and also streaming youtube videos and you can browse them also.',
		link: 'https://github.com/Adil1109/streamingAppExpoCLI',
	},
	{
		img: 'blog.jpg',
		disc: 'This is a fully functional blogging website built with Next.js. write blogs and place them to search results. Attach images and present your blog beautifully to the world. Almost every feature of it contains that a blogging website should have and developed with mighty next.js codebase',
		link: 'https://github.com/Adil1109/nextjsSEOBlog',
	},
	{
		img: 'Admin.jpg',
		disc: 'Secured Admin panel for content management of an android application and this is built with React.js!',
		link: 'https://github.com/Adil1109/contentAdminPanel',
	},
	{
		img: 'Api.jpg',
		disc: 'API for a streaming application built with Node.js, express and mongodb. It includes features that powers a movie and web series streaming and browsing app from different sites and youtube!',
		link: 'https://github.com/Adil1109/streamingAppBackendAPI',
	},
];

var settings = {
	className: 'center',
	centerMode: true,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 0,
	arrows: false,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				centerMode: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
				centerMode: false,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
			},
		},
	],
};
const SliderComp = () => {
	const arrowRef = useRef(null);
	let sliderProject = '';
	sliderProject = data.map((item, i) => <Project item={item} key={i} />);
	return (
		<Container>
			<Slider ref={arrowRef} {...settings}>
				{sliderProject}
			</Slider>
			<Buttons>
				<button onClick={() => arrowRef.current.slickPrev()} className='back'>
					<IoIosArrowBack />
				</button>
				<button onClick={() => arrowRef.current.slickNext()} className='next'>
					<IoIosArrowForward />
				</button>
			</Buttons>
		</Container>
	);
};

export default SliderComp;

const Container = styled.div`
	position: relative;
`;

const Buttons = styled.div`
	button {
		width: 2rem;
		height: 2rem;
		background-color: rgba(255, 255, 255, 0.1);
		cursor: pointer;
		color: #01be96;
		border: none;
		position: absolute;
		top: 45%;
		right: -1rem;
	}

	.back {
		left: -1rem;
	}
`;
