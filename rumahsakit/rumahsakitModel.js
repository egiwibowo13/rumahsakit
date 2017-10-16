let mong = require('mongoose');

let rumahsakit = mong.Schema({
    
    KdRumahSakit : String,
	NamaRumahSakit : String,
	AlamatRumahSakit : String,
	KdProvinsi : String,
	KdPos : String,
	JmlKamarVip : String,
	JmlKamarKlsIII : String,
	JmlKamarDarurat : String,
	BiayaAdmin : String
});

let RumahSakit = module.exports = mong.model("RumahSakit", rumahsakit, "RumahSakit");