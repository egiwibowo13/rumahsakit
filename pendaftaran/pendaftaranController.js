Pendaftaran = require('./pendaftaranModel.js');

module.exports.getPendaftaran = function(callback,limit){
    Pendaftaran.find(callback).limit(limit);
}

module.exports.getPendaftaranById = function(_id,callback){
    Pendaftaran.findById(_id,callback);
}

module.exports.createPendaftaran = function(pendaftaran,callback){
    Pendaftaran.create(pendaftaran,callback);
}

module.exports.deletePendaftaran = function(id,callback){
    Pendaftaran.findByIdAndRemove(id,callback);
}

module.exports.updatePendaftaran = function(id,pendaftaran,callback){
    Pendaftaran.findByIdAndUpdate(id,pendaftaran,callback);
}