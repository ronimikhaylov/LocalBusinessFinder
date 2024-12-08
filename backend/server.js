const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Import Routes
const googleRoutes = require('./routes/googleRoutes');
app.use('/api/google', googleRoutes); // Mount the route here




const PORT = process.env.PORT || 5001;



// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Test Route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
