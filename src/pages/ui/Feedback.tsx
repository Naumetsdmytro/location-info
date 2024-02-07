import React from 'react'

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import {
	Box,
	Button,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { ToastContainer } from 'react-toastify'

import { notifySuccess } from '../../shared/notifySuccess'

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
		config: {
			duration: 1000,
		},
		opacity: clicked ? 1 : 0,
		transform: clicked ? 'translateY(0)' : 'translateY(30px)',
	})

	const onSubmit = () => {
		notifySuccess('Your message has been sent!')
	}

	return (
		<Box component="div" sx={{ paddingBottom: '30px', paddingTop: '100px', paddingX: '100px' }}>
			<Stack
				alignItems="center"
				direction="column"
				justifyContent="space-between"
				spacing={2}
				sx={{ paddingY: '60px' }}
			>
				<Typography
					sx={{
						color: 'rgba(0, 0, 0, .5)',
						fontWeight: 100,
						marginBottom: '5px',
					}}
					variant={'h4'}
				>
					IF YOU HAVE ANY FEEDBACK ABOUT OUR SERVICE, PLEASE LET US KNOW
				</Typography>
				<Typography sx={{ color: 'rgba(0, 0, 0, .7)', fontWeight: 100 }} variant={'h6'}>
					WE WOULD ❤️ LOVE TO HEAR FROM 🫵
				</Typography>
				<Button
					onClick={handleClick}
					sx={{ backgroundColor: '#5a67d8', color: 'white' }}
					variant="contained"
				>
					CONTACT US
				</Button>
			</Stack>
			{clicked && (
				<animated.div style={{ ...fadeProps, transformOrigin: 'center' }}>
					<Stack
						alignItems="center"
						direction="column"
						justifyContent="center"
						spacing={2}
						sx={{ paddingX: '300px' }}
					>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<IconButton>
											<MailOutlineIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
							fullWidth
							onChange={handleEmailChange}
							placeholder="Your Email"
							sx={{
								backgroundColor: 'rgba(255, 255, 255, 1)',
								borderRadius: '10px',
								marginRight: '70px',
							}}
							value={email}
							variant="outlined"
						/>
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<IconButton>
											<ChatBubbleOutlineIcon />
										</IconButton>
									</InputAdornment>
								),
							}}
							fullWidth
							multiline
							onChange={handleMsgChange}
							placeholder="Your Message"
							sx={{
								backgroundColor: 'rgba(255, 255, 255, 1)',
								borderRadius: '10px',
								marginRight: '70px',
							}}
							value={msg}
							variant="outlined"
						/>
						<Button
							onClick={onSubmit}
							style={{
								backgroundColor: '#0e76a8',
								color: 'white',
								height: '55px',
								width: '200px',
							}}
							variant="contained"
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
