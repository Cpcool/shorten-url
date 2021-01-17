let controller = require('../controllers');

module.exports = (app) => {
    app.post('/api/v1/short-url', controller.saveUrl)
    app.get('/:url', controller.getLongUrl)
    app.get('/', controller.home)
}