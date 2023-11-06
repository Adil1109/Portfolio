import React from 'react';
import styled from 'styled-components';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';
import { FiPhoneCall } from 'react-icons/fi';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';

const ProfComponent = () => {
	return (
		<Container id='home'>
			<Slide direction='left'>
				<Texts>
					<h4>
						Hello <span className='green'>I'm</span>
					</h4>
					<h1 className='green'>Md Adil Hossain</h1>
					<h3>Web, Android & IOS App Developer !</h3>
					<p style={{ marginBottom: 30 }}>
						As a skilled and experienced MERN, Next.js and React Native
						developer, I'm dedicated to creating top-notch web and mobile
						applications for clients.
						<br />
						<br /> With a passion for coding and a deep understanding, I excel
						in crafting robust and user-friendly solutions tailored to meet
						client needs. My expertise in MongoDB, Express.js, React.js,
						Node.js, React Native, and Next.js enables me to deliver efficient,
						scalable, and high-performance applications.
					</p>
					<a href='mailto:mdadilhossain2006@outlook.com'>Let's talk</a>
					<Social>
						<p>Check out my</p>
						<div className='social-icons'>
							<span>
								<a href='tel:+8801889633270'>
									<FiPhoneCall />
								</a>
							</span>
							<span>
								<a
									href='https://www.facebook.com/profile.php?id=61553528720054'
									target='_blank'
									rel='noreferrer'>
									<BsFacebook />
								</a>
							</span>

							<span>
								<a
									href='https://github.com/Adil1109'
									target='_blank'
									rel='noreferrer'>
									<AiFillGithub />
								</a>
							</span>

							<span>
								<a
									href='https://www.youtube.com/@programmingwithadil'
									target='_blank'
									rel='noreferrer'>
									<AiFillYoutube />
								</a>
							</span>
							<span>
								<a href='www.linkedin.com/in/md-adil-hossain' target='_blank'>
									<FaLinkedinIn />
								</a>
							</span>
							<span>
								<a
									href='https://www.facebook.com/md.adil.hossain.yt'
									target='_blank'
									rel='noreferrer'>
									<FaFacebookSquare />
								</a>
							</span>

							<span>
								<a
									href='https://www.instagram.com/adil.s_profile/'
									target='_blank'
									rel='noreferrer'>
									<AiOutlineInstagram />
								</a>
							</span>
						</div>
					</Social>
				</Texts>
			</Slide>
			<Slide direction='right'>
				<Profile>
					<img
						src='profileImage.jpg'
						alt='profile'
						style={{ borderRadius: '50%' }}
					/>
				</Profile>
			</Slide>
		</Container>
	);
};

export default ProfComponent;

const Container = styled.div`
	display: flex;
	gap: 2rem;
	padding-top: 3rem;
	width: 80%;
	max-width: 1280px;
	margin: 0 auto;
	z-index: 1;
	@media (max-width: 840px) {
		width: 90%;
	}

	@media (max-width: 640px) {
		flex-direction: column;
	}
`;
const Texts = styled.div`
	flex: 1;
	h4 {
		padding: 1rem 0;
		font-weight: 500;
	}
	h1 {
		font-size: 2rem;
		font-family: 'Secular One', sans-serif;
		letter-spacing: 2px;
	}
	h3 {
		font-weight: 500;
		font-size: 1.2rem;
		padding-bottom: 1.2rem;
		text-transform: capitalize;
	}
	p {
		font-weight: 300;
	}

	button {
		padding: 0.7rem 2rem;
		margin-top: 4rem;
		cursor: pointer;
		background-color: #01be96;
		border: none;
		color: #fff;
		font-weight: 500;
		filter: drop-shadow(0px 10px 10px #01be9551);
		:hover {
			filter: drop-shadow(0px 10px 10px #01be9570);
		}
	}

	a {
		padding: 0.7rem 2rem;
		cursor: pointer;
		background-color: #01be96;
		border-radius: 10px;
		text-decoration: none;
		border: none;
		color: #fff;
		font-weight: 500;
		filter: drop-shadow(0px 10px 10px #01be9551);
		:hover {
			filter: drop-shadow(0px 10px 10px #01be9570);
		}
	}
`;
const Social = styled.div`
	margin-top: 3rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	p {
		font-size: 0.9rem;
		@media (max-width: 690px) {
			font-size: 0.7rem;
		}
	}

	.social-icons {
		display: flex;
		align-items: center;
		gap: 1rem;
		span {
			width: 2.3rem;
			height: 2rem;
			clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
			background-color: #01be96;
			position: relative;
			transition: transform 400ms ease-in-out;
			:hover {
				transform: rotate(360deg);
			}
		}

		a {
			color: #fff;
			position: absolute;
			top: 55%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
`;
const Profile = styled.div`
	img {
		width: 25rem;
		filter: drop-shadow(0px 3px 3px #01be9570);
		transition: transform 400ms ease-in-out;
		@media (max-width: 790px) {
			width: 20rem;
		}

		@media (max-width: 660px) {
			width: 18rem;
		}

		@media (max-width: 640px) {
			width: 100%;
		}
	}

	:hover img {
		transform: translateY(-10px);
	}
`;
