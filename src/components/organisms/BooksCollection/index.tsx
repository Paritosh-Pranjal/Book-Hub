import { Search } from '@mui/icons-material';
import { Grid, Icon, styled } from '@mui/material';
import TextField from 'components/atoms/TextField';
import BookCard from 'components/molecules/BookCard';
import React, { useEffect, useState } from 'react';
import { fetchBookDetails } from 'services/calls';
import { booksCollectionData } from 'utils';
import coverNotFound from '../../../../public/assests/image/cover_not_found.jpg';
import Typography from 'components/atoms/Typography';

const StyledTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderRadius: '22px',
    height: '56px',
    color: 'purple',
    padding: '12px',
    border: '1px solid black',
    width: '50vw',
    marginTop: '10px',
  },
  display: 'flex',
  alignItems: 'center',
});

const BookCollection = () => {
  const [value, setValue] = useState('Harry');
  const [booksData, setBooksData] = useState([]);

  const handleTextFieldChange = (e: any) => {
    const input = e.target.value;
    if (input === '') {
      setValue('Harry');
    } else {
      setValue(input);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetchBookDetails(value);
      if (response.data.totalItems > 0) {
        setBooksData(response.data.items);
      } else {
        setBooksData([]);
      }
    };
    fetchBooks();
  }, [value]);

  return (
    <div>
      <StyledTextField
        placeholder={booksCollectionData.placeholder}
        onChange={handleTextFieldChange}
        InputProps={{
          endAdornment: (
            <Icon color="secondary">
              <Search />
            </Icon>
          ),
        }}
        autoComplete="false"
      />
      <Typography variant='h4'>
        <b>Your Search Result</b>
      </Typography>
      <Grid container spacing={2}>
        {booksData.length > 0 &&
          booksData.map((item, index) => {
            const thumbnail =
              item.volumeInfo.imageLinks?.thumbnail || 'FallbackThumbnailURL';

            return (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <BookCard
                  scr={thumbnail}
                  bookName={item.volumeInfo.title}
                  authorName={item.volumeInfo.authors}
                  bookPrice={item.saleInfo.saleability}
                  publishDate={item.volumeInfo.publishedDate}
                />
              </Grid>
            );
          })}

        {booksData.length <= 0 && (
          <img
            src={coverNotFound}
            alt="coverNotFound"
            style={{
              width: '30vw',
              height: '35vh',
              marginTop: '2rem',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'start',
            }}
          />
        )}
      </Grid>
    </div>
  );
};

export default BookCollection;
