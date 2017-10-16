let ex = require('express');
let route = ex.Router();
let pendaftaranController = require('./pendaftaranController.js')

route.get('/pendaftaran', function (req, res) {
    pendaftaranController.getPendaftaran(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});
route.get('/pendaftaran/:_id', function (req, res) {
    let id = req.params._id;
    pendaftaranController.getPendaftaranById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/pendaftaran', function (req, res) {
    let pendaftaran = req.body;
    pendaftaranController.createPendaftaran(pendaftaran, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/pendaftaran/:_id', function (req, res) {

    pendaftaranController.deletePendaftaran(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/pendaftaran/:_id', function (req, res) {
    let pendaftaran = req.body;
    pendaftaranController.updatePendaftaran(req.params._id,pendaftaran, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;