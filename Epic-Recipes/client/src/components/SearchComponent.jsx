import * as React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import {useMediaQuery } from '@mui/material';

export default function SearchComponent() {
  const [query, setQuery] = useState('');
  // const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const navigate = useNavigate();

  const isMobile = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSearch = (e) => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <Stack direction="row">
                <TextField
                  id="searchBar"
                  variant="outlined"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  sx={{backgroundColor: 'rgba(0, 0, 0, 0.55)',
                  width:isMobile ? '300px' : '500px'
                  }}
                  InputProps={{
                    style: {
                      fontFamily: 'Alkatra',
                      fontWeight: 'bold',
                      color: 'whitesmoke',
                      width: '100%', // Set the width to '100%' for responsiveness
                      maxWidth: '800px', // Set the maximum width for larger screen
                    },
                  }}
                />
                <Button variant="contained" sx={{ backgroundColor: 'black', color: 'white', fontFamily: 'Alkatra' }} onClick={handleSearch}>
                <SearchIcon fontSize="large" />
                </Button>
              </Stack>
  );
}
