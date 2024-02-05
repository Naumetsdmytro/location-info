import { Box, Stack, Typography, Avatar } from '@mui/material'
import AndriiPhoto from '../assets/Andrii.jpg'
import { LazyMotion, domAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const developers = [
	{
		name: 'Andrii Chykulai',
		role: 'Frontend Developer',
		image: AndriiPhoto,
		github: 'https://github.com/Andriy15',
	},
	{
		name: 'Dmytro Naumets',
		role: 'Fullstack Developer',
		image: 'https://avatars.githubusercontent.com/u/60961857?v=4',
		github: 'https://github.com/Naumetsdmytro',
	},
]

export const Developers = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
	})

	return (
		<Box
			component={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			sx={{
				marginX: '150px',
				paddingY: '100px',
				backgroundColor: '#f0f0f0',
				borderRadius: '20px',
			}}
		>
			<Typography
				variant={'h3'}
				sx={{
					fontWeight: 'bold',
					color: 'text.primary',
					textAlign: 'center',
					marginTop: '40px',
				}}
			>
				<span
					style={{ borderBottom: '4px solid #61dafb', paddingBottom: '10px' }}
				>
					This project was created by
				</span>
			</Typography>
			<Stack
				direction="row"
				spacing={4}
				justifyContent="center"
				alignItems="center"
				sx={{ paddingY: '60px' }}
			>
				{developers.map((developer, index) => (
					<Stack
						key={index}
						direction="column"
						spacing={2}
						justifyContent="space-between"
						alignItems="center"
						sx={{ paddingY: '60px' }}
					>
						<LazyMotion features={domAnimation}>
							<motion.div
								ref={ref}
								initial={{ scale: 0 }}
								animate={{ scale: inView ? 1 : 0 }} 
								transition={{ duration: 0.5, delay: index * 0.2 }}
							>
								<Avatar
									src={developer.image}
									alt={developer.name}
									sx={{ width: 200, height: 200, borderRadius: '50%' }}
								/>
							</motion.div>
						</LazyMotion>
						<Typography
							variant={'h5'}
							sx={{
								fontWeight: 'bold',
								color: 'text.primary',
								textAlign: 'center',
							}}
						>
							{developer.name}
						</Typography>
						<Typography
							variant={'h6'}
							sx={{
								fontWeight: 'bold',
								color: 'text.primary',
								textAlign: 'center',
							}}
						>
							{developer.role}
						</Typography>
						<a href={developer.github} target="_blank" rel="noreferrer">
							<Typography
								variant={'h6'}
								sx={{
									fontWeight: 'bold',
									color: 'text.primary',
									textAlign: 'center',
								}}
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
