const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;
const MONGO_URI = 'mongodb://localhost:27017/railwayBooking'; // Replace with your MongoDB URI

mongoose.connect(MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.error(err));