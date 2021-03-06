const express = require('express');

module.exports = function(app, data, models, validation) {
    const controller =
        require('../controllers/users-controller')(data, models, validation);

    const router = new express.Router();

    router
        .get('/',controller.getUsers)
    app.use('/users/', router);
};