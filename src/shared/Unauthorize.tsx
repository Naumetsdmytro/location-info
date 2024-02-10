import { Box, Button, Typography } from '@mui/material'

export const Unauthorize = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '1rem',
      }}
    >
      <Typography component="h2" variant="h5" sx={{ textTransform: 'uppercase' }}>
        Oops! Access Denied
      </Typography>
      <Typography component="p" variant="body1" sx={{ marginTop: '1rem' }}>
        Sorry, but you are not authorized to view this page.
      </Typography>
      <Button sx={{ marginTop: '1rem' }} variant="contained" href="/">
        Go Home
      </Button>
    </Box>
  )
}