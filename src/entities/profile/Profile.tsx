import { Box, Typography, Stack, TextField, Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux'
import { useState } from 'react'

export const Profile = () => {
	const user = useSelector(selectUser)
	const [editing, setEditing] = useState(false)
	const [editedUser, setEditedUser] = useState({ ...user })

	const handleSave = () => {
		setEditing(false)
	}

	const handleCancel = () => {
		setEditedUser({ ...user })
		setEditing(false)
	}

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setEditing(true)
		setEditedUser((prevUser) => ({ ...prevUser, [name]: value }))
	}

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				paddingX: '100px',
			}}
		>
			<Typography variant="h3">{`Welcome ${user.firstName} ${user.lastName}`}</Typography>
			<Stack
				sx={{
					width: '50%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '20px',
				}}
			>
				<TextField
					fullWidth
					sx={{ margin: '10px' }}
					label="First Name"
					value={editing ? editedUser.firstName : user.firstName}
					onChange={handleChange}
					name="firstName"
				/>
				<TextField
					fullWidth
					sx={{ margin: '10px' }}
					label="Last Name"
					value={editing ? editedUser.lastName : user.lastName}
					onChange={handleChange}
					name="lastName"
				/>
				<TextField
					fullWidth
					sx={{ margin: '10px', cursor: 'not-allowed' }}
					label="Email"
					value={user.email}
					disabled
					name="email"
				/>
				<Typography variant="body1" sx={{ color: 'rgba(0, 0, 0, .5)' }}>You cannot change your email</Typography>
			</Stack>
			<Stack sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '20px',
			}}>
				{editing && (
					<>
						<Button onClick={handleSave} variant="contained" sx={{ marginRight: '10px' }}>
							Save
						</Button>
						<Button onClick={handleCancel} variant="outlined">
							Cancel
						</Button>
					</>
				)}
			</Stack>
		</Box>
	)
}
