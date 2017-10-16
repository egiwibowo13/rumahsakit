let ex = require('express');
let route = ex.Router();
let rumahsakitController = require('./rumahsakitController.js')

route.get('/rumahsakit', function (req, res) {
    rumahsakitController.getRumahSakit(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});
route.get('/rumahsakit/:_id', function (req, res) {
    let id = req.params._id;
    rumahsakitController.getRumahSakitById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/rumahsakit', function (req, res) {
    let rumahsakit = req.body;
    rumahsakitController.createRumahSakit(rumahsakit, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/rumahsakit/:_id', function (req, res) {

    rumahsakitController.deleteRumahSakit(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/rumahsakit/:_id', function (req, res) {
    let rumahsakit = req.body;
    rumahsakitController.updateRumahSakit(req.params._id,rumahsakit, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;