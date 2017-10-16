let ex = require('express');
let route = ex.Router();
let perawatanDiagnosaController = require('./perawatanDiagnosaController.js')

route.get('/perawatandiagnosa', function (req, res) {
    perawatanDiagnosaController.getPerawatanDiagnosa(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});
route.get('/perawatandiagnosa/:_id', function (req, res) {
    let id = req.params._id;
    perawatanDiagnosaController.getPerawatanDiagnosaById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/perawatandiagnosa', function (req, res) {
    let perawatanDiagnosa = req.body;
    perawatanDiagnosaController.createPerawatanDiagnosa(perawatanDiagnosa, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/perawatandiagnosa/:_id', function (req, res) {

    perawatanDiagnosaController.deletePerawatanDiagnosa(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/perawatandiagnosa/:_id', function (req, res) {
    let perawatanDiagnosa = req.body;
    perawatanDiagnosaController.updatePerawatanDiagnosa(req.params._id,perawatanDiagnosa, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;