const path = require('path');
const eventController = require('./events');

module.exports = function (app, express) {
    const router = express.Router();

    router
        .route('/events')
        .get(eventController.getEvents);

    app.use('/api', router);

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../src/index.html'));
    });
}