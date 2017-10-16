let mong = require('mongoose');

let petugas = mong.Schema({
	kdPetugas: String,
	NamaPetugas: String,
	AlamatPetugas: String,
	NamaKota: String,
	NamaProvinsi: String,
	Kontak:{
		Telp: String,
		Deskripsi: String
	},
	AksesToko:{
		kdToko: String,
		NamaToko: String,
		kdAkses: String
	}
});

let Petugas = module.exports = mong.model("Petugas", petugas, "Petugas");