import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
	icon: React.ReactNode
	text: string
}

export const SectionItem = ({ icon, text }: Props) => {
	return (
		<Grid item lg={3} md={4} sm={6} xs={12} sx={{ '&:hover': { transform: 'translateY(-5px)' } }}>
			<Link to={`/search/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
				<Paper
					elevation={3}
					sx={{
						alignItems: 'center',
						backgroundColor: theme => theme.palette.primary.main,
						borderRadius: '10px',
						color: 'white',
						display: 'flex',
						flexDirection: 'column',
						height: 150,
						justifyContent: 'center',
						padding: 2,
						transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
						'&:hover': {
							transform: 'scale(1.05)',
							boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
						},
					}}
				>
					{icon}
					<Typography variant="subtitle1" sx={{ marginTop: '10px' }}>
						{text}
					</Typography>
				</Paper>
			</Link>
		</Grid>
	)
}
