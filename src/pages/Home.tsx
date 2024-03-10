import React from 'react'

import { Box, Grid, Stack, Typography } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { animated, useSpring } from 'react-spring'
import { SectionList } from '../entities/category'
import { SearchBtn } from '../shared'
import { useTheme } from '../shared/hooks/useTheme'
import mainImage from './assets/main.jpg'
import nightImage from './assets/night-image.jpg'
import { Developers } from './ui/Developers'
import { Feedback } from './ui/Feedback'
import { Footer } from './ui/Footer'

export const Home = () => {
	const { isDark } = useTheme()

	const [footerRef, inFooterView] = useInView({
		triggerOnce: true,
	})

	const [sectionRef, inSectionView] = useInView({
		triggerOnce: true,
	})

	const [developersRef, inDevelopersView] = useInView({
		triggerOnce: true,
	})

	const developersFadeProps = useSpring({
		config: {
			duration: 1000,
		},
		opacity: inDevelopersView ? 1 : 0,
		transform: inDevelopersView ? 'translateY(0)' : 'translateY(50px)',
	})

	const footerFadeProps = useSpring({
		config: {
			duration: 1000,
		},
		opacity: inFooterView ? 1 : 0,
		transform: inFooterView ? 'translateY(0)' : 'translateY(50px)',
	})

	const sectionFadeProps = useSpring({
		config: {
			duration: 1000,
		},
		opacity: inSectionView ? 1 : 0,
		transform: inSectionView ? 'translateY(0)' : 'translateY(50px)',
	})

	return (
		<Box
			component={'div'}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				backgroundColor: isDark ? '#272858' : 'rgba(255, 255, 255, .7)',
			}}
		>
			<img alt="main-page" height="50%" src={isDark ? nightImage : mainImage} width="100%" />
			<Grid
				alignItems="center"
				container
				flexDirection="column"
				justifyContent="center"
				sx={{
					left: '50%',
					position: 'absolute',
					top: '40%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Stack
					component={'div'}
					spacing={2}
					sx={{
						backdropFilter: 'blur(10px)',
						backgroundColor: 'rgba(150, 150, 150, 0.4)',
						border: '2px solid #4d4d4d',
						borderRadius: '10px',
						marginBottom: '20px',
						padding: '10px',
					}}
				>
					<Typography
						sx={{
							color: 'rgba(1, 1, 1, 0.7)',
						}}
						variant={'h2'}
					>
						<span style={{ color: '#5a67d8' }}>Search</span> any place near you
					</Typography>
				</Stack>
				<Typography
					sx={{
						color: 'rgba(0, 100, 0)',
						marginBottom: '10px',
					}}
					variant={'h3'}
				>
					Find the best <span style={{ color: '#023e8a' }}>places</span> in your city
				</Typography>
				<Stack component={'div'} spacing={2}>
					<SearchBtn />
				</Stack>
			</Grid>
			<animated.div ref={sectionRef} style={sectionFadeProps}>
				<SectionList />
			</animated.div>
			<Feedback />
			<animated.div ref={developersRef} style={developersFadeProps}>
				<Developers />
			</animated.div>
			<animated.div ref={footerRef} style={footerFadeProps}>
				<Footer />
			</animated.div>
		</Box>
	)
}
