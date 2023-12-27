import { Box, styled } from '@mui/material';
import Typography from 'components/atoms/Typography';
import React from 'react';

export interface BookCardProps {
  scr: string;
  bookName: string;
  authorName: string;
  bookPrice: string;
  publishDate: string;
}

const StyledMainBox = styled(Box)({
  minHeight: '55vh',
  boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  marginBottom: '10px',
  cursor: 'pointer',
  marginTop: '10px',
  marginRight: '10px',
});

const BookCard = (props: BookCardProps) => {
  return (
    <StyledMainBox>
      <img src={props.scr} alt="content" />
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent="start"
        alignItems="center"
        marginTop="2rem"
      >
        <Typography variant="body2" color={'black'}>
          <b>Book Name: </b>
        </Typography>
        <Typography variant="caption" color={'black'}>
          {props.bookName}
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent="start"
        alignItems="center"
        marginTop={'10px'}
      >
        <Typography variant="body2" color={'black'}>
          <b>Author: </b>
        </Typography>
        <Typography variant="caption" color={'black'}>
          {props.authorName}
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent="start"
        alignItems="center"
        marginTop={'10px'}
      >
        <Typography variant="body2" color={'black'}>
          <b>Retail Price (in Rs): </b>
        </Typography>
        <Typography variant="caption" color={'black'}>
          {props.bookPrice}
        </Typography>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'row'}
        justifyContent="start"
        alignItems="center"
        marginTop={'10px'}
      >
        <Typography variant="body2" color={'black'}>
          <b>Published Date: </b>
        </Typography>
        <Typography variant="caption" color={'black'}>
          {props.publishDate}
        </Typography>
      </Box>
    </StyledMainBox>
  );
};

export default BookCard;
