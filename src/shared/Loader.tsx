// import { CircularProgress } from '@mui/material'
import { motion } from 'framer-motion'

export const Loader = () => {
	return (
		<motion.div
			animate={{
				borderRadius: ['0%', '0%', '50%', '50%', '0%'],
				rotate: [0, 0, 180, 180, 0],
				scale: [1, 2, 2, 1, 1],
			}}
			style={{
				borderColor: '#5a67d8',
				borderRadius: '50%',
				borderStyle: 'solid',
				borderTopColor: '#023e8a',
				borderWidth: '5px',
				height: '50px',
				margin: 'auto',
				marginTop: '100px',
				width: '50px',
			}}
			transition={{
				duration: 2,
				ease: 'easeInOut',
				repeat: Infinity,
				repeatDelay: 1,
				times: [0, 0.2, 0.5, 0.8, 1],
			}}
		/>
	)
}

/* <div className="text-center mt-10">
			<CircularProgress color="secondary" />
		</div> */
