import React from 'react'

import { Avatar, Box, Stack, Typography } from '@mui/material'
import { LazyMotion, domAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AndriiPhoto from '../assets/Andrii.jpg'
import { useTheme } from '../../shared/hooks/useTheme'

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
	const { isDark } = useTheme()

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
				backgroundColor: isDark ? '#272858' : '#f5f5f5f5',
				borderRadius: '20px',
				marginX: '150px',
				paddingY: '100px',
			}}
		>
			<Typography
				sx={{
					color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, .8)',
					fontWeight: 'bold',
					marginTop: '40px',
					textAlign: 'center',
					paddingBottom: '10px',
				}}
				variant={'h3'}
			>
				This project was created by
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
								color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, .8)',
								fontWeight: 'bold',
								textAlign: 'center',
							}}
							variant={'h5'}
						>
							{developer.name}
						</Typography>
						<Typography
							sx={{
								color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, .8)',
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
									color: isDark ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, .8)',
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
