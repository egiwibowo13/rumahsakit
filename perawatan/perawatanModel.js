let mong = require('mongoose');

let perawatan = mong.Schema({
	kdPerawatan: String,
	NamaPerawatan: String
	
});

let Perawatan = module.exports = mong.model("Perawatan", perawatan, "Perawatan");