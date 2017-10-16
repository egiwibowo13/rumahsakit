let mong = require('mongoose');

let perawatanDiagnosa = mong.Schema({
	KdDiagnosa : String,
	KdVariasiObat : String,
	JangkaPemakaianObat : String,
	TglPemberianObat : String,
	KdDiagnosaAwal : String,
	DosisObat : String
});

let PerawatanDiagnosa = module.exports = mong.model("PerawatanDiagnosa", perawatanDiagnosa, "PerawatanDiagnosa");