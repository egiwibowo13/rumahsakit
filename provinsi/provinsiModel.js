let mong = require('mongoose');

let provinsi = mong.Schema({
	kdProvinsi: Number,
	NamaProvinsi: String,
	Kota: {
		kdKota: Number,
		NamaKota: String,
		Kecamatan: {
			kdKecamatan: Number,
			NamaKecamatan: String
		}
	}
});

let Provinsi = module.exports = mong.model("Provinsi", provinsi, "Provinsi");