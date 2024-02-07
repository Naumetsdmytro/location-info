import React from 'react'

import { Avatar, Box, Stack, Typography } from '@mui/material'
import { LazyMotion, domAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import AndriiPhoto from '../assets/Andrii.jpg'

const developers = [
	{
		github: 'https://github.com/Andriy15',
		image: AndriiPhoto,
		name: 'Andrii Chykulai',
		role: 'Frontend Developer',
	},
	{
		github: 'https://github.com/Naumetsdmytro',
		image: 'https://avatars.githubusercontent.com/u/60961857?v=4',
		name: 'Dmytro Naumets',
		role: 'Fullstack Developer',
	},
]

export const Developers = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
	})

	return (
		<Box
			animate={{ opacity: 1 }}
			component={motion.div}
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			sx={{
				backgroundColor: '#f0f0f0',
				borderRadius: '20px',
				marginX: '150px',
				paddingY: '100px',
			}}
		>
			<Typography
				sx={{
					color: 'text.primary',
					fontWeight: 'bold',
					marginTop: '40px',
					textAlign: 'center',
				}}
				variant={'h3'}
			>
				<span style={{ borderBottom: '4px solid #61dafb', paddingBottom: '10px' }}>
					This project was created by
				</span>
			</Typography>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="center"
				spacing={4}
				sx={{ paddingY: '60px' }}
			>
				{developers.map((developer, index) => (
					<Stack
						alignItems="center"
						direction="column"
						justifyContent="space-between"
						key={index}
						spacing={2}
						sx={{ paddingY: '60px' }}
					>
						<LazyMotion features={domAnimation}>
							<motion.div
								animate={{ scale: inView ? 1 : 0 }}
								initial={{ scale: 0 }}
								ref={ref}
								transition={{ delay: index * 0.2, duration: 0.5 }}
							>
								<Avatar
									alt={developer.name}
									src={developer.image}
									sx={{ borderRadius: '50%', height: 200, width: 200 }}
								/>
							</motion.div>
						</LazyMotion>
						<Typography
							sx={{
								color: 'text.primary',
								fontWeight: 'bold',
								textAlign: 'center',
							}}
							variant={'h5'}
						>
							{developer.name}
						</Typography>
						<Typography
							sx={{
								color: 'text.primary',
								fontWeight: 'bold',
								textAlign: 'center',
							}}
							variant={'h6'}
						>
							{developer.role}
						</Typography>
						<a href={developer.github} rel="noreferrer" target="_blank">
							<Typography
								sx={{
									color: 'text.primary',
									fontWeight: 'bold',
									textAlign: 'center',
								}}
								variant={'h6'}
							>
								Github
							</Typography>
						</a>
					</Stack>
				))}
			</Stack>
		</Box>
	)
}
