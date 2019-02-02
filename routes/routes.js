const path = require('path');
const eventController = require('./events');
const authController = require('./auth');

module.exports = function (app, express) {
    const router = express.Router();

    router
        .route('/events')
        .get(eventController.getEvents)
        .post(eventController.addEvent);

    router
        .route('/events/:id')
        .delete(eventController.deleteEvent);

    router
        .route('/auth')
        .post(authController.validateAdmin);

    app.use('/api', router);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../src/index.html'));
    });
}
