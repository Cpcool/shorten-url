let controller = require('../controllers');

module.exports = (app) => {
    app.post('/api/v1/short-url', controller.saveUrl)
    app.get('/api/v1/short-url/:url', controller.getLongUrl)
    app.get('/', controller.home)
}