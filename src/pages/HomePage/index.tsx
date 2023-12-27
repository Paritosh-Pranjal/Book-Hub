import { Box, styled } from '@mui/material';
import NavBar from 'components/organisms/NavBar';
import React from 'react';
import { aboutImageData } from 'utils';
import library from '../../../public/assests/image/library-img.jpg';
import Typography from 'components/atoms/Typography';
import BookCollection from 'components/organisms/BooksCollection';

const StyledImageTypo = styled(Typography)({
  position: 'absolute',
  maxWidth: '30vw',
  fontWeight: 900,
  color: 'white',
});

const StyledImageBox = styled(Box)({
  backgroundImage: `url(${library})`,
  width: '100%',
  minHeight: '75vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'start',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '99%',
    minHeight: '75vh',
    backgroundColor: '#79096f',
    opacity: 0.5,
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '2rem'
});

const HomePage = () => {
  return (
    <div>
      <Box>
        <NavBar />
        <StyledImageBox>
          <StyledImageTypo variant="h6">
            <i>{aboutImageData.hookLine}</i>
          </StyledImageTypo>
        </StyledImageBox>
        <BookCollection />
      </Box>
    </div>
  );
};

export default HomePage;
