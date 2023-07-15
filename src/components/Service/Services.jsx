import React from 'react';
import { MdDesignServices } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import { SiAndroidstudio } from 'react-icons/si';
import styled from 'styled-components';
import Card from './Card';
import { Slide } from 'react-awesome-reveal';

const Services = () => {
	return (
		<Container id='service'>
			<Slide direction='down'>
				<h4>
					My <span className='green'>services</span>
				</h4>
				<h1>What I Do</h1>
			</Slide>
			<Cards>
				<Slide direction='left'>
					<Card
						Icon={MdDesignServices}
						title={'Ui/Ux Designer'}
						disc={`I will be creating beautiful and eye catchy ui/ux or web designs for your next projects. I also offer logo and thumbnail designed for you.`}
					/>
				</Slide>
				<Slide direction='up'>
					<Card
						Icon={GiWorld}
						title={'Web Developer'}
						disc={`Want a single page website built with React or a SSR/SSG Nextjs site? I'll will be creating exactly what you wish!`}
					/>
				</Slide>
				<Slide direction='right'>
					<Card
						Icon={SiAndroidstudio}
						title={'Android/IOS App Developer'}
						disc={`I will be creating super performent, cross-platform apps for Android and IOS with React Native for your business to grow up next level. `}
					/>
				</Slide>
			</Cards>
		</Container>
	);
};

export default Services;

const Container = styled.div`
	width: 80%;
	max-width: 1280px;
	margin: 0 auto;
	padding: 3rem 0;
	@media (max-width: 840px) {
		width: 90%;
	}

	h1 {
		padding-top: 1rem;
	}
`;
const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	margin-top: 4rem;
	gap: 1rem;
`;
