const express = require('express');
const axios = require('axios');
const router = express.Router();


//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


const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

router.get('/places', async (req, res) => {
    const location = req.query.location || '34.0522,-118.2437';
    const radius = req.query.radius || '5000';
    const type = req.query.type || 'restaurant';

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
            params: {
                location,
                radius,
                type,
                key: GOOGLE_API_KEY,
            },
        });

        // Format the response
        const results = response.data.results.map((place) => ({
            name: place.name,
            address: place.vicinity,
            rating: place.rating || 'N/A',
            types: place.types || [],
            photo: place.photos?.[0]?.photo_reference || null,
        }));

        res.json(results); // Send formatted results to the frontend
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({ message: 'Failed to fetch data from Google Places API' });
    }
});




module.exports = router;
