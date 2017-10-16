Petugas = require('./petugasModel.js');

module.exports.getPetugas = function(callback,limit){
    Petugas.find(callback).limit(limit);
}

module.exports.getPetugasById = function(_id,callback){
    Petugas.findById(_id,callback);
}

module.exports.createPetugas = function(petugas,callback){
    Petugas.create(petugas,callback);
}

module.exports.deletePetugas = function(id,callback){
    Petugas.findByIdAndRemove(id,callback);
}

module.exports.updatePetugas = function(id,petugas,callback){
    Petugas.findByIdAndUpdate(id,petugas,callback);
}