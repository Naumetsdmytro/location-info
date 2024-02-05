// import { CircularProgress } from '@mui/material'
import { motion } from 'framer-motion'

export const Loader = () => {
	return (
		<motion.div
            style={{ borderColor: '#5a67d8', borderTopColor: '#023e8a', borderWidth: '5px', borderStyle: 'solid', borderRadius: '50%', width: '50px', height: '50px', margin: 'auto', marginTop: '100px'}}
			animate={{
				scale: [1, 2, 2, 1, 1],
				rotate: [0, 0, 180, 180, 0],
				borderRadius: ['0%', '0%', '50%', '50%', '0%'],
			}}
			transition={{
				duration: 2,
				ease: 'easeInOut',
				times: [0, 0.2, 0.5, 0.8, 1],
				repeat: Infinity,
				repeatDelay: 1,
			}}
		/>
	)
}

/* <div className="text-center mt-10">
			<CircularProgress color="secondary" />
		</div> */
