let ex = require('express');
let route = ex.Router();
let perawatanController = require('./perawatanController.js')

route.get('/perawatan', function (req, res) {
    perawatanController.getPerawatan(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});
route.get('/perawatan/:_id', function (req, res) {
    let id = req.params._id;
    perawatanController.getPerawatanById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/perawatan', function (req, res) {
    let perawatan = req.body;
    perawatanController.createPerawatan(perawatan, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/perawatan/:_id', function (req, res) {

    perawatanController.deletePerawatan(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/perawatan/:_id', function (req, res) {
    let perawatan = req.body;
    perawatanController.updatePerawatan(req.params._id,perawatan, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;