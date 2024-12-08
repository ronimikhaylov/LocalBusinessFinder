import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const BusinessList = ({ businesses }) => (
  <Box sx={{ display: 'grid', gap: 2 }}>
    {businesses.map((biz, index) => (
      <Card key={index} sx={{ animation: 'fade-in 0.5s ease' }}>
        <CardContent>
          <Typography variant="h6">{biz.name}</Typography>
          <Typography variant="body2">{biz.address}</Typography>
          <Typography variant="body2">Rating: {biz.rating}</Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default BusinessList;
