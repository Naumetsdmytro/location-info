import React from 'react'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import GitHubIcon from '@mui/icons-material/GitHub'
import LightModeIcon from '@mui/icons-material/LightMode'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '../../shared/hooks/useTheme'

export const Footer = () => {
	const { isDark, toggleTheme } = useTheme()

	return (
		<Box component="div" sx={{ paddingBottom: '30px', paddingTop: '100px', paddingX: '100px' }}>
			<Grid container>
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
