let ex = require('express');
let route = ex.Router();
let provinsiController = require('./provinsiController.js')

route.get('/provinsi', function (req, res) {
    provinsiController.getProvinsi(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});
route.get('/provinsi/:_id', function (req, res) {
    let id = req.params._id;
    provinsiController.getProvinsiById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/provinsi', function (req, res) {
    let provinsi = req.body;
    provinsiController.createProvinsi(provinsi, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/provinsi/:_id', function (req, res) {

    provinsiController.deleteProvinsi(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/provinsi/:_id', function (req, res) {
    let provinsi = req.body;
    provinsiController.updateProvinsi(req.params._id,provinsi, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;