const userRoute = require('./user.route');
const postRoute = require('./post.route');

function routes(app) {
    app.use('/api/users/', userRoute);
    app.use('/api/posts/', postRoute);
}

module.exports = { routes };