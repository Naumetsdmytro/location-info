import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
	icon: React.ReactNode
	text: string
}

export const SectionItem = ({ icon, text }: Props) => {
	return (
		<Grid item lg={3} md={4} sm={6} xs={12}>
			<Link to={text.toLowerCase()}>
				<Paper
					elevation={3}
					sx={{
						alignItems: 'center',
						backgroundColor: '#9c27b0',
						color: '#fff',
						display: 'flex',
						flexDirection: 'column',
						height: 150,
						justifyContent: 'center',
						padding: 2,
					}}
				>
					{icon}
					<Typography variant="subtitle1">{text}</Typography>
				</Paper>
			</Link>
		</Grid>
	)
}
