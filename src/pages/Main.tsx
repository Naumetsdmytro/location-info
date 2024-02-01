import { Box, Typography, Stack, Grid } from '@mui/material'
import mainImage from './assets/main.jpg'
import { SearchBtn } from '../shared'
import { SectionList } from '../entities/category'
import { Footer } from '../shared'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'

export const Main = () => {
  const [footerRef, inFooterView] = useInView({
    triggerOnce: true,
  })
  const [sectionRef, inSectionView] = useInView({
    triggerOnce: true,
  })

  const footerFadeProps = useSpring({
    opacity: inFooterView ? 1 : 0,
    transform: inFooterView ? 'translateY(0)' : 'translateY(20px)',
    config: {
      duration: 1000,
    },
  })

  const sectionFadeProps = useSpring({
    opacity: inSectionView ? 1 : 0,
    transform: inSectionView ? 'translateY(0)' : 'translateY(20px)',
    config: {
      duration: 1000,
    },
  })

  return (
    <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <img
        src={mainImage}
        alt="main-page"
        width="100%"
        height="50%"
      />
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Stack component={'div'} spacing={2} sx={{
          border: '2px solid #4d4d4d',
          backgroundColor: 'rgba(150, 150, 150, 0.2)',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '20px',
        }}>
          <Typography variant={'h3'} sx={{ color: 'rgba(1, 1, 1, 0.7)' }}>
            <span style={{ color: '#023e8a' }}>Search</span> any places near you
          </Typography>
        </Stack>
        <Typography variant={'h4'} sx={{ color: 'rgba(0, 100, 0)', marginBottom: '10px' }}>
          Find the best places in your city
        </Typography>
        <Stack component={'div'} spacing={2}>
          <SearchBtn />
        </Stack>
      </Grid>
      <animated.div ref={sectionRef} style={sectionFadeProps}>
        <SectionList />
      </animated.div>
      <animated.div ref={footerRef} style={footerFadeProps}>
        <Footer />
      </animated.div>
    </Box>
  )
}
