const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/UserRoutes');
const EmployeeRoutes = require('./routes/EmployeeRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comp3123_assignment1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Define routes
app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/emp', EmployeeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
