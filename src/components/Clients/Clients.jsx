import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ClientSlider from './ClientSlider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Slide } from 'react-awesome-reveal';

let clients = [
	{
		name: 'Tariq Mahmud',
		position: 'App Developer',
		img_url: 'avatar.jpg',
		stars: 5,
		disc: `Adil is a great developer. He worked with me in a react native application when i had some personal issues and a project deadline at the same time. I believe He finished the project for me and that was awesome! He will surely do something extraordinary in the development field.`,
	},
	{
		name: 'Shakib Hayath Maruf',
		position: 'Youtuber, Cinemon',
		img_url: 'avatar.jpg',
		stars: 5,
		disc: `In my experience working with Md Adil Hossain, I have witnessed the exceptional talent and skill they possess as a software developer. His dedication, attention to detail, and ability to think critically have consistently impressed me. His work on the "Muvimama" app showcases his exceptional ability to create intuitive and user-friendly solutions.`,
	},
	{
		name: 'Abir Hasan',
		position: 'Web Developer',
		img_url: 'avatar.jpg',
		stars: 5,
		disc: `Adil is prominent in Next.js and other technologies. My client wanted a Next.js App. But I am a php dev.So, I asked Adil to handle the project and he did that so efficiently that my client was pleased.`,
	},
	{
		name: 'Jahidul Islam',
		position: 'Proffesor, Notre Dame College, Mymensingh',
		img_url: 'avatar.jpg',
		stars: 5,
		disc: `Adil's coding manner is magnificent which i think, will be elevated day by day and he'll do extensive progress!`,
	},
];
var settings = {
	dots: true,
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
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				initialSlide: 2,
			},
		},
		{
			breakpoint: 530,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const Clients = () => {
	const arrowRef = useRef(null);
	let clientDisc = '';
	clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
	return (
		<Container id='client'>
			<Slide direction='left'>
				<span className='green'>testimonials</span>
				<h1>what clients say</h1>
			</Slide>
			<Testimonials>
				<Slider ref={arrowRef} {...settings}>
					{clientDisc}
				</Slider>
				<Buttons>
					<button onClick={() => arrowRef.current.slickPrev()}>
						<IoIosArrowBack />
					</button>
					<button onClick={() => arrowRef.current.slickNext()}>
						<IoIosArrowForward />
					</button>
				</Buttons>
			</Testimonials>
		</Container>
	);
};

export default Clients;

const Container = styled.div`
	width: 80%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 4rem 0;

	@media (max-width: 840px) {
		width: 90%;
	}

	span {
		font-weight: 700;
		text-transform: uppercase;
	}

	h1 {
		padding-top: 1rem;
		text-transform: capitalize;
	}

	.slick-list,
	.slick-slider,
	.slick-track {
		padding: 0;
	}

	.slick-dots {
		text-align: left;
		margin-left: 1rem;
	}

	.slick-dots li button:before {
		content: '';
	}

	.slick-dots li button {
		width: 9px;
		height: 4px;
		background: linear-gradient(
			159deg,
			rgb(45, 45, 58) 0%,
			rgb(43, 43, 53) 100%
		);
		padding: 0.1rem;
		margin-top: 1rem;
		transition: all 400ms ease-in-out;
		border-radius: 50px;
	}

	.slick-dots li.slick-active button {
		background: #01be96;
		width: 15px;
	}

	.slick-dots li {
		margin: 0;
	}
`;

const Testimonials = styled.div`
	margin-top: 2rem;
	position: relative;
`;
const Buttons = styled.div`
	position: absolute;
	right: 0.7rem;
	bottom: -2rem;

	button {
		background-color: transparent;
		margin-left: 0.5rem;
		border: none;
		color: #01be96;
		cursor: pointer;
		font-size: 1.1rem;
	}

	@media (max-width: 530px) {
		display: none;
	}
`;
