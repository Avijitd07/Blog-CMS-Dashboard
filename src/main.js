const express = require('express');
const connectDB = require('./config/connection');
const userRoute = require('./routes/user.route');
const blogRoute = require('./routes/blog.route');
const cors = require('cors');

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req, res) => res.send('Blog CMS Dashboard API'));
app.use('/cms/v1/user/', userRoute);
app.use('/cms/v1/blog/', blogRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Server is running on port :: --> ${PORT}`);
})