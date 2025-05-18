require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { connectDB } = require('./config/connection');
const { routes } = require('./routes/express.handler');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

connectDB();

app.get('/', (req, res) => res.send('Blog CMS Dashboard API'));

routes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`Server is running on port :: ${PORT}`);
});