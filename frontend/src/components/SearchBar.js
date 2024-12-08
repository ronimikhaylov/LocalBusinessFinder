import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => (
  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 4 }}>
    <TextField
      fullWidth
      label="Search for a business"
      variant="outlined"
      onKeyPress={(e) => e.key === 'Enter' && onSearch(e.target.value)}
    />
    <Button
      variant="contained"
      onClick={() => onSearch(document.querySelector('input').value)}
      sx={{
        backgroundColor: '#6200ea',
        '&:hover': { backgroundColor: '#3700b3' },
      }}
    >
      Search
    </Button>
  </Box>
);

export default SearchBar;
