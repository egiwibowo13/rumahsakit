let mong = require('mongoose');

let pendaftaran = mong.Schema({
    KdPendaftaran : String,
	KdPasien : String,
	KdRumahSakit : String,
	KdRuangDiagnosa : String,
	TglPendaftaran : String
});

let Pendaftaran = module.exports = mong.model("Pendaftaran", pendaftaran, "Pendaftaran");