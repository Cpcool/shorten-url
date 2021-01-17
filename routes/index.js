let controller = require('../controllers');

module.exports = (app) => {
    app.get('/', controller.home)
    app.post('/api/v1/short-url', controller.saveUrl)
    app.get('/:url', controller.getLongUrl)
}