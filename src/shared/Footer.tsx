import {
  Box,
  Grid,
  Stack,
  Typography,
  Button,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material'
import { useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PersonIcon from '@mui/icons-material/Person'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import { Link } from 'react-router-dom'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme } from './hooks/useTheme'

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
    <Box
      component="div"
      sx={{ paddingX: '100px', paddingTop: '100px', paddingBottom: '30px' }}
    >
      <Grid container spacing={8}>
        <Grid item xs={6} md={12}>
          <Divider />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingY: '60px' }}
          >
            <Typography
              variant={'h6'}
              sx={{
                color: 'rgba(0, 0, 0, .5)',
                marginBottom: '5px',
                fontWeight: 100,
              }}
            >
              NEWSLETTER
            </Typography>
            <Stack direction="row" alignItems="center">
              <TextField
                value={name}
                onChange={handleNameChange}
                placeholder="Name"
                variant="outlined"
                sx={{
                  width: '300px',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  borderRadius: '10px',
                  marginRight: '70px',
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <PersonIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                value={email}
                onChange={handleEmailChange}
                placeholder="Your Email"
                variant="outlined"
                sx={{
                  width: '300px',
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
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#5a67d8',
                  color: 'white',
                  height: '55px',
                  width: '200px',
                }}
                onClick={() => {
                  console.log('subscribe')
                }}
              >
                Subscribe
              </Button>
            </Stack>
          </Stack>
          <Divider />
        </Grid>
        <Grid item xs={6} md={12}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="column" spacing={2}>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                ABOUT
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                About Us
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                Contact Us
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                Careers
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                HELP
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                Payments
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                Shipping
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                Cancellation & Returns
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography
                variant={'h6'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                POLICY
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                Return Policy
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                Terms Of Use
              </Typography>
              <Typography
                variant={'body1'}
                sx={{
                  color: 'rgba(0, 0, 0, .5)',
                  marginBottom: '5px',
                  fontWeight: 100,
                }}
              >
                Security
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6} md={12}>
          <Divider />
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingY: '60px' }}
          >
            <Typography
              variant={'h6'}
              sx={{
                color: 'rgba(0, 0, 0, .5)',
                marginBottom: '5px',
                fontWeight: 100,
              }}
            >
              &copy; 2024 Location-info
            </Typography>
            <Button onClick={toggleTheme}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </Button>
            <Stack direction="row" spacing={2}>
              <Link to="https://github.com/Naumetsdmytro/location-info/tree/main">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#3b5998',
                    color: 'white',
                    height: '55px',
                    width: '55px',
                  }}
                  onClick={() => {
                    console.log('facebook')
                  }}
                >
                  <GitHubIcon />
                </Button>
              </Link>
              <Link to="https://twitter.com/AndrijCikulaj">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#00acee',
                    color: 'white',
                    height: '55px',
                    width: '55px',
                  }}
                  onClick={() => {
                    console.log('twitter')
                  }}
                >
                  <TwitterIcon />
                </Button>
              </Link>
              <Link to="https://www.linkedin.com/in/andrii-chykulai">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: '#0e76a8',
                    color: 'white',
                    height: '55px',
                    width: '55px',
                  }}
                  onClick={() => {
                    console.log('linkedin')
                  }}
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
