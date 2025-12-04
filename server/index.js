const express = require('express');
// const connectDB = require('./config/db.js');
const cors = require('cors');

// routes
const foods = require('./routes/api/foods');
const contact = require('./routes/api/contact');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/foods', foods);
app.use('/api/contact', contact);


const port = process.env.PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));