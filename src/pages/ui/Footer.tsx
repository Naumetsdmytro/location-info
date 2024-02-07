import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import GitHubIcon from '@mui/icons-material/GitHub'
import LightModeIcon from '@mui/icons-material/LightMode'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonIcon from '@mui/icons-material/Person'
import TwitterIcon from '@mui/icons-material/Twitter'
import {
	Box,
	Button,
	Divider,
	Grid,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Typography,
} from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useTheme } from '../../shared/hooks/useTheme'

export const Footer = () => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const { isDark, toggleTheme } = useTheme()

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value)
	}

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	return (
		<Box component="div" sx={{ paddingBottom: '30px', paddingTop: '100px', paddingX: '100px' }}>
			<Grid container spacing={8}>
				<Grid item md={12} xs={6}>
					<Divider />
					<Stack
						alignItems="center"
						direction="row"
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
							variant={'h6'}
						>
							NEWSLETTER
						</Typography>
						<Stack alignItems="center" direction="row">
							<TextField
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<IconButton>
												<PersonIcon />
											</IconButton>
										</InputAdornment>
									),
								}}
								onChange={handleNameChange}
								placeholder="Name"
								sx={{
									backgroundColor: 'rgba(255, 255, 255, 1)',
									borderRadius: '10px',
									marginRight: '70px',
									width: '300px',
								}}
								value={name}
								variant="outlined"
							/>
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
								onChange={handleEmailChange}
								placeholder="Your Email"
								sx={{
									backgroundColor: 'rgba(255, 255, 255, 1)',
									borderRadius: '10px',
									marginRight: '70px',
									width: '300px',
								}}
								value={email}
								variant="outlined"
							/>
							<Button
								onClick={() => {
									console.log('subscribe')
								}}
								style={{
									backgroundColor: '#5a67d8',
									color: 'white',
									height: '55px',
									width: '200px',
								}}
								variant="contained"
							>
								Subscribe
							</Button>
						</Stack>
					</Stack>
					<Divider />
				</Grid>
				<Grid item md={12} xs={6}>
					<Stack alignItems="center" direction="row" justifyContent="space-between" spacing={2}>
						<Stack direction="column" spacing={2}>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'h6'}
							>
								ABOUT
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								About Us
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								Contact Us
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								Careers
							</Typography>
						</Stack>
						<Stack direction="column" spacing={2}>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'h6'}
							>
								HELP
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								Payments
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								Shipping
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								Cancellation & Returns
							</Typography>
						</Stack>
						<Stack direction="column" spacing={2}>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'h6'}
							>
								POLICY
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								Return Policy
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								Terms Of Use
							</Typography>
							<Typography
								sx={{
									color: 'rgba(0, 0, 0, .5)',
									fontWeight: 100,
									marginBottom: '5px',
								}}
								variant={'body1'}
							>
								Security
							</Typography>
						</Stack>
					</Stack>
				</Grid>
				<Grid item md={12} xs={6}>
					<Divider />
					<Stack
						alignItems="center"
						direction="row"
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
							variant={'h6'}
						>
							&copy; 2024 Location-info
						</Typography>
						<Button onClick={toggleTheme}>{isDark ? <LightModeIcon /> : <DarkModeIcon />}</Button>
						<Stack direction="row" spacing={2}>
							<Link to="https://github.com/Naumetsdmytro/location-info/tree/main">
								<Button
									onClick={() => {
										console.log('facebook')
									}}
									style={{
										backgroundColor: '#3b5998',
										color: 'white',
										height: '55px',
										width: '55px',
									}}
									variant="contained"
								>
									<GitHubIcon />
								</Button>
							</Link>
							<Link to="https://twitter.com/AndrijCikulaj">
								<Button
									onClick={() => {
										console.log('twitter')
									}}
									style={{
										backgroundColor: '#00acee',
										color: 'white',
										height: '55px',
										width: '55px',
									}}
									variant="contained"
								>
									<TwitterIcon />
								</Button>
							</Link>
							<Link to="https://www.linkedin.com/in/andrii-chykulai">
								<Button
									onClick={() => {
										console.log('linkedin')
									}}
									style={{
										backgroundColor: '#0e76a8',
										color: 'white',
										height: '55px',
										width: '55px',
									}}
									variant="contained"
								>
									<LinkedInIcon />
								</Button>
							</Link>
						</Stack>
					</Stack>
				</Grid>
			</Grid>
		</Box>
	)
}
