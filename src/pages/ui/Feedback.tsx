import {
	Box,
	Button,
	Stack,
	Typography,
	TextField,
	InputAdornment,
	IconButton,
} from '@mui/material'
import { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import { useSpring, animated } from 'react-spring'
import { notifySuccess } from '../../shared/notifySuccess'
import { ToastContainer } from 'react-toastify'

export const Feedback = () => {
	const [clicked, setClicked] = useState(false)
	const [email, setEmail] = useState('')
	const [msg, setMsg] = useState('')

	const handleMsgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMsg(event.target.value)
	}

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handleClick = () => {
		setClicked(true)
	}

	const fadeProps = useSpring({
		opacity: clicked ? 1 : 0,
		transform: clicked ? 'translateY(0)' : 'translateY(30px)',
		config: {
			duration: 1000,
		},
	})

	const onSubmit = () => {
		notifySuccess('Your message has been sent!')
	}

	return (
		<Box
			component="div"
			sx={{ paddingX: '100px', paddingTop: '100px', paddingBottom: '30px' }}
		>
			<Stack
				direction="column"
				spacing={2}
				justifyContent="space-between"
				alignItems="center"
				sx={{ paddingY: '60px' }}
			>
				<Typography
					variant={'h4'}
					sx={{
						color: 'rgba(0, 0, 0, .5)',
						marginBottom: '5px',
						fontWeight: 100,
					}}
				>
					IF YOU HAVE ANY FEEDBACK ABOUT OUR SERVICE, PLEASE LET US KNOW
				</Typography>
				<Typography
					variant={'h6'}
					sx={{ color: 'rgba(0, 0, 0, .7)', fontWeight: 100 }}
				>
					WE WOULD ❤️ LOVE TO HEAR FROM 🫵
				</Typography>
				<Button
					variant="contained"
					sx={{ backgroundColor: '#5a67d8', color: 'white' }}
					onClick={handleClick}
				>
					CONTACT US
				</Button>
			</Stack>
			{clicked && (
				<animated.div style={{ ...fadeProps, transformOrigin: 'center' }}>
					<Stack
						direction="column"
						spacing={2}
						justifyContent="center"
						alignItems="center"
						sx={{ paddingX: '300px' }}
					>
						<TextField
							fullWidth
							value={email}
							onChange={handleEmailChange}
							placeholder="Your Email"
							variant="outlined"
							sx={{
								backgroundColor: 'rgba(255, 255, 255, 1)',
								borderRadius: '10px',
								marginRight: '70px',
							}}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<IconButton>
											<MailOutlineIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<TextField
							fullWidth
							value={msg}
							onChange={handleMsgChange}
							placeholder="Your Message"
							variant="outlined"
							multiline
							sx={{
								backgroundColor: 'rgba(255, 255, 255, 1)',
								borderRadius: '10px',
								marginRight: '70px',
							}}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<IconButton>
											<ChatBubbleOutlineIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
						/>
						<Button
							variant="contained"
							style={{
								backgroundColor: '#0e76a8',
								color: 'white',
								height: '55px',
								width: '200px',
							}}
							onClick={onSubmit}
						>
							Send
						</Button>
					</Stack>
				</animated.div>
			)}
			<ToastContainer />
		</Box>
	)
}
